<template>
    <div class="out_gradient_gauge">
        <div :id="props.chartId" class="chart"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import emitter from "../../../units/mittBus"

const { proxy } = getCurrentInstance();
const props = defineProps({
    chartId: String,
    options: Object
})
let option = {
    title: {
        text: props.options.title.text,
        textStyle: {
            color: '#ffffff',
            lineHeight: 14,
            fontSize: 11
        },
        subtext: '(W)',
        subtextStyle: {
            color: '#ffffff',
            lineHeight: 14,
            fontSize: 11
        },
        itemGap: 0,
        left: 'center',
        bottom: 2
    },
    series: [
        {
            type: 'gauge',
            center: ['50%', '70%'],
            radius: "95%",
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: props.options.series[0].max,
            splitNumber: 10,
            itemStyle: props.options.series[0].itemStyle,
            progress: {
                show: true,
                width: 8
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 8,
                    color: [[1, '#10315C']]
                }
            },
            axisTick: {
                distance: -12,
                splitNumber: 5,
                length: 2,
                lineStyle: {
                    width: 1,
                    color: '#2E579B'
                }
            },
            splitLine: {
                distance: -15,
                length: 3,
                lineStyle: {
                    width: 1,
                    color: '#2E579B'
                }
            },
            axisLabel: {
                distance: -8,
                color: '#2E579B',
                fontSize: 6
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 20,
                borderRadius: 8,
                offsetCenter: [0, '-25%'],
                fontSize: 20,
                fontWeight: 'bolder',
                color: props.options.series[0].detail.color
            },
            data: props.options.series[0].data
        }
    ]
};

const chartInit = () => {
    let myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    option && myChart.setOption(option);
}

onMounted(async () => {
    await nextTick(() => {
        chartInit()
    })
})
</script>

<style scoped lang="scss">
.out_gradient_gauge {
    width: 100%;
    height: 100%;

    .chart {
        width: 100%;
        height: 100%;
    }
}
</style>