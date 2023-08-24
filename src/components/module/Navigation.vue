<template>
    <div class="navigation">
        <div class="nav_title">
            <div class="nav_title_icon"></div>
            <div class="nav_title_txt">
                <span class="left"></span>
                发射机智能监测系统
            </div>
            <GradientLine></GradientLine>
        </div>
        <div class="nav_tab">
            <div class="nav_tab_item is-active" @click="handleMonitor">监测中心
                <GradientLine v-show="flag[0]"></GradientLine>
            </div>
            <div class="nav_tab_item" @click="handleInformation">数据中心
                <GradientLine v-show="flag[1]"></GradientLine>
            </div>
            <div class="nav_tab_item" @click="handleSet">设置
                <GradientLine v-show="flag[2]"></GradientLine>
            </div>
        </div>
    </div>
</template>

<script setup>
import GradientLine from "./gradient_line.vue"
import { ref } from "vue";

const flag = ref([true, false, false])

const handleMonitor = (e) => {
    let els = document.querySelectorAll(".nav_tab_item")
    for (let i = 0; i < els.length; i++) {
        els[i].className = "nav_tab_item"
    }
    e.target.className = "nav_tab_item is-active"
    flag.value = [true, false, false]
}
const handleInformation = (e) => {
    let els = document.querySelectorAll(".nav_tab_item")
    for (let i = 0; i < els.length; i++) {
        els[i].className = "nav_tab_item"
    }
    e.target.className = "nav_tab_item is-active"
    flag.value = [false, true, false]
}
const handleSet = (e) => {
    let els = document.querySelectorAll(".nav_tab_item")
    for (let i = 0; i < els.length; i++) {
        els[i].className = "nav_tab_item"
    }
    e.target.className = "nav_tab_item is-active"
    flag.value = [false, false, true]
}
</script>

<style scoped lang="scss">
.navigation {
    width: 100%;
    height: 45px;
    // background-color: rgba(58, 126, 227, 0.2);
    position: relative;
    border-bottom: 1px solid rgba(152, 178, 255, 1);

    .nav_title {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        .nav_title_txt {
            height: 45px;
            line-height: 40px;
            margin-left: 200px;
            padding-left: 10px;
            font-size: 30px;
            font-family: PangMenZhengDao;
            color: #FFFFFF;
            position: relative;

            .left {
                position: absolute;
                left: 0px;
                transform: translateY(13%);
                padding: 15px 1px;
                background: linear-gradient(180deg, rgba(30, 30, 60, 0), rgba(169, 169, 169, 1), rgba(30, 30, 60, 0));
            }
        }

        ::v-deep .gradient_line {
            height: 5px;
            background: linear-gradient(90deg, rgba(152, 178, 255, 0), rgba(213, 246, 253, 1) 50%, rgba(152, 178, 255, 0));
            bottom: -3px;
        }
    }

    .nav_tab {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;

        .nav_tab_item {
            height: 45px;
            line-height: 40px;
            margin-right: 50px;
            text-align: center;
            font-size: 18px;
            font-family: SourceHanSansSC-Normal, SourceHanSansSC;
            font-weight: 400;
            color: #FFFFFF;
            display: inline-block;
            cursor: pointer;
            position: relative;
        }

        .is-active {
            font-weight: 600;
            color: #E6FF93;
        }
    }
}
</style>