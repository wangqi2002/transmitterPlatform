<template>
    <div class="condition_item">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div class="condition_item_box">
            <div class="left_aside">
                <div class="percent">70%</div>
                <RingGradientPie :chartId="props.chartId" :option="option"></RingGradientPie>
                <span class="legend_value one">109</span>
                <span class="legend_value two">47</span>
                <span class="legend_value three">2</span>
            </div>
            <div class="right_aside">
                <LightStripWire :chartId="props.chartId" :num="props.num"></LightStripWire>
            </div>
        </div>
    </div>
</template>

<script setup>
import BottomLineBox from "./bottom_line_box.vue";
import LightStripWire from "./light_strip_wire.vue";
import RingGradientPie from "../chart/pie/ring_gradient_pie.vue";
import { ref } from "vue";
const props = defineProps({
    name: String,
    chartId: String,
    num: String,
    option: Object
})

const option = { name: 'chart' }
</script>

<style scoped lang="scss">
.condition_item {
    width: 100%;
    height: 100%;

    ::v-deep .bottom_line_box {
        margin-left: 15px;
    }

    .condition_item_box {
        width: 100%;
        height: calc(100% - 30px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        grid-template-rows: 1fr;

        .left_aside {
            vertical-align: middle;
            position: relative;

            .percent {
                position: absolute;
                color: #32D0FF;
                font-size: 25px;
                left: 42px;
                top: 32px;
                z-index: 10;
            }

            .legend_value {
                display: inline-block;
                width: 40px;
                font-size: 14px;
                color: white;
                position: absolute;
                right: 5px;
                top: 20px;
            }

            .two {
                top: 50px;
            }

            .three {
                top: 80px;
            }
        }

        .right_aside {
            vertical-align: middle;
            // background-color: darkcyan;
        }
    }
}
</style>