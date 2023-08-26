<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="模拟量监测"></MonitorTitle>
        </div>
        <div class="top_aside">
            <DoubleGradientAreaLine chartId="analogLine" :option="option"></DoubleGradientAreaLine>
        </div>
        <div class="bottom_aside">
            <span class="analog_item" v-for="(item, index) in analogList" :key="index">
                <span class="analog_item_name">{{ item.name }}</span>
                <span class="analog_item_value">{{ item.value }}</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "./module/monitor_title.vue";
import DoubleGradientAreaLine from "./chart/line/double_gradient_area_line.vue";
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const analogList = ref([
    { name: '灯丝流', value: '400A' },
    { name: '栅流', value: '0.8A' },
    { name: '阳流', value: '28A' },
    { name: '帘栅流', value: '1.5A' },
    { name: '灯丝压', value: '19V' },
    { name: '栅压', value: '480V' },
    { name: '阳压', value: '13kV' },
    { name: '帘栅压', value: '1.2kW' },
])
const option = {
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
        data: ['灯丝流', '灯丝压'],
        textStyle: {
            color: '#B5B5C5'
        }
    },
    grid: {
        top: '10%',
        bottom: '10%',
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
            min: 'dataMin',
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
            min: 'dataMin',
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
            data: [100, 1802, 180, 2020, 278, 3280, 210, 1300, 130, 2900]
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
            data: [200, 442, 611, 904, 850, 1100, 1230, 1310, 1503, 1420]
        }
    ]
};
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 5fr 1fr;

    .header {
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .top_aside {
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .bottom_aside {
        grid-row-start: 3;
        grid-row-end: 4;

        .analog_item {
            display: inline-block;
            width: 90px;
            height: 21px;
            margin: 4px 0px 0px 4px;
            vertical-align: middle;
            text-align: left;
            font-size: 12px;

            .analog_item_name {
                display: inline-block;
                vertical-align: middle;
                line-height: 21px;
                width: 42px;
                height: 100%;
                color: #B5B5C5;
            }

            .analog_item_value {
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 48px);
                height: 100%;
                line-height: 21px;
                color: #9EB45A;
            }
        }
    }
}
</style>