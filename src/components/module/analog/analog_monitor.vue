<template>
    <div class="child_container">
        <div class="header">
            <MonitorTitle title="模拟量监测"></MonitorTitle>
        </div>
        <div class="top_aside">
            <DoubleGradientAreaLine chartId="analogLine" :setList="setList" :colorList="colorList" :options="option">
            </DoubleGradientAreaLine>
        </div>
        <div class="bottom_aside">
            <a-checkbox-group v-model:value="analogValues" style="width: 100%" @change="handleAnalogLine">
                <a-row>
                    <a-col :span="5">
                        <a-checkbox class="check_1" value="灯丝流">灯丝流</a-checkbox>
                    </a-col>
                    <a-col :span="4">
                        <a-checkbox class="check_2" value="栅流">栅流</a-checkbox>
                    </a-col>
                    <a-col :span="4">
                        <a-checkbox class="check_3" value="阳流">阳流</a-checkbox>
                    </a-col>
                    <a-col :span="5">
                        <a-checkbox class="check_4" value="帘栅流">帘栅流</a-checkbox>
                    </a-col>
                    <a-col :span="5">
                        <a-checkbox class="check_5" value="入射功率">入射功率</a-checkbox>
                    </a-col>
                    <a-col :span="5">
                        <a-checkbox class="check_6" value="灯丝压">灯丝压</a-checkbox>
                    </a-col>
                    <a-col :span="4">
                        <a-checkbox class="check_7" value="栅压">栅压</a-checkbox>
                    </a-col>
                    <a-col :span="4">
                        <a-checkbox class="check_8" value="阳压">阳压</a-checkbox>
                    </a-col>
                    <a-col :span="5">
                        <a-checkbox class="check_9" value="帘栅压">帘栅压</a-checkbox>
                    </a-col>
                    <a-col :span="5">
                        <a-checkbox class="check_10" value="反射功率">反射功率</a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
            <!-- <span class="analog_item" v-for="(item, index) in analogList" :key="index">
                <span class="analog_item_name">{{ item.name }}</span>
            </span> -->
        </div>
        <div class="legend_group">
            <span class="legend_item">
                <img class="legend_icon" src="../../../assets/icon/legend_solid.svg" />
                {{ setList[0] }}
            </span>
            <span class="legend_item">
                <img class="legend_icon" src="../../../assets/icon/legend_dotted.svg" />
                {{ setList[1] }}
            </span>
        </div>
    </div>
</template>

<script setup>
import MonitorTitle from "../../common/monitor_title.vue";
import DoubleGradientAreaLine from "../../chart/line/double_gradient_area_line.vue";
import { ref, onMounted, getCurrentInstance } from "vue";
import emitter from "../../../units/mittBus"
import { getRandomInt, formatter } from "../../../units/tools"

