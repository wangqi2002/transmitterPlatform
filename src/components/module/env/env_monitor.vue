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
import { getRandomInt, formatter } from "../../../units/tools"

const { proxy } = getCurrentInstance();

const option1 = {
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
            data: [140, 232, 101, 264, 90, 340, 250]
        }
    ]
};
const option2 = {
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
            data: [80, 120, 181, 164, 290, 250, 340]
        }
    ]
};
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