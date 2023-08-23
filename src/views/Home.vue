<template>
  <div class="container_layout">
    <div class="main_view card"></div>
    <div class="env_monitor card"></div>
    <div class="condition_monitor card"></div>
    <div class="transmitter_monitor card"></div>
    <div class="solid_tate_monitor card"></div>
    <div class="analog_monitor card"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.container_layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 4fr 2fr;
  grid-gap: 10px;
  grid-auto-rows: 3.5fr 2.9fr 1.7fr 2fr;
  pointer-events: none;

  .card {
    background: rgba(12, 12, 52, 0.4);
    border: 1px solid #112665;
    border-radius: 8px;
    pointer-events: auto;
  }

  .main_view {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    border: none;
    background: none;
    pointer-events: none;
  }

  .env_monitor {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .condition_monitor {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .transmitter_monitor {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .solid_tate_monitor {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .analog_monitor {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
  }
}
</style>