const analogValues = ref(['灯丝流', '栅流', '阳流', '帘栅流']);
const analogList = ref([
    { label: '灯丝流', value: '灯丝流' },
    { label: '栅流', value: '栅流' },
    { label: '阳流', value: '阳流' },
    { label: '帘栅流', value: '帘栅流' },
    { label: '入射功率', value: '入射功率' },
    { label: '灯丝压', value: '灯丝压' },
    { label: '栅压', value: '栅压' },
    { label: '阳压', value: '阳压' },
    { label: '帘栅压', value: '帘栅压' },
    { label: '反射功率', value: '反射功率' },
])
const setList = ref(['1#组', '2#组'])
let colorList = [
    'rgba(255, 57, 57, 1)',
    'rgba(255, 200, 106, 1)',
    'rgba(106, 255, 141, 1)',
    'rgba(129, 229, 255, 1)',
    'rgba(190, 115, 255, 1)',
    'rgba(255, 132, 33, 1)',
    'rgba(222, 255, 106, 1)',
    'rgba(38, 154, 153, 1)',
    'rgba(106, 156, 255, 1)',
    'rgba(255, 129, 204, 1)'
]
const option = ref({
    series: [
        {
            // data: [415, 672, 498, 699, 158, 488, 571, 720, 123, 379, 489]
            data: [
                { name: '灯丝流', time: '4:20', value: 483 },
                { name: '灯丝流', time: '4:20', value: 643 },
                { name: '灯丝流', time: '4:20', value: 774 },
                { name: '灯丝流', time: '4:20', value: 346 },
                { name: '灯丝流', time: '4:20', value: 303 },
                { name: '灯丝流', time: '4:20', value: 705 },
                { name: '灯丝流', time: '4:20', value: 502 },
                { name: '灯丝流', time: '4:20', value: 790 },
                { name: '灯丝流', time: '4:20', value: 128 },
                { name: '灯丝流', time: '4:20', value: 291 },
                { name: '灯丝流', time: '4:20', value: 358 }
            ]
        },
        {
            data: [
                { name: '灯丝流', time: '5:58', value: 614 },
                { name: '灯丝流', time: '5:58', value: 535 },
                { name: '灯丝流', time: '5:58', value: 562 },
                { name: '灯丝流', time: '5:58', value: 360 },
                { name: '灯丝流', time: '5:58', value: 541 },
                { name: '灯丝流', time: '5:58', value: 463 },
                { name: '灯丝流', time: '5:58', value: 487 },
                { name: '灯丝流', time: '5:58', value: 176 },
                { name: '灯丝流', time: '5:58', value: 556 },
                { name: '灯丝流', time: '5:58', value: 568 },
                { name: '灯丝流', time: '5:58', value: 148 }
            ]
        },
        {
            data: [
                { name: '栅流', time: '5:59', value: 770 },
                { name: '栅流', time: '5:59', value: 625 },
                { name: '栅流', time: '5:59', value: 529 },
                { name: '栅流', time: '5:59', value: 644 },
                { name: '栅流', time: '5:59', value: 540 },
                { name: '栅流', time: '5:59', value: 219 },
                { name: '栅流', time: '5:59', value: 340 },
                { name: '栅流', time: '5:59', value: 133 },
                { name: '栅流', time: '5:59', value: 106 },
                { name: '栅流', time: '5:59', value: 695 },
                { name: '栅流', time: '5:59', value: 690 }
            ]
        },
        {
            data: [
                { name: '栅流', time: '6:0', value: 236 },
                { name: '栅流', time: '6:0', value: 274 },
                { name: '栅流', time: '6:0', value: 437 },
                { name: '栅流', time: '6:0', value: 596 },
                { name: '栅流', time: '6:0', value: 374 },
                { name: '栅流', time: '6:0', value: 386 },
                { name: '栅流', time: '6:0', value: 230 },
                { name: '栅流', time: '6:0', value: 200 },
                { name: '栅流', time: '6:0', value: 763 },
                { name: '栅流', time: '6:0', value: 723 },
                { name: '栅流', time: '6:0', value: 127 }
            ]
        },
        {
            data: [
                { name: '阳流', time: '6:0', value: 569 },
                { name: '阳流', time: '6:0', value: 419 },
                { name: '阳流', time: '6:0', value: 770 },
                { name: '阳流', time: '6:0', value: 700 },
                { name: '阳流', time: '6:0', value: 611 },
                { name: '阳流', time: '6:0', value: 238 },
                { name: '阳流', time: '6:0', value: 454 },
                { name: '阳流', time: '6:0', value: 609 },
                { name: '阳流', time: '6:0', value: 336 },
                { name: '阳流', time: '6:0', value: 662 },
                { name: '阳流', time: '6:0', value: 658 }
            ]
        },
        {
            data: [
                { name: '阳流', time: '6:0', value: 775 },
                { name: '阳流', time: '6:0', value: 359 },
                { name: '阳流', time: '6:0', value: 590 },
                { name: '阳流', time: '6:0', value: 327 },
                { name: '阳流', time: '6:0', value: 202 },
                { name: '阳流', time: '6:0', value: 632 },
                { name: '阳流', time: '6:0', value: 626 },
                { name: '阳流', time: '6:0', value: 626 },
                { name: '阳流', time: '6:0', value: 125 },
                { name: '阳流', time: '6:0', value: 370 },
                { name: '阳流', time: '6:0', value: 323 }
            ]
        },
        {
            data: [
                { name: '帘栅流', time: '6:1', value: 728 },
                { name: '帘栅流', time: '6:1', value: 728 },
                { name: '帘栅流', time: '6:1', value: 204 },
                { name: '帘栅流', time: '6:1', value: 104 },
                { name: '帘栅流', time: '6:1', value: 675 },
                { name: '帘栅流', time: '6:1', value: 687 },
                { name: '帘栅流', time: '6:1', value: 538 },
                { name: '帘栅流', time: '6:1', value: 461 },
                { name: '帘栅流', time: '6:1', value: 142 },
                { name: '帘栅流', time: '6:1', value: 507 },
                { name: '帘栅流', time: '6:1', value: 322 }
            ]
        },
        {
            data: [
                { name: '帘栅流', time: '6:1', value: 754 },
                { name: '帘栅流', time: '6:1', value: 161 },
                { name: '帘栅流', time: '6:1', value: 308 },
                { name: '帘栅流', time: '6:1', value: 272 },
                { name: '帘栅流', time: '6:1', value: 481 },
                { name: '帘栅流', time: '6:1', value: 514 },
                { name: '帘栅流', time: '6:1', value: 173 },
                { name: '帘栅流', time: '6:1', value: 498 },
                { name: '帘栅流', time: '6:1', value: 130 },
                { name: '帘栅流', time: '6:1', value: 181 },
                { name: '帘栅流', time: '6:1', value: 706 }
            ]
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
        {
            data: []
        },
    ]
});
const handleAnalogLine = () => {
    console.log(analogValues.value)
}
onMounted(() => {
    // setInterval(function () {
    // setTimeout(function () {
    //     let data = []
    //     for (let i = 0; i < 20; i++) {
    //         let arr = []
    //         for (let j = 0; j < 11; j++) {
    //             arr.push(getRandomInt(100, 800))
    //         }
    //         data.push(arr)
    //     }
    //     emitter.emit("chart:analog", data)
    // }, 4000);
})
</script>

<style scoped lang="scss">
.child_container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-auto-rows: 30px 5fr 1fr;
    position: relative;

    .legend_group {
        top: 4px;
        right: 15px;
        font-size: 14px;
        font-weight: 100;
        position: absolute;
        color: #ffffff;

        .legend_item {
            width: 90px;
            text-align: right;
            display: inline-block;
        }
    }

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

        :deep(.ant-checkbox-wrapper) {
            padding: 2px 4px;

            .ant-checkbox-inner {
                width: 14px;
                height: 14px;
                background-color: transparent;
            }
        }

        :deep(.check_1) {
            color: rgba(255, 57, 57, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(255, 57, 57, 1);
                border-color: rgba(255, 57, 57, 1);
            }
        }

        :deep(.check_2) {
            color: rgba(255, 200, 106, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(255, 200, 106, 1);
                border-color: rgba(255, 200, 106, 1);
            }
        }

        :deep(.check_3) {
            color: rgba(106, 255, 141, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(106, 255, 141, 1);
                border-color: rgba(106, 255, 141, 1);
            }
        }

        :deep(.check_4) {
            color: rgba(129, 229, 255, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(129, 229, 255, 1);
                border-color: rgba(129, 229, 255, 1);
            }
        }

        :deep(.check_5) {
            color: rgba(190, 115, 255, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(190, 115, 255, 1);
                border-color: rgba(190, 115, 255, 1);
            }
        }

        :deep(.check_6) {
            color: rgba(255, 132, 33, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(255, 132, 33, 1);
                border-color: rgba(255, 132, 33, 1);
            }
        }

        :deep(.check_7) {
            color: rgba(222, 255, 106, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(222, 255, 106, 1);
                border-color: rgba(222, 255, 106, 1);
            }
        }

        :deep(.check_8) {
            color: rgba(38, 154, 153, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(38, 154, 153, 1);
                border-color: rgba(38, 154, 153, 1);
            }
        }

        :deep(.check_9) {
            color: rgba(106, 156, 255, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(106, 156, 255, 1);
                border-color: rgba(106, 156, 255, 1);
            }
        }

        :deep(.check_10) {
            color: rgba(255, 129, 204, 1);

            .ant-checkbox-checked .ant-checkbox-inner {
                background-color: rgba(255, 129, 204, 1);
                border-color: rgba(255, 129, 204, 1);
            }
        }

        // .analog_item {
        //     display: inline-block;
        //     width: 90px;
        //     height: 21px;
        //     margin: 4px 0px 0px 4px;
        //     vertical-align: middle;
        //     text-align: left;
        //     font-size: 12px;

        //     .analog_item_name {
        //         display: inline-block;
        //         vertical-align: middle;
        //         line-height: 21px;
        //         width: 42px;
        //         height: 100%;
        //         color: #B5B5C5;
        //     }

        //     .analog_item_value {
        //         display: inline-block;
        //         vertical-align: middle;
        //         width: calc(100% - 48px);
        //         height: 100%;
        //         line-height: 21px;
        //         color: #9EB45A;
        //     }
        // }
    }
}
</style>