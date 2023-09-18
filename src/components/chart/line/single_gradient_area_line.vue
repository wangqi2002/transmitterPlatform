<template>
    <div class="single_gradient_area_line">
        <BottomLineBox :name="props.name"></BottomLineBox>
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
// todo: 确定怎么配置option 1.全用外部  2.样式用外部   （所有表格都存在这个问题）
let option = {
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
            axisLabel: {
                //坐标轴 标签
                show: true, //是否显示
                color: '#B5B5C5'
            },
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
                    color: 'rgba(44, 78, 175, 0.8)'
                }
            }
        }
    ],
    series: [
        {
            name: props.options.series[0].name,
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 2,
                color: 'rgb(9,247,173, 1)'
            },
            showSymbol: false,
            areaStyle: props.options.series[0].areaStyle,
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