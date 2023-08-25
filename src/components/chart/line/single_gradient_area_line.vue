<template>
    <div class="single_gradient_area_line">
        <BottomLineBox :name="props.name"></BottomLineBox>
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
    color: ['#00DDFF'],
    backgroundColor: 'rgba(12, 12, 52, 0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#000000'
            }
        }
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
            data: ['0', '2', '4', '6', '8', '10']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#16266F'
                }
            }
        }
    ],
    series: [
        {
            name: 'name',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 2,
                color: 'rgb(9,247,173, 1)'
            },
            // showSymbol: false,
            areaStyle: {
                opacity: 0.7,
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(9,247,173, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(9,247,173, 0)'
                    }
                ])
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        }
    ]
};

const chartInit = () => {
    option.series = props.option.series
    let myChart = proxy.$echarts.init(document.getElementById(props.chartId), 'dark');
    option && myChart.setOption(option);
}

onMounted(async () => {
    await nextTick(() => {
        chartInit()
    })
})
</script>

<style scoped lang="scss">
.single_gradient_area_line {
    width: 100%;
    height: 100%;

    .chart {
        width: 100%;
        height: calc(100% - 30px);
        // background-color: aliceblue;
    }
}
</style>