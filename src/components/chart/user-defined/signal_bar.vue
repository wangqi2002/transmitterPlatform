<template>
    <div class="signal_bar">
        <span class="freq_text">{{ props.options.value }}kW</span>
        <div class="chart" :class="chartId">
            <span class="bar" v-for="index in 8"></span>
        </div>
        <div class="chart_mark" :class="chartId">
            <div class="mark"></div>
            <span class="bar_mark" v-for="index in 9"></span>
        </div>
        <div class="title">
            {{ props.options.title }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import emitter from "../../../units/mittBus"

const props = defineProps({
    chartId: String,
    options: Object
})

const backgroundListener = () => {
    let el = document.querySelector(`.chart.${props.chartId}`)
    el.style.background = props.options.color
}

const scheduleListener = (schedule) => {
    let els = document.querySelectorAll(`.${props.chartId} .bar_mark`)
    for (let i = 0; i < els.length; i++) {
        if (i < schedule) {
            els[i].style.backgroundColor = 'transparent'
        } else {
            els[i].style.backgroundColor = '#224572'
        }
    }
}

watch(props, (newProps) => {
    try {
        setTimeout(() => {
            scheduleListener(newProps.options.schedule)
        }, 500)
    } catch (error) {
        console.error(error)
    }
});

onMounted(async () => {
    backgroundListener()
    scheduleListener(props.options.schedule)
})
</script>

<style scoped lang="scss">
$markColor: rgba(16, 49, 92, 1);

.signal_bar {
    width: calc(100% - 24px);
    height: calc(100% - 10px);
    margin: 5px 12px;
    color: #ffffff;
    position: relative;

    .chart {
        width: 100%;
        height: calc(100% - 18px);
        background: linear-gradient(90deg, rgba(198, 255, 237, 1), rgba(90, 255, 203, 1));
        position: absolute;
        left: 0px;

        .bar {
            display: inline-block;
            height: 100%;
            width: 4px;
            margin-left: 11px;
            background-color: $markColor;
        }
    }

    .chart_mark {
        width: 100%;
        height: calc(100% - 18px);
        background: transparent;
        position: absolute;
        left: 0px;

        .bar_mark {
            display: inline-block;
            height: 100%;
            width: 11px;
            margin-right: 4px;
            background-color: #224572;
        }

        .bar_mark:last-child {
            width: 13px;
            margin-right: 0px;
        }
    }

    .mark {
        border-top: 45px solid $markColor;
        border-right: 150px solid transparent;
        position: absolute;
        z-index: 5;
        left: -2px;
        top: -2px;
    }

    .freq_text {
        position: absolute;
        top: 0px;
        left: 10px;
        z-index: 10;
    }

    .title {
        width: 100%;
        height: 15px;
        line-height: 15px;
        margin-top: 3px;
        text-align: center;
        font-size: 12px;
        position: absolute;
        bottom: 0px;
    }
}
</style>