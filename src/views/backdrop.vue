<template>
    <div class="backdrop">
        <canvas id="main_spline"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Application } from "@splinetool/runtime";
import emitter from "../units/mittBus"

let canvas = null;
let spline = null;

const initialize = (url) => {
    canvas = document.getElementById("main_spline");

    spline = new Application(canvas);
    spline.load(url).then(() => {
        // cube.current = spline.findObjectByName("main_control_unit2");

        spline.addEventListener("mouseDown", (e) => {
            if (e.target.name == "POWER") {
                console.log("POWER")
            } else if (e.target.name == "CABLNET") {
                console.log("CABLNET")
            } else if (e.target.name == "TRANSMLTTER") {
                console.log("TRANSMLTTER")
            }
        });
    });
};
onMounted(() => {
    initialize('./splineModle/scene.splinecode')
    // initialize('./splineModle/scene2.splinecode')
    emitter.on("change:vackdrop", (value) => {
        initialize(value)
    })
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
