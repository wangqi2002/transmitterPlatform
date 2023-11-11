<template>
    <div class="single_gradient_area_line">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div :id="chartId" class="chart"></div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import { ref, onMounted, getCurrentInstance, nextTick, watch } from "vue";
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
        },
        formatter: function (params) {
            let res = "";
            res = "时间:  " + params[0].axisValue + "<br/>" + "值:  " + params[0].data.label;
            return res;
        }
    },
    grid: {
        left: '6%',
        right: '6%',
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
                color: '#B5B5C5',
                formatter: function (value, index) {
                    // 格式化成月/日，只在第一个刻度显示年份
                    var date = new Date(value);
                    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
                    var f = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
                    var formatdate = h + ":" + f;
                    return formatdate
                }
            },
            data: props.options.xAxis[0].data
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
            },
            max: props.options.yAxis[0].max,
            min: props.options.yAxis[0].min
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
let myChart = null;

const chartInit = () => {
    if (!myChart) {
        myChart = proxy.$echarts.init(document.getElementById(props.chartId));
    }
    option && myChart.setOption(option);
}

watch(props, (newProps) => {
    try {
        option.xAxis[0].data = newProps.options.xAxis[0].data;
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