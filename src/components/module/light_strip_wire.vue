<template>
    <div class="light_strip_wire">
        <span v-for="(item, index) in lightList">
            <div class="light_item">
                <div class="light" :class="props.chartId">
                    <div class="light_in"></div>
                </div>
                <div class="light_name">{{ item }}</div>
            </div>
            <div class="light_strip" :class="props.chartId" v-if="index != 4"></div>
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
    chartId: String,
    num: String
})

const lightList = ref(['灯丝', '栅压', '阳压', '帘栅', '出波'])

onMounted(() => {
    let lights = document.querySelectorAll(`.light.${props.chartId}`)
    let strips = document.querySelectorAll(`.light_strip.${props.chartId}`)
    for (let i = 0; i < props.num; i++) {
        lights[i].className = 'light suc'
    }
    for (let i = 0; i < props.num - 1; i++) {
        strips[i].className = 'light_strip suc'
    }
})
</script>

<style scoped lang="scss">
.light_strip_wire {
    width: 100%;
    height: 60%;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    // background-color: white;

    .light_item {
        width: 20px;
        height: 100%;
        display: inline-block;

        .light {
            width: 22px;
            height: 22px;
            margin: 10px 0px;
            border-radius: 50%;
            background-color: rgba(169, 169, 169, 1);
            box-shadow: 0 0 2px rgba(136, 136, 136, 0.50),
                0 0 4px rgba(136, 136, 136, 0.50),
                0 0 6px rgba(136, 136, 136, 0.50);
            position: relative;

            .light_in {
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background-color: rgb(83, 83, 83, 1);
                box-shadow: inset 0 0 1px rgba(136, 136, 136, 0.70),
                    inset 0 0 2px rgba(136, 136, 136, 0.70),
                    inset 0 0 3px rgba(136, 136, 136, 0.70);
                top: 50%;
                left: 50%;
                transform: translate(calc(50% - 2px), calc(50% - 2px));
            }
        }

        .light.suc {
            background-color: rgba(52, 223, 255, 1);
            box-shadow: 0 0 2px rgba(52, 223, 255, 0.7),
                0 0 4px rgba(52, 223, 255, 0.7),
                0 0 6px rgba(52, 223, 255, 0.7);

            .light_in {
                background-color: rgba(0, 131, 155, 1);
                box-shadow: inset 0 0 1px rgba(52, 223, 255, 1),
                    inset 0 0 2px rgba(52, 223, 255, 1),
                    inset 0 0 3px rgba(52, 223, 255, 1);
            }
        }

        .light_name {
            width: 20px;
            margin-left: 1px;
            writing-mode: vertical-rl;
            text-orientation: upright;
            letter-spacing: 5px;
            font-family: SourceHanSansSC-Normal, SourceHanSansSC;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            bottom: 0;
        }
    }

    .light_strip {
        width: 30px;
        height: 5px;
        background-color: rgba(16, 49, 92, 0.8);
        display: inline-block;
        vertical-align: top;
        margin-top: 20px;
    }

    .light_strip.suc {
        background-color: rgba(52, 223, 255, 1);
    }
}
</style>