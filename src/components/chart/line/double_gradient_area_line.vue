<template>
    <div class="double_gradient_area_line">
        <div :id="chartId" class="chart"></div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import emitter from "../../../units/mittBus"

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    options: Object
})

let option = {
    color: ['#80FFA5', '#00DDFF'],
    backgroundColor: 'rgba(12, 12, 52, 0)',
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
        data: props.options.legend.data,
        textStyle: {
            color: '#B5B5C5'
        }
    },
    grid: {
        top: '10%',
        bottom: '10%',
        left: '11%',
        right: '11%',
        containLabel: false
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#B5B5C5'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#B5B5C5'
                }
            },
            axisLabel: {
                //坐标轴 标签
                show: false, //是否显示
                color: '#B5B5C5'
            },
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            // min: 'dataMin',
            max: 'dataMax',
            axisLabel: {
                //坐标轴 标签
                show: true, //是否显示
                color: '#B5B5C5'
            },
            splitLine: {
                //grid 区域中的分隔线
                show: false,
            }
        },
        {
            type: 'value',
            // min: 'dataMin',
            max: 'dataMax',
            axisLabel: {
                //坐标轴 标签
                show: true, //是否显示
                color: '#B5B5C5'
            },
            splitLine: {
                //grid 区域中的分隔线
                show: false,
            }
        }
    ],
    series: [
        {
            name: '灯丝流',
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
            data: props.options.series[0].data
        },
        {
            name: '灯丝压',
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
            data: props.options.series[1].data
        }
    ]
};

const chartInit = () => {
    let myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    option && myChart.setOption(option);
    emitter.on("chart:analog", (value) => {
        myChart.setOption({
            series: value
        });
    })
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