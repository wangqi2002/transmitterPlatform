<template>
    <div class="transmitter_power_item">
        <div class="item_name">
            {{ props.name }}
        </div>
        <div class="item_chart_1">
            <OutGradientGauge :chartId="props.chartId[0]" :options="props.options[0]"></OutGradientGauge>
        </div>
        <div class="item_chart_2">
            <OutGradientGauge :chartId="props.chartId[1]" :options="props.options[1]"></OutGradientGauge>
        </div>
    </div>
</template>

<script setup>
import OutGradientGauge from "../../chart/gauge/out_gradient_gauge.vue"
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
    name: String,
    chartId: Array,
    options: Array,
})

onMounted(() => {
    // console.log(props.options[0])
    // console.log(props.chartId[0])
})
</script>

<style scoped lang="scss">
.transmitter_power_item {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    grid-gap: 5px;

    .item_name {
        grid-column-start: 1;
        grid-column-end: 2;
        margin: auto;
        color: #ffffff;
    }

    .item_chart_1 {
        grid-column-start: 2;
        grid-column-end: 3;
        border-radius: 7px;
        // background-color: rgb(241, 231, 230);
    }

    .item_chart_2 {
        grid-column-start: 3;
        grid-column-end: 4;
        border-radius: 7px;
    }
}
</style>