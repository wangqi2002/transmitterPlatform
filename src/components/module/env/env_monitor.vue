<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="环境检测"></MonitorTitle>
        </div>
        <div class="left_aside">
            <SingleGradientAreaLine name="温度" chartId="temperature" :options="option1"></SingleGradientAreaLine>
        </div>
        <div class="right_aside">
            <SingleGradientAreaLine name="湿度" chartId="humidness" :options="option2"></SingleGradientAreaLine>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "../../common/monitor_title.vue";
import SingleGradientAreaLine from "../../chart/line/single_gradient_area_line.vue";
import { ref, onMounted, getCurrentInstance } from "vue";
import emitter from "../../../units/mittBus"
import { getRandomInt, formatter, getBeforeTime } from "../../../units/tools"

const { proxy } = getCurrentInstance();

const option1 = ref({
    xAxis: [
        {
            data: []
        }
    ],
    yAxis: [
        {
            max: 40,
            min: 10
        }
    ],
    series: [
        {
            name: '温度',
            // showSymbol: false,
            areaStyle: {
                opacity: 0.7,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(9, 247, 173, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(9, 247, 173, 0)'
                    }
                ])
            },
            data: []
        }
    ]
});
const option2 = ref({
    xAxis: [
        {
            data: []
        }
    ],
    yAxis: [
        {
            max: 35,
            min: 65
        }
    ],
    series: [
        {
            name: '湿度',
            areaStyle: {
                opacity: 0.7,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(51, 223, 253, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(51, 223, 253, 0)'
                    }
                ])
            },
            data: []
        }
    ]
});

const csData = (dataArr, flag) => {
    let obj = dataArr;
    if (flag) {
        obj.shift()
        let num = getRandomInt(45, 55)
        obj.push({ label: `${num}%`, value: num });
    } else {
        obj.shift()
        let num = getRandomInt(20, 30)
        obj.push({ label: `${num}&#8451;`, value: num });
    }
    return obj;
};

onMounted(() => {
    setTimeout(function () {
        let date = new Date()
        let xData = [getBeforeTime(date, 5), getBeforeTime(date, 4), getBeforeTime(date, 3), getBeforeTime(date, 2), getBeforeTime(date, 1), getBeforeTime(date, 0)]
        option1.value.xAxis[0].data = xData
        option1.value.series[0].data = [
            { label: '25&#8451;', value: 25 },
            { label: '25&#8451;', value: 25 },
            { label: '25&#8451;', value: 25 },
            { label: '25&#8451;', value: 25 },
            { label: '25&#8451;', value: 25 },
            { label: '25&#8451;', value: 25 },
        ]
        option2.value.xAxis[0].data = xData
        option2.value.series[0].data = [
            { label: '50%', value: 50 },
            { label: '50%', value: 50 },
            { label: '50%', value: 50 },
            { label: '50%', value: 50 },
            { label: '50%', value: 50 },
            { label: '50%', value: 50 },
        ]
    }, 300);
    setInterval(function () {
        let date = option1.value.xAxis[0].data[option1.value.xAxis[0].data.length - 1]
        let xData = option1.value.xAxis[0].data
        xData.shift()
        xData.push(getBeforeTime(date, -1))
        option1.value.xAxis[0].data = xData
        option2.value.xAxis[0].data = xData
        option1.value.series[0].data = csData(option1.value.series[0].data, 0)
        option2.value.series[0].data = csData(option2.value.series[0].data, 1)
    }, 60000);
});
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px 10px;
    grid-auto-rows: 30px 1fr;

    .header {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .left_aside {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .right_aside {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
}
</style>