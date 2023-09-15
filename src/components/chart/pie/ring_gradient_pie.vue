<template>
    <div class="ring_gradient_pie">
        <div :id="chartId" class="chart"></div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import { ref, onMounted, getCurrentInstance, nextTick, watch } from "vue";

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    options: Object
})
let myChart = null;

let option = {
    title: {
        text: '开关启动率',
        bottom: 'bottom',
        left: 24,
        textStyle: {
            fontSize: 14,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 1)'
        },
    },
    color: [
        new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(10,156,215)' },
            { offset: 1, color: 'rgba(52,223,255)' }
        ]),
        new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(146,243,111)' },
            { offset: 1, color: 'rgba(57,158,25)' }
        ]),
        new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(213,119,128)' },
            { offset: 1, color: 'rgba(221,82,82)' }
        ])
    ],
    backgroundColor: 'rgba(12, 12, 52, 0)',
    legend: {
        right: 50,
        top: 'middle',
        orient: 'vertical',
        height: 100,
        itemGap: 15,
        itemWidth: 14.5,
        itemHeight: 14.5,
        icon: "circle",
        textStyle: {
            color: 'rgba(255, 255, 255, 1)'
        }
    },
    series: [
        {
            type: 'pie',
            zlevel: 1,
            radius: ['55%', '62%'],
            center: ["27%", "42%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
            },
            labelLine: {
                show: false
            },
            data: props.options.series[0].data
        },
        {
            type: 'pie',
            zlevel: 0,
            radius: ['78%'],
            center: ['27%', '42%'],
            data: [
                { value: 1, itemStyle: { color: 'rgba(15,30,93,0.5)' } }
            ]
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
.ring_gradient_pie {
    width: 100%;
    height: 100%;

    .chart {
        width: 100%;
        height: 100%;
    }
}
</style>