<template>
  <div class="child_container">
    <div class="header">
      <MonitorTitle title="固态源监测"></MonitorTitle>
    </div>
    <div class="top_aside">
      <SolidStateItem
        :name="setList[0]"
        :chartId="chartId1"
        :options="option1"
      ></SolidStateItem>
    </div>
    <div class="bottom_aside">
      <SolidStateItem
        :name="setList[1]"
        :chartId="chartId2"
        :options="option2"
      ></SolidStateItem>
    </div>
  </div>
</template>
 
<script setup>
import MonitorTitle from "../../common/monitor_title.vue";
import SolidStateItem from "./solid_state_item.vue";
import { ref, onMounted, getCurrentInstance } from "vue";
import emitter from "../../../units/mittBus";

const { proxy } = getCurrentInstance();

const setList = ref(["1#机", "2#机"]);
const chartId1 = ["solid_1_1", "solid_1_2"];
const chartId2 = ["solid_2_1", "solid_2_2"];
const option1 = ref([
  {
    title: {
      text: "固态入射功率",
    },
    series: [
      {
        max: 8000,
        itemStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(90, 255, 203, 1)",
            },
            {
              offset: 1,
              color: "rgb(13, 255, 179, 1)",
            },
          ]),
        },
        detail: {
          color: "rgb(13, 255, 179, 1)",
        },
        data: [5000],
      },
    ],
  },
  {
    title: {
      text: "固态反射功率",
    },
    series: [
      {
        max: 800,
        itemStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(90, 255, 203, 1)",
            },
            {
              offset: 1,
              color: "rgb(13, 255, 179, 1)",
            },
          ]),
        },
        detail: {
          color: "rgb(13, 255, 179, 1)",
        },
        data: [300],
      },
    ],
  },
]);
const option2 = ref([
  {
    title: {
      text: "固态入射功率",
    },
    series: [
      {
        max: 8000,
        itemStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(10,156,215)",
            },
            {
              offset: 1,
              color: "rgba(52,223,255)",
            },
          ]),
        },
        detail: {
          color: "rgba(52,223,255)",
        },
        data: [4560],
      },
    ],
  },
  {
    title: {
      text: "固态反射功率",
    },
    series: [
      {
        max: 800,
        itemStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(10,156,215)",
            },
            {
              offset: 1,
              color: "rgba(52,223,255)",
            },
          ]),
        },
        detail: {
          color: "rgba(52,223,255)",
        },
        data: [680],
      },
    ],
  },
]);

onMounted(() => {
  emitter.on("set:change", (e) => {
    setList.value = e;
    option1.value[0].series[0].data = [Math.floor(Math.random() * (8000 - 0)) + 0];
    option1.value[1].series[0].data = [Math.floor(Math.random() * (800 - 0)) + 0];
    option2.value[0].series[0].data = [Math.floor(Math.random() * (8000 - 0)) + 0];
    option2.value[1].series[0].data = [Math.floor(Math.random() * (800 - 0)) + 0];
  });
});
</script>

<style scoped lang="scss">
.child_container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: 30px 1fr 1fr;

  .header {
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .top_aside {
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .bottom_aside {
    grid-row-start: 3;
    grid-row-end: 4;
  }
}
</style>