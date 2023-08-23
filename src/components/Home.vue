<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  background-color: #010343;
}
</style>
