<template>
    <div class="child_container">
        <Navigation></Navigation>
        <div class="model_btn">
            <RingIconButton title="全景"></RingIconButton>
            <RingIconButton title="发射机"></RingIconButton>
            <RingIconButton title="机柜"></RingIconButton>
            <RingIconButton title="电源"></RingIconButton>
        </div>
    </div>
</template>

<script setup>
import Navigation from "./module/navigation.vue"
import RingIconButton from "./module/ring_icon_button.vue"
import { ref, onMounted, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;

    // background-color: aliceblue;
    .model_btn {
        width: 100px;
        padding-top: 35px;
        height: calc(100% - 80px);

        // background-color: aliceblue;
    }
}
</style>