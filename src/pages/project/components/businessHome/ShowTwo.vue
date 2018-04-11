<template>
    <div>
        <div class="home">
            <div class="title">
                <div>
                    <span class="contentOne">空中飞人</span>
                    <span class="contentTwo"> 航空意外年度险</span>
                </div>
                <div>
                    <span class="contentThree">推荐</span>
                    <span class="icon"><img :src="icon" /></span>
                </div>
            </div>
            <div class="list">
                <div>
                    <p>乘坐飞机造成的意外伤害</p>
                    <p>全年有效</p>
                </div>
                <div class="price">
                    <span>¥38</span>
                    <span>起</span>
                </div>
            </div>

        </div>
        <div>
            <img src="../../../../assets/u17.png" />
        </div>
    </div>

</template>

<script>
import { Page, List, Card, RBody } from "rainbow-mobile-core";
import icon from "../../../../assets/u130.png";
import banner from "../../../../assets/u17.png";
import "../../../../i18n/homeShowOne";

export default {
    components: {
        Page,
        Card,
        RBody,
        List
    },
    data() {
        return {
            icon: icon,
            banner: banner
        };
    }
};
</script>
<style lang="less">
.home {
    background-color: #fff;
    padding: 0 10px;
}
.title {
    display: flex;
    justify-content: space-between;
}
.title > div {
    font-size: 17px;
}
.title > div:nth-child(1) {
    padding: 10px 0;
}
.title > div:nth-child(2) {
    position: relative;
}
.contentOne {
    color: #666;
}
.contentTwo {
    color: #282828;
}
.contentThree {
    top: 2px;
    font-size: 12px;
    right: 15px;
    position: absolute;
    display: inline-block;
    width: 10px;
    z-index: 9;
    color: #fff;
}
.icon {
    position: absolute;
    right: 5px;
    top: 0;
}
.list {
    padding: 10px 0;
    font-size: 14px;
    color: #515151;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price {
    font-size: 24px;
    color: #ff9414;
}
.price > :nth-child(2) {
    font-size: 14px;
}
</style>
