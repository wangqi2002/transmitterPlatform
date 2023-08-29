<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="XX电子管放大器监测"></MonitorTitle>
        </div>
        <div class="top_aside">
            <GradientBar name="当前功率" :group="groups" :options="options1"></GradientBar>
        </div>
        <div class="bottom_aside"></div>
    </div>
</template>

<script setup>
import MonitorTitle from "./module/monitor_title.vue";
import GradientBar from "./chart/bar/gradient_bar.vue";
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const groups = ref(['1#机', '2#机'])
const options1 = ref([
    {
        color: [
            new proxy.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: 'rgba(10,156,215)' },
                { offset: 1, color: 'rgba(52,223,255)' }
            ])
        ],
        series: [
            {
                name: '1#',
                data: [320]
            }
        ]
    },
    {
        color: [
            new proxy.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: 'rgba(10,156,215)' },
                { offset: 1, color: 'rgba(52,223,255)' }
            ])
        ],
        series: [
            {
                name: '2#',
                data: [220]
            }
        ]
    }
])
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 1fr 1.5fr;

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
    }
}
</style>