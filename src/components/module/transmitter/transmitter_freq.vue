<template>
    <div class="transmitter_freq">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div class="chart_area">
            <div class="top_aside">
                <GradientBar :name="props.group[0]" :chartId="props.chartId[0]" :options="props.options[0]"></GradientBar>
            </div>
            <div class="bottom_aside">
                <GradientBar :name="props.group[1]" :chartId="props.chartId[1]" :options="props.options[1]"></GradientBar>
            </div>
        </div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import GradientBar from "../../chart/bar/gradient_bar.vue";
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: Array,
    options: Array,
    group: Array
})
</script>

<style scoped lang="scss">
.transmitter_freq {
    width: 100%;
    height: 100%;

    .chart_area {
        width: 100%;
        height: calc(100% - 35px);
        margin-top: 5px;
        display: grid;
        grid-gap: 5px;
        grid-auto-rows: 1fr 1fr;

        .top_aside {
            grid-row-start: 1;
            grid-row-end: 2;
        }

        .bottom_aside {
            grid-row-start: 2;
            grid-row-end: 3;
        }
    }
}
</style>