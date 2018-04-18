<template>
    <div class="modal">
        <div class="home">
            <div class="title">
                <div>
                    <span class="contentOne">{{showOne.name}}</span>
                    <span class="contentTwo">{{showOne.title}}</span>
                </div>
                <div v-if="show">
                    <span class="contentThree">推荐</span>
                    <span class="icon"><img :src="icon" /></span>
                </div>
            </div>
            <div class="list">
                <div>
                    <p>{{showOne.content}}</p>
                    <p>{{showOne.validity}}</p>
                </div>
                <div class="price">
                    <span>¥{{showOne.price}}</span>
                    <span>起</span>
                </div>
            </div>

        </div>
        <div @click="onClick">
            <img :src="img" />
        </div>
    </div>

</template>

<script>
import icon from '../../../../assets/u130.png';
import '../../../../i18n/homeShowOne';

export default {
    props: {
        onClick: Function,
        showOne: {
            name: String,
            title: String,
            content: String,
            validity: String,
            price: String
        },
        show: Boolean,
        img: String
    },
    data() {
        return {
            icon: icon
        };
    }
    // methods: {
    //     onClick: function(event) {
    //         /* eslint-disable */

    //         this.onClick ? this.onClick(event) : () => {};

    //         /* eslint-disable */
    //     }
    // }
};
</script>
<style lang="less">
.modal {
    margin: 10px 0;
}
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
