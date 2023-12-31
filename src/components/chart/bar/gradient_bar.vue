<template>
    <div class="gradient_bar">
        <div class="bar_name">
            {{ props.name }}
        </div>
        <div :id="props.chartId" class="chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick, watch } from "vue";
import emitter from "../../../units/mittBus"

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    options: Object
})
let myChart = null;
let option = {
    color: props.options.color,
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
        max: 40,
        min: 0,
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
            name: props.options.series[0].name,
            type: 'bar',
            stack: 'total',
            barMaxWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
                show: true,
                formatter: '{c}MHz',
                color: "#ffffff",
                position: 'insideRight'
            },
            emphasis: {
                focus: 'series'
            },
            data: props.options.series[0].data
        }
    ]
};

const chartInit = () => {
    if (!myChart) {
        myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    }
    option && myChart.setOption(option);
}

watch(props, (newProps) => {
    try {
        option.series[0].name = newProps.options.series[0].name;
        option.series[0].data = newProps.options.series[0].data;
        setTimeout(() => {
            chartInit()
        }, 500)
    } catch (error) {
        console.error(error)
    }
});

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
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 5px;

    .bar_name {
        grid-column-start: 1;
        grid-column-end: 2;
        margin: auto;
        color: #ffffff;
    }

    .chart {
        grid-column-start: 2;
        grid-column-end: 3;
        width: 100%;
        height: 100%;
    }
}
</style>