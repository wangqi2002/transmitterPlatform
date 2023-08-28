<template>
  <div class="container_layout">
    <div class="main_view card">
      <MainView></MainView>
    </div>
    <div class="env_monitor card">
      <EnvMonitor></EnvMonitor>
    </div>
    <div class="condition_monitor card">
      <ConditionMonitor></ConditionMonitor>
    </div>
    <div class="transmitter_monitor card">
      <TransmitterMonitor></TransmitterMonitor>
    </div>
    <div class="solid_state_monitor card">
      <SolidStateMonitor></SolidStateMonitor>
    </div>
    <div class="analog_monitor card">
      <AnalogMonitor></AnalogMonitor>
    </div>
  </div>
</template>

<script setup>
import MainView from "../components/main_view.vue"
import EnvMonitor from "../components/env_monitor.vue"
import ConditionMonitor from "../components/condition_monitor.vue"
import TransmitterMonitor from "../components/transmitter_monitor.vue"
import SolidStateMonitor from "../components/solid_state_monitor.vue"
import AnalogMonitor from "../components/analog_monitor.vue"
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.container_layout {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
  display: grid;
  grid-template-columns: 5fr 10fr 4fr;
  grid-gap: 10px;
  grid-auto-rows: 3.5fr 2.9fr 1.7fr 2fr;
  pointer-events: none;

  .card {
    padding: 8px;
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
    padding: 5px 0px 5px 10px;
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

    // ::v-deep .monitor_title {
    //   background-color: antiquewhite;
    // }
  }

  .solid_state_monitor {
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
