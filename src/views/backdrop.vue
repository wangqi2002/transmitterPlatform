<template>
    <div class="backdrop">
        <canvas id="main_spline"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Application } from "@splinetool/runtime";

let canvas = null;
let spline = null;

const initialize = (url) => {
    canvas = document.getElementById("main_spline");

    spline = new Application(canvas);
    spline.load(url);
};
onMounted(() => {
    initialize('./splineModle/scene.splinecode')
    // initialize('./splineModle/scene2.splinecode')
});
</script>
<style scoped lang="scss">
.backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>
