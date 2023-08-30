<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="XX电子管放大器监测"></MonitorTitle>
        </div>
        <div class="top_aside">
            <TransmitterFreq name="当前功率" :group="groups" :chartId="chartIds_1" :options="options1"></TransmitterFreq>
        </div>
        <div class="bottom_aside">
            <TransmitterPower name="当前频率" :group="groups" :chartId="chartIds_2" :options="options2"></TransmitterPower>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "../../common/monitor_title.vue";
import TransmitterFreq from "./transmitter_freq.vue";
import TransmitterPower from "./transmitter_power.vue";
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const groups = ref(['1#机', '2#机'])
const chartIds_1 = ref(['freq_bar-1', 'freq_bar-2'])
const chartIds_2 = ref([['Inpower_bar-1', 'Inpower_bar-2'], ['Outpower_bar-1', 'Outpower_bar-2']])
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
            new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: 'rgba(90, 255, 203, 1)' },
                { offset: 1, color: 'rgba(13, 255, 179, 1)' }
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
const options2 = ref([
    [
        {
            title: '末级入射功率',
            color: 'linear-gradient(90deg, rgba(90, 255, 203, 1), rgba(13, 255, 179, 1))',
            value: '80kW',
            schedule: 4
        },
        {
            title: '末级反射功率',
            color: 'linear-gradient(90deg, rgba(106, 222, 255, 1), rgba(63, 214, 255, 1))',
            value: '10kW',
            schedule: 5
        }
    ],
    [
        {
            title: '末级入射功率',
            color: 'linear-gradient(90deg, rgba(90, 255, 203, 1), rgba(13, 255, 179, 1))',
            value: '100kW',
            schedule: 5
        },
        {
            title: '末级反射功率',
            color: 'linear-gradient(90deg, rgba(106, 222, 255, 1), rgba(63, 214, 255, 1))',
            value: '19kW',
            schedule: 5
        }
    ]
])

</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    grid-auto-rows: 30px 1fr 2fr;

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