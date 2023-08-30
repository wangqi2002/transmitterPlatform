<template>
    <div class="child_container">
        <Navigation></Navigation>
        <div class="model_btn">
            <img class="ring_btn" :src="flagOne ? './icon/taps-all-s.svg' : './icon/taps-all.svg'" @click="handleOne" />
            <img class="ring_btn" :src="flagTwo ? './icon/taps-transmitter-s.svg' : './icon/taps-transmitter.svg'"
                @click="handleTwo" />
            <img class="ring_btn" :src="flagThree ? './icon/taps-cabinet-s.svg' : './icon/taps-cabinet.svg'"
                @click="handleThree" />
            <img class="ring_btn" :src="flagFour ? './icon/taps-power-s.svg' : './icon/taps-power.svg'"
                @click="handleFour" />
        </div>
    </div>
</template>

<script setup>
import Navigation from "./navigation.vue"
import { ref, onMounted, getCurrentInstance } from "vue";

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
}
const handleTwo = () => {
    flagOne.value = false
    flagTwo.value = true
    flagThree.value = false
    flagFour.value = false
}
const handleThree = () => {
    flagOne.value = false
    flagTwo.value = false
    flagThree.value = true
    flagFour.value = false
}
const handleFour = () => {
    flagOne.value = false
    flagTwo.value = false
    flagThree.value = false
    flagFour.value = true
}

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

        .ring_btn {
            pointer-events: auto;
            margin-bottom: 20px;
        }
    }
}
</style>