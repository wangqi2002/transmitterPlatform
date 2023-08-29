<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="模拟量监测"></MonitorTitle>
        </div>
        <div class="top_aside">
            <DoubleGradientAreaLine chartId="analogLine" :option="option"></DoubleGradientAreaLine>
        </div>
        <div class="bottom_aside">
            <span class="analog_item" v-for="(item, index) in analogList" :key="index">
                <span class="analog_item_name">{{ item.name }}</span>
                <span class="analog_item_value">{{ item.value }}</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "./module/monitor_title.vue";
import DoubleGradientAreaLine from "./chart/line/double_gradient_area_line.vue";
import { ref, onMounted, getCurrentInstance } from "vue";
import emitter from "../units/mittBus"
import { getRandomInt, formatter } from "../units/tools"

const analogList = ref([
    { name: '灯丝流', value: '400A' },
    { name: '栅流', value: '0.8A' },
    { name: '阳流', value: '28A' },
    { name: '帘栅流', value: '1.5A' },
    { name: '灯丝压', value: '19V' },
    { name: '栅压', value: '480V' },
    { name: '阳压', value: '13kV' },
    { name: '帘栅压', value: '1.2kW' },
])
let data1 = [0, 10, 30, 56, 35, 50, 68, 85, 72, 90]
let data2 = [5, 15, 25, 27, 40, 50, 55, 75, 80, 95]
let count = 1
const option = {
    legend: {
        data: ['灯丝流', '灯丝压']
    },
    series: [
        {
            data: data1
        },
        {
            data: data2
        }
    ]
};
onMounted(() => {
    setInterval(function () {
        if (count > 20) {
            count = 1
            data1 = [0, 10, 30, 56, 35, 50, 68, 85, 72, 90]
            data2 = [5, 15, 25, 27, 40, 50, 55, 75, 80, 95]
        }
        let coefficient1 = formatter(2).format(count / getRandomInt(1, 3))
        let coefficient2 = formatter(2).format(count / getRandomInt(1, 3))
        data1.shift();
        data1.push(getRandomInt(100 * coefficient1, 130 * coefficient1));
        data2.shift();
        data2.push(getRandomInt(80 * coefficient2, 120 * coefficient2));
        emitter.emit("chart:analog", [
            {
                data: data1
            },
            {
                data: data2
            }
        ])
        count++
    }, 2000);
})
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 5fr 1fr;

    .header {
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .top_aside {
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .bottom_aside {
        grid-row-start: 3;
        grid-row-end: 4;

        .analog_item {
            display: inline-block;
            width: 90px;
            height: 21px;
            margin: 4px 0px 0px 4px;
            vertical-align: middle;
            text-align: left;
            font-size: 12px;

            .analog_item_name {
                display: inline-block;
                vertical-align: middle;
                line-height: 21px;
                width: 42px;
                height: 100%;
                color: #B5B5C5;
            }

            .analog_item_value {
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 48px);
                height: 100%;
                line-height: 21px;
                color: #9EB45A;
            }
        }
    }
}
</style>