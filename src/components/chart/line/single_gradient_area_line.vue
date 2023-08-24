<template>
    <div class="single_gradient_area_line">
        <BottomLineBox name="温度"></BottomLineBox>
    </div>
</template>

<script setup>
import BottomLineBox from "../module/bottom_line_box.vue";
import { ref } from "vue";
defineProps(['name'])
</script>

<style scoped lang="scss">
.bottom_line_box {
    width: 80px;
    height: 30px;
    line-height: 28px;
    text-align: left;
    position: relative;
    font-size: 16px;
    font-family: SourceHanSansSC-Bold, SourceHanSansSC;
    font-weight: bold;
    color: #FFFFFF;

    .bottom {
        position: absolute;
        bottom: 1px;
        left: 0px;
        padding: 1px 40px;
        background: linear-gradient(90deg, rgba(164, 204, 246, 1), rgba(107, 157, 234, 0));
    }
}
</style>