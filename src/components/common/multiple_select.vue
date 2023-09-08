<template>
  <div class="multiple_select">
    <div class="multiple_select_input">
      <div class="multiple_select_input_name">机组:</div>
      <div class="multiple_select_inner">
        <div class="selected_item">{{ setName[0] }}</div>
        <div class="selected_item">{{ setName[1] }}</div>
        <img
          class="select_icon"
          src="../../assets/icon/dropdown.svg"
          @click="handleDropdown"
        />
      </div>
    </div>
    <div class="multiple_select_dropdown">
      <div class="select_dropdown_tip">请从中选择两个机组</div>
      <div class="select_dropdown_card">
        <a-checkbox-group
          v-model:value="setValue"
          :options="setsList"
          @change="handleChangeSet"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "../../units/mittBus";

const setName = ref(["1#机", "2#机"]);
const setValue = ref([1, 2]);
const setsList = ref([
  { label: "1#机", value: 1, disabled: false },
  { label: "2#机", value: 2, disabled: false },
  { label: "3#机", value: 3, disabled: true },
  { label: "4#机", value: 4, disabled: true },
  { label: "5#机", value: 5, disabled: true },
  { label: "6#机", value: 6, disabled: true },
  { label: "7#机", value: 7, disabled: true },
  { label: "8#机", value: 8, disabled: true },
  { label: "9#机", value: 9, disabled: true },
  { label: "10#机", value: 10, disabled: true },
]);

const handleChangeSet = () => {
  if (setValue.value.length === 2) {
    let valueList = setsList.value.map((item) => item.value);
    let disList = [];
    valueList.forEach((item) => {
      if (!setValue.value.includes(item)) {
        disList.push(item);
      }
    });
    for (let i in setsList.value) {
      for (let j in disList) {
        if (setsList.value[i].value === disList[j]) {
          setsList.value[i].disabled = true;
        }
      }
    }
  } else {
    for (let i in setsList.value) {
      setsList.value[i].disabled = false;
    }
  }
};

const handleDropdown = (e) => {
  let el = document.querySelector(".multiple_select_dropdown");
  if (e.target.className.includes("select_icon_animation")) {
    let str1 = e.target.className.replace("select_icon_animation", "");
    let str2 = el.className.replace("isActived", "");
    e.target.className = str1;
    el.className = str2;

    setName.value.length = 0;
    if (setValue.value.length == 0) {
      setName.value.push(`1#机`);
      setName.value.push(`2#机`);
    } else if (setValue.value.length == 1) {
      setName.value.push(`1#机`);
      setName.value.push(`${setValue.value[0]}#机`);
    } else {
      for (let i = 0; i < setValue.value.length; i++) {
        setName.value.push(`${setValue.value[i]}#机`);
      }
    }
    emitter.emit("set:change", setName.value);
  } else {
    e.target.className += " select_icon_animation";
    el.className += " isActived";
  }
};
</script>

<style scoped lang="scss">
.multiple_select {
  width: 100%;
  height: 100%;
  color: #ffffff;
  position: relative;

  .multiple_select_input {
    width: 100%;
    height: 40px;
    pointer-events: auto;

    .multiple_select_input_name {
      width: 45px;
      height: 100%;
      line-height: 40px;
      vertical-align: middle;
      display: inline-block;
    }

    .multiple_select_inner {
      width: calc(100% - 45px);
      height: 100%;
      line-height: 40px;
      display: inline-block;
      vertical-align: middle;

      .selected_item {
        width: 55px;
        line-height: 30px;
        height: 32px;
        margin-right: 8px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        background-color: rgba(64, 121, 193, 0.5);
        border: 1px solid #4079c1;
      }

      .select_icon {
        width: 28px;
        height: 28px;
        position: absolute;
        top: 10px;
        right: 4px;
        transition: transform 0.5s;
      }

      .select_icon_animation {
        transform: rotate(-180deg);
      }
    }
  }

  .multiple_select_dropdown {
    height: 0px;
    width: calc(100% - 30px);
    margin: 5px 0px 0px 30px;
    border-radius: 5px;
    background-color: rgba(64, 121, 193, 0.3);
    box-shadow: 0px 0px 4px rgba(64, 121, 193, 0.5);
    pointer-events: auto;
    overflow: hidden;
    transition: 0.5s;

    .select_dropdown_tip {
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid rgba(64, 121, 193, 1);
    }

    .select_dropdown_card {
      width: 100%;
      height: calc(100% - 35px);
      overflow-y: auto;

      :deep(.ant-checkbox-wrapper) {
        width: 100%;
        padding: 3px 5px 3px 15px;
        display: block;

        .ant-checkbox {
          .ant-checkbox-inner {
            top: 2px;
            display: inline-block;
            background-color: transparent;
          }
        }

        .ant-checkbox + span {
          color: #ffffff;
        }
      }

      :deep(.ant-checkbox-wrapper-checked) {
        background-color: rgba(15, 15, 59, 0.5);
      }
    }

    .select_dropdown_card::-webkit-scrollbar {
      width: 7px;
      // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
    }

    .select_dropdown_card::-webkit-scrollbar-thumb {
      background: #6b9dea; // 滑块颜色
      border-radius: 5px; // 滑块圆角
    }

    .select_dropdown_card::-webkit-scrollbar-track {
      border-radius: 10px; // 轨道圆角
      background-color: #a4a8b0; // 轨道颜色
    }
  }

  .multiple_select_dropdown.isActived {
    height: calc(100% - 40px);
  }
}
</style>