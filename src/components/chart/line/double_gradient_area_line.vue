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
    options: Object,
    setList: Array,
    colorList: Array
})

let option = {
    backgroundColor: 'rgba(12, 12, 52, 0)',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        formatter: function (params) {
            let res = "";
            res = params.seriesName + "<br/>" + "Time:  " + params.data.time + "<br/>" + params.marker + params.data.name + ":  " + params.data.value;
            return res;
        }
    },
    grid: {
        top: '3%',
        bottom: '10%',
        left: '5%',
        right: '5%',
        containLabel: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0F133F'
            }
        },
        axisTick: {
            show: false
        },
        data: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
    },
    yAxis: {
        type: 'value',
        // min: 'dataMin',
        // max: 'dataMax',
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0F133F'
            }
        }
    },
    series: []
};

const chartInit = () => {
    let myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    let series = []
    for (let i = 0; i < 20; i++) {
        if (i % 2 == 0) {
            series.push({
                name: props.setList[0],
                type: 'line',
                smooth: true,
                lineStyle: {
                    type: "solid",
                    width: 1,
                    color: props.colorList[Math.floor(i / 2)]
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: props.options.series[i].data
            })
        } else {
            series.push({
                name: props.setList[1],
                type: 'line',
                smooth: true,
                lineStyle: {
                    type: "dashed",
                    width: 1,
                    color: props.colorList[Math.floor(i / 2)]
                },
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: props.options.series[i].data
            })
        }
    }
    option.series = series
    option && myChart.setOption(option);
    emitter.on("chart:analog", (value) => {
        console.log(value);
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