<template>
    <div class="ring_icon_button">
        <div class="ring_btn_out">
            <div class="ring_btn_middle">
                <div class="ring_btn_in">
                    <div class="ring_btn_icon"></div>
                </div>
            </div>
        </div>
        <div class="title">{{ title }}</div>
        <GradientLine></GradientLine>
    </div>
</template>

<script setup>
import GradientLine from "./gradient_line.vue"
import { ref } from "vue";
defineProps(['title'])
</script>

<style scoped lang="scss">
.ring_icon_button {
    width: 84px;
    height: 120px;
    margin: 20px auto;
    // background-color: rgba(58, 126, 227, 0.2);
    position: relative;

    .ring_btn_out {
        width: 100%;
        height: calc(100% - 40px);
        margin: 5px 0;
        border: 1px solid rgba(167, 182, 51, 0.7);
        box-shadow: 0 0 1px rgba(141, 155, 34, 0.7),
            0 0 2px rgba(141, 155, 34, 0.7),
            inset 0 0 1px rgba(141, 155, 34, 0.7),
            inset 0 0 2px rgba(141, 155, 34, 0.7);
        border-radius: 50%;

        .ring_btn_middle {
            width: 76%;
            height: 76%;
            border: 6px solid rgba(226, 255, 128, 0.9);
            ;
            box-shadow: 0 0 2px rgba(221, 255, 110, 0.7),
                0 0 4px rgba(221, 255, 110, 0.7),
                inset 0 0 2px rgba(221, 255, 110, 0.7),
                inset 0 0 4px rgba(221, 255, 110, 0.7);
            border-radius: 50%;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .ring_btn_in {
                width: 84%;
                height: 84%;
                border: 1px solid rgba(189, 209, 133, 1);
                box-shadow: 0 0 1px rgba(189, 209, 133, 0.7),
                    0 0 2px rgba(189, 209, 133, 0.7),
                    inset 0 0 1px rgba(189, 209, 133, 0.7),
                    inset 0 0 2px rgba(189, 209, 133, 0.7);
                border-radius: 50%;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .ring_btn_icon {
                    width: 65%;
                    height: 65%;
                    background-color: antiquewhite;
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
        font-family: SourceHanSansSC-Bold, SourceHanSansSC;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }
}
</style>