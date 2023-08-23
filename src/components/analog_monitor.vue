<template>
    <div class="child_container">
        <MonitorTitle title="模拟量监测"></MonitorTitle>
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
}
</style>