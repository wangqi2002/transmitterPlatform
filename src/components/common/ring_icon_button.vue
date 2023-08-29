<template>
    <!-- [{ active: isActive }, errorClass] -->
    <div class="ring_icon_button" :class="[props.bid, { suc: props.flag }]">
        <div class="ring_btn_out">
            <div class="ring_btn_middle">
                <div class="ring_btn_in">
                    <img class="ring_btn_icon" :src="props.flag ? './icon/icon01.svg' : './icon/icon02.svg'" />
                </div>
            </div>
        </div>
        <div class="title">{{ title }}</div>
        <GradientLine v-show="props.flag"></GradientLine>
    </div>
</template>

<script setup>
import GradientLine from "./gradient_line.vue"
import { ref, onMounted } from "vue";

const props = defineProps({
    flag: Boolean,
    bid: String,
    title: String
})

onMounted(() => {
})
</script>

<style scoped lang="scss">
.ring_icon_button {
    width: 84px;
    height: 120px;
    margin: 20px auto;
    // background-color: rgba(58, 126, 227, 0.2);
    pointer-events: auto;
    position: relative;

    .ring_btn_out {
        width: 100%;
        height: calc(100% - 40px);
        margin: 5px 0;
        border: 1px solid rgba(125, 151, 228, 1);
        box-shadow: 0 0 1px rgba(39, 72, 169, 0.8),
            0 0 2px rgba(39, 72, 169, 0.8),
            inset 0 0 1px rgba(39, 72, 169, 0.8),
            inset 0 0 2px rgba(39, 72, 169, 0.8);
        border-radius: 50%;

        .ring_btn_middle {
            width: 74%;
            height: 74%;
            border: 6px solid rgba(130, 172, 237, 1);
            box-shadow: 0 0 2px rgba(130, 172, 237, 0.8),
                0 0 4px rgba(130, 172, 237, 0.8),
                inset 0 0 2px rgba(130, 172, 237, 0.8),
                inset 0 0 4px rgba(130, 172, 237, 0.8);
            border-radius: 50%;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .ring_btn_in {
                width: 80%;
                height: 80%;
                border: 2px solid rgba(101, 121, 187, 1);
                box-shadow: 0 0 1px rgba(52, 75, 154, 0.8),
                    0 0 2px rgba(52, 75, 154, 0.8),
                    inset 0 0 2px rgba(80, 107, 196, 0.8),
                    inset 0 0 4px rgba(80, 107, 196, 0.8);
                border-radius: 50%;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .ring_btn_icon {
                    width: 65%;
                    height: 65%;
                    // background-color: antiquewhite;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }

    .title {
        width: 100%;
        height: 30px;
        line-height: 27px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }
}

.ring_icon_button.suc {
    .ring_btn_out {
        border: 1px solid rgba(167, 182, 51, 1);
        box-shadow: 0 0 1px rgba(141, 155, 34, 0.8),
            0 0 2px rgba(141, 155, 34, 0.8),
            inset 0 0 1px rgba(141, 155, 34, 0.8),
            inset 0 0 2px rgba(141, 155, 34, 0.8);

        .ring_btn_middle {
            border: 6px solid rgba(226, 255, 128, 1);
            box-shadow: 0 0 2px rgba(221, 255, 110, 0.8),
                0 0 4px rgba(221, 255, 110, 0.8),
                inset 0 0 2px rgba(221, 255, 110, 0.8),
                inset 0 0 4px rgba(221, 255, 110, 0.8);

            .ring_btn_in {
                border: 1px solid rgba(189, 209, 133, 1);
                box-shadow: 0 0 1px rgba(189, 209, 133, 0.8),
                    0 0 2px rgba(189, 209, 133, 0.8),
                    inset 0 0 2px rgba(189, 209, 133, 0.8),
                    inset 0 0 4px rgba(189, 209, 133, 0.8);
            }
        }
    }

    .title {
        color: rgba(230, 255, 147, 1);
    }
}
</style>