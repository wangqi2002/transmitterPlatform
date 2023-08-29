<template>
    <div class="transmitter_power_item">
        <div class="item_name">
            {{ props.name }}
        </div>
        <div class="item_chart_1"></div>
        <div class="item_chart_2"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
    name: String,
    chartId: String,
    options: Object
})

onMounted(() => { })
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
        background-color: rgb(32, 92, 145);
    }

    .item_chart_2 {
        grid-column-start: 3;
        grid-column-end: 4;
        background-color: rgb(32, 92, 145);
    }
}
</style>