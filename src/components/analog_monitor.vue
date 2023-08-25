<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="模拟量监测"></MonitorTitle>
        </div>
        <div class="top_aside"></div>
        <div class="bottom_aside">
            <span class="analog_item" v-for="(item, index) in analogList" :key="index">
                <span class="analog_item_name">{{ item.name }}</span>
                <span class="analog_item_value">{{ item.value }}</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "./module/monitor_title.vue";
import { ref, onMounted } from "vue";

const analogList = ref([
    { name: '灯丝流', value: '400A' },
    { name: '栅流', value: '0.8A' },
    { name: '阳流', value: '28A' },
    { name: '帘栅流', value: '1.5A' },
    { name: '灯丝压', value: '19V' },
    { name: '栅压', value: '480V' },
    { name: '阳压', value: '13kV' },
    { name: '帘栅压', value: '1.2kW' },
])
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 5fr 1fr;

    .header {
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .top_aside {
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .bottom_aside {
        grid-row-start: 3;
        grid-row-end: 4;

        .analog_item {
            display: inline-block;
            width: 95px;
            height: 21px;
            margin: 4px 0px 0px 4px;
            vertical-align: middle;
            text-align: left;
            font-size: 12px;

            .analog_item_name {
                display: inline-block;
                vertical-align: middle;
                line-height: 21px;
                width: 48px;
                height: 100%;
                color: #B5B5C5;
            }

            .analog_item_value {
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 48px);
                height: 100%;
                line-height: 21px;
                color: #9EB45A;
            }
        }
    }
}
</style>