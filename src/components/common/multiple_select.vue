<template>
    <div class="multiple_select">
        <div class="multiple_select_input">
            <div class="multiple_select_input_name">机组: </div>
            <div class="multiple_select_inner">
                <div class="selected_item">1#机</div>
                <div class="selected_item">2#机</div>
                <img class="select_icon" src="../../assets/icon/dropdown.svg" @click="handleDropdown" />
            </div>
        </div>
        <div class="multiple_select_dropdown"></div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const handleDropdown = (e) => {
    if (e.target.className.includes('select_icon_animation')) {
        const regex = /select_icon_animation/i;
        let str = e.target.className.replace(regex, '')
        e.target.className = str
    } else {
        e.target.className += ' select_icon_animation'
    }
}
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
                border: 1px solid #4079C1;
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
        width: 100%;
        height: calc(100% - 40px);
        background-color: rgba(64, 121, 193, 0.3);
        display: none;
    }
}
</style>