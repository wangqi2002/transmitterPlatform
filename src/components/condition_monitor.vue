<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="状态监测"></MonitorTitle>
        </div>
        <div class="left_aside">
            <ConditionItem name="1#组" chartId="cond_1" num="3"></ConditionItem>
        </div>
        <div class="right_aside">
            <ConditionItem name="2#组" chartId="cond_2" num="2"></ConditionItem>
        </div>
    </div>
</template>

<script setup>
import ConditionItem from "./module/condition_item.vue";
import MonitorTitle from "./module/monitor_title.vue";
import { ref, onMounted } from "vue";
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px 10px;
    grid-auto-rows: 30px 1fr;

    .header {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .left_aside {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .right_aside {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
}
</style>