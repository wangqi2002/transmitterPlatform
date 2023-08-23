<template>
  <div class="container"
    :style="{ transform: `scale(${scale},${scale}) translate(-50%,-50%)`, width: `${width}px`, height: `${height}px` }">
    <div class="main-wrap">
      <Home></Home>
    </div>
  </div>
</template>

<script setup>
import Home from './views/Home.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { getScale, width, height } from './units/getScales'

const scale = ref(getScale())
const timer = ref(true)

const setScale = () => {
  if (timer) {
    clearTimeout(timer)
    timer.value = setTimeout(() => {
      scale.value = getScale()
    }, 500)
  }
}

onMounted(() => {
  window.addEventListener('resize', () => {
    setScale()
  })
})
onUnmounted(() => {
  window.removeEventListener('resize', setScale())
})
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
  overflow: hidden;
  transition: all .3s linear;

  .main-wrap {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: #166DBB;
    padding: 10px;
  }
}
</style>
