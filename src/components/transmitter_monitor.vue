<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="发射机监测"></MonitorTitle>
        </div>
        <div class="top_aside"></div>
        <div class="bottom_aside"></div>
    </div>
</template>

<script setup>
import MonitorTitle from "./module/monitor_title.vue";
import { ref, onMounted } from "vue";
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 1fr 1fr;

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
    }
}
</style>