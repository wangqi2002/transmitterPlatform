<template>
    <div class="condition_item">
        <BottomLineBox :name="props.name"></BottomLineBox>
        <div class="condition_item_box">
            <div class="left_aside">
                <div class="percent">{{ props.options.percent }}%</div>
                <RingGradientPie :chartId="props.chartId" :options="props.options"></RingGradientPie>
                <span class="legend_value one">{{ options.series[0].data[0].value }}</span>
                <span class="legend_value two">{{ options.series[0].data[1].value }}</span>
                <span class="legend_value three">{{ options.series[0].data[2].value }}</span>
            </div>
            <div class="right_aside">
                <LightStripWire :chartId="props.chartId" :num="props.num"></LightStripWire>
            </div>
        </div>
    </div>
</template>

<script setup>
import BottomLineBox from "../../common/bottom_line_box.vue";
import LightStripWire from "../../common/light_strip_wire.vue";
import RingGradientPie from "../../chart/pie/ring_gradient_pie.vue";
import { ref } from "vue";
const props = defineProps({
    name: String,
    chartId: String,
    num: Number,
    options: Object
})

const option = { name: 'chart' }
</script>

<style scoped lang="scss">
.condition_item {
    width: 100%;
    height: 100%;

    // ::v-deep .bottom_line_box {
    //     margin-left: 15px;
    // }
    :deep(.bottom_line_box) {
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
                width: 52px;
                text-align: center;
                position: absolute;
                color: #32D0FF;
                font-size: 22px;
                left: 38px;
                top: 33px;
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