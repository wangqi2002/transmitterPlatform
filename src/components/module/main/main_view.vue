<template>
    <div class="child_container">
        <Navigation></Navigation>
        <div class="set_select_card">
            <MultipleSelect></MultipleSelect>
        </div>
        <div class="model_btn">
            <img class="ring_btn" :src="flagOne ? './icon/taps-all-s.svg' : './icon/taps-all.svg'" @click="handleOne" />
            <img class="ring_btn" :src="flagTwo ? './icon/taps-transmitter-s.svg' : './icon/taps-transmitter.svg'"
                @click="handleTwo" />
            <img class="ring_btn" :src="flagThree ? './icon/taps-cabinet-s.svg' : './icon/taps-cabinet.svg'"
                @click="handleThree" />
            <img class="ring_btn" :src="flagFour ? './icon/taps-power-s.svg' : './icon/taps-power.svg'"
                @click="handleFour" />
        </div>
        <!-- todo: 用于测试组件，后期需删除 -->
        <!-- <div class="cs">
        </div> -->
    </div>
</template>

<script setup>
import Navigation from "./navigation.vue"
import MultipleSelect from "../../common/multiple_select.vue"
import { ref, onMounted, getCurrentInstance } from "vue";
import emitter from "../../../units/mittBus"

const { proxy } = getCurrentInstance();

const flagOne = ref(true)
const flagTwo = ref(false)
const flagThree = ref(false)
const flagFour = ref(false)

const handleOne = () => {
    flagOne.value = true
    flagTwo.value = false
    flagThree.value = false
    flagFour.value = false
    emitter.emit("change:vackdrop", "./splineModle/scene.splinecode");
}
const handleTwo = () => {
    flagOne.value = false
    flagTwo.value = true
    flagThree.value = false
    flagFour.value = false
    emitter.emit("change:vackdrop", "./splineModle/scene-t.splinecode");
}
const handleThree = () => {
    flagOne.value = false
    flagTwo.value = false
    flagThree.value = true
    flagFour.value = false
    emitter.emit("change:vackdrop", "./splineModle/scene-c.splinecode");
}
const handleFour = () => {
    flagOne.value = false
    flagTwo.value = false
    flagThree.value = false
    flagFour.value = true
    emitter.emit("change:vackdrop", "./splineModle/scene-p.splinecode");
}

</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    position: relative;

    // background-color: aliceblue;
    .model_btn {
        width: 100px;
        padding-top: 35px;
        height: calc(100% - 80px);

        .ring_btn {
            pointer-events: auto;
            margin-bottom: 20px;
        }
    }

    .set_select_card {
        width: 200px;
        height: 260px;
        position: absolute;
        top: 0px;
        left: 540px;
    }

    .cs {
        width: calc(100% - 110px);
        height: calc(100% - 80px);
        background: rgba(12, 12, 52, 0.4);
        position: absolute;
        top: 50px;
        right: 0px;
    }
}
</style>