<template>
    <div class="transmitter_power_item">
        <div class="item_name">
            {{ props.name }}
        </div>
        <div class="item_chart_1">
            <SignalBar :chartId="props.chartId[0]" :options="props.options[0]"></SignalBar>
        </div>
        <div class="item_chart_2">
            <SignalBar :chartId="props.chartId[1]" :options="props.options[1]"></SignalBar>
        </div>
    </div>
</template>

<script setup>
import SignalBar from "../../chart/user-defined/signal_bar.vue"
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
    name: String,
    chartId: Array,
    options: Array,
})

onMounted(() => {
    // console.log(props.options)
})
</script>

<style scoped lang="scss">
$markColor: rgba(16, 49, 92, 1);

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
        background-color: $markColor;
    }

    .item_chart_2 {
        grid-column-start: 3;
        grid-column-end: 4;
        border-radius: 7px;
        background-color: $markColor;
    }
}
</style>