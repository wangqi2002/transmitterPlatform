<template>
    <div class="child_container">
        <Navigation></Navigation>
        <div class="model_btn">
            <RingIconButton title="全景" bid="all" :flag="flagOne" @click="handleOne"></RingIconButton>
            <RingIconButton title="发射机" bid="one" :flag="flagTwo" @click="handleTwo"></RingIconButton>
            <RingIconButton title="机柜" bid="two" :flag="flagThree" @click="handleThree"></RingIconButton>
            <RingIconButton title="电源" bid="three" :flag="flagFour" @click="handleFour"></RingIconButton>
        </div>
    </div>
</template>

<script setup>
import Navigation from "./navigation.vue"
import RingIconButton from "../../common/ring_icon_button.vue"
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

        // background-color: aliceblue;
    }
}
</style>