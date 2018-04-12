<template>
    <div class="showTwo">
        <div>
            <img :src="picture">
        </div>
        <div class="showTwoContent">
            <div>{{showTwo.name}}</div>
            <div>
                <p>{{showTwo.title}}</p>
                <p>{{showTwo.content}}</p>
            </div>
            <div class="showTwoOther">
                <span class="great">
                    <img :src="heart"> &nbsp; {{showTwo.loveNum}}
                </span>
                <span class="price">
                    <span>¥ {{showTwo.price}}</span>
                    <span>起</span>
                </span>
            </div>
        </div>
    </div>

</template>

<script>
import img from "../../../../assets/u92.png";
import heart from "../../../../assets/u88.png";
import "../../../../i18n/homeShowTwo";

export default {
    props: {
        showTwo: {
            name: String,
            title: String,
            contnet: String,
            loveNum: String,
            price: String,
        },
        show: Boolean,
        picture: String
    },
    components: {
        Page,
        Card,
        RBody,
        List
    },
    data() {
        return {
            img: img,
            heart: heart
        };
    }
};
</script>
<style lang="less">
.showTwo {
    background-color: #fff;
    padding: 10px;
    display: flex;
}
.showTwoContent {
    margin-left: 15px;
}
.showTwoOther {
    display: flex;
    justify-content: space-between;
}
.showTwoContent > div:nth-child(1) {
    font-size: 17px;
    color: #282828;
}
.showTwoContent > div:nth-child(2) {
    margin: 8px 0;
    font-size: 14px;
    color: #515151;
}
.great {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #888888;
}

.price {
    font-size: 24px;
    color: #ff9414;
}
.price > :nth-child(2) {
    font-size: 14px;
}
</style>
