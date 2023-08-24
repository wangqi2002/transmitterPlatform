<template>
    <div class="bottom_line_box">
        {{ name }}
        <span class="bottom"></span>
    </div>
</template>

<script setup>
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