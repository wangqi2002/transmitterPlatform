<template>
    <div class="gradient_bar">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div class="chart_area">
            <div class="top_name">
                {{ props.group[0] }}
            </div>
            <div id="chart_bar_one" class="top_chart chart"></div>
            <div class="bottom_name">
                {{ props.group[1] }}
            </div>
            <div id="chart_bar_two" class="bottom_chart chart"></div>
        </div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../module/bottom_line_box.vue";
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import emitter from "../../../units/mittBus"

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    options: Array,
    group: Array
})
let option1 = {
    color: props.options[0].color,
    legend: { show: false },
    grid: {
        left: '5',
        right: '12',
        top: '100%',
        bottom: '100%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max: 400,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        data: []
    },
    series: [
        {
            name: props.options[0].series[0].name,
            type: 'bar',
            stack: 'total',
            barMaxWidth: 25,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
                show: true,
                color: "#ffffff",
                position: 'insideRight'
            },
            emphasis: {
                focus: 'series'
            },
            data: props.options[0].series[0].data
        }
    ]
};
let option2 = {
    color: props.options[1].color,
    legend: { show: false },
    grid: {
        left: '5',
        right: '12',
        top: '100%',
        bottom: '100%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max: 400,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        data: []
    },
    series: [
        {
            name: props.options[1].series[0].name,
            type: 'bar',
            stack: 'total',
            barMaxWidth: 25,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
                show: true,
                color: "#ffffff",
                position: 'insideRight'
            },
            emphasis: {
                focus: 'series'
            },
            data: props.options[1].series[0].data
        }
    ]
};

const chartInit = () => {
    let myChart1 = proxy.$echarts.init(document.getElementById('chart_bar_one'));
    option1 && myChart1.setOption(option1);
    let myChart2 = proxy.$echarts.init(document.getElementById('chart_bar_two'));
    option2 && myChart2.setOption(option2);
}

onMounted(async () => {
    await nextTick(() => {
        chartInit()
    })
})
</script>

<style scoped lang="scss">
.gradient_bar {
    width: 100%;
    height: 100%;

    .chart_area {
        width: 100%;
        height: calc(100% - 35px);
        margin-top: 5px;
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-gap: 10px 5px;
        grid-auto-rows: 1fr 1fr;

        .top_name {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            margin: auto;
            color: #ffffff;
        }

        .top_chart {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            // background-color: rgb(60, 163, 253);
        }

        .bottom_name {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 3;
            margin: auto;
            color: #ffffff;
        }

        .bottom_chart {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 3;
        }

        .chart {
            width: 100%;
            height: 100%;
            // background-color: aliceblue;
        }
    }
}
</style>