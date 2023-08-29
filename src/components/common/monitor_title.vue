<template>
    <div class="monitor_title">
        <div class="title">{{ title }}</div>
        <span class="top_right"></span>
        <span class="right_top"></span>
        <span class="bottom_left"></span>
        <span class="left_bottom"></span>
    </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(['title'])
</script>

<style scoped lang="scss">
.monitor_title {
    width: 100%;
    height: 30px;
    background-color: rgba(58, 126, 227, 0.2);
    position: relative;

    .title {
        height: 30px;
        line-height: 27px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        margin-left: 35px;
    }

    .top_right {
        position: absolute;
        right: 1px;
        top: 1px;
        padding: 1px 25px 0px;
        background: linear-gradient(270deg, rgba(255, 255, 255, 1), rgba(10, 30, 60, 0));
    }

    .right_top {
        position: absolute;
        right: 1px;
        top: 1px;
        padding: 10px 1px 10px 0px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(10, 30, 60, 0));
    }

    .bottom_left {
        position: absolute;
        left: 1px;
        bottom: 1px;
        padding: 1px 25px 0px;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(10, 30, 60, 0));
    }

    .left_bottom {
        position: absolute;
        left: 1px;
        bottom: 1px;
        padding: 10px 1px 10px 0px;
        background: linear-gradient(360deg, rgba(255, 255, 255, 1), rgba(10, 30, 60, 0));
    }
}
</style>