<template>
  <div class="child_container">
    <div class="header">
      <MonitorTitle title="状态监测"></MonitorTitle>
    </div>
    <div class="left_aside">
      <ConditionItem :name="setList[0]" :options="option1" chartId="cond_1" :num="num1"></ConditionItem>
    </div>
    <div class="right_aside">
      <ConditionItem :name="setList[1]" :options="option2" chartId="cond_2" :num="num2"></ConditionItem>
    </div>
  </div>
</template>

<script setup>
import ConditionItem from "./condition_item.vue";
import MonitorTitle from "../../common/monitor_title.vue";
import { ref, onMounted } from "vue";
import emitter from "../../../units/mittBus";

const setList = ref(["1#机", "2#机"]);
const option1 = ref(
  {
    series: [
      {
        data: [
          { value: 108, name: '开关量' },
          { value: 88, name: '正常' },
          { value: 20, name: '故障' }
        ]
      }
    ],
    percent: 81
  }
);
const option2 = ref(
  {
    series: [
      {
        data: [
          { value: 108, name: '开关量' },
          { value: 67, name: '正常' },
          { value: 41, name: '故障' }
        ]
      }
    ],
    percent: 62
  }
);
const num1 = ref(4)
const num2 = ref(3)

onMounted(() => {
  emitter.on("set:change", (e) => {
    setList.value = e;
    let v1 = Math.floor(Math.random() * (108 - 60)) + 60
    let v2 = Math.floor(Math.random() * (108 - 60)) + 60
    option1.value.series[0].data = [
      { value: 108, name: '开关量' },
      { value: v1, name: '正常' },
      { value: 108 - v1, name: '故障' }
    ];
    option1.value.percent = parseInt((option1.value.series[0].data[1].value / option1.value.series[0].data[0].value) * 100)
    num1.value = Math.floor(option1.value.percent / 20)

    option2.value.series[0].data = [
      { value: 108, name: '开关量' },
      { value: v2, name: '正常' },
      { value: 108 - v2, name: '故障' }
    ];
    option2.value.percent = parseInt((option2.value.series[0].data[1].value / option2.value.series[0].data[0].value) * 100)
    num2.value = Math.floor(option2.value.percent / 20)
  });
});
</script>

<style scoped lang="scss">
.child_container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px 10px;
  grid-auto-rows: 30px 1fr;

  .header {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .left_aside {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .right_aside {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
</style>