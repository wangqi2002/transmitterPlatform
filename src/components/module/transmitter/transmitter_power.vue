<template>
    <div class="transmitter_power">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div class="chart_area">
            <div class="top_aside">
                <TransmitterPowerItem :name="props.group[0]"></TransmitterPowerItem>
            </div>
            <div class="bottom_aside">
                <TransmitterPowerItem :name="props.group[1]"></TransmitterPowerItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import TransmitterPowerItem from "./transmitter_power_item.vue";
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";

const { proxy } = getCurrentInstance();
const props = defineProps({
    name: String,
    chartId: String,
    options: Array,
    group: Array
})
</script>

<style scoped lang="scss">
.transmitter_power {
    width: 100%;
    height: 100%;

    .chart_area {
        width: 100%;
        height: calc(100% - 35px);
        margin-top: 5px;
        display: grid;
        grid-gap: 10px;
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