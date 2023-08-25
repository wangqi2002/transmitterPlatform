<template>
    <div class="double_gradient_area_line">
        <div :id="chartId" class="chart"></div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../module/bottom_line_box.vue";
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    option: Object
})

let option = {
    color: ['#80FFA5', '#00DDFF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2']
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '15%',
        containLabel: false
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                //坐标轴 标签
                show: true, //是否显示
            },
            splitLine: {
                //grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#ccc',
                }
            }
        },
        {
            type: 'value',
            axisLabel: {
                //坐标轴 标签
                show: true, //是否显示
            },
            splitLine: {
                //grid 区域中的分隔线
                show: true,
                lineStyle: {
                    color: '#ccc',
                }
            }
        }
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 2
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [10, 202, 18, 220, 27, 280, 210]
        },
        {
            name: 'Line 2',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            lineStyle: {
                width: 2
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 82, 111, 204, 220, 260, 310]
        }
    ]
};

const chartInit = () => {
    let myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    props.option && myChart.setOption(props.option);
}

onMounted(async () => {
    await nextTick(() => {
        chartInit()
    })
})
</script>

<style scoped lang="scss">
.double_gradient_area_line {
    width: 100%;
    height: 100%;

    .chart {
        width: 100%;
        height: 100%;
        background-color: rgba(16, 49, 92, 0.5);
    }
}
</style>