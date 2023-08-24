<template>
    <div class="navigation">
        <div class="nav_title">
            <div class="nav_title_icon"></div>
            <div class="nav_title_txt">
                <span class="left"></span>
                发射机智能监测系统
            </div>
        </div>
        <div class="nav_tab">
            <div class="nav_tab_item">监测中心</div>
            <div class="nav_tab_item">数据中心</div>
            <div class="nav_tab_item">设置</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(['title'])
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
                transform: translateY(10%);
                padding: 15px 1px;
                background: linear-gradient(180deg, rgba(30, 30, 60, 0), rgba(169, 169, 169, 1), rgba(30, 30, 60, 0));
            }
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
            font-size: 18px;
            font-family: SourceHanSansSC-Normal, SourceHanSansSC;
            font-weight: 400;
            color: #FFFFFF;
            display: inline-block;
            cursor: pointer;
        }
    }
}
</style>