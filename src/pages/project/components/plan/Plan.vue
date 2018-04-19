<template>
    <r-card>
        <div class="plan">
            <button v-for="(item, index) in items" @click="onItemClick(index)" :key="'item'+index" :class="{active: activeIndex == index}">{{item.text}}</button>
            <div v-for="(itemContent, contentIndex) in contentItems" v-if="getShow(contentIndex)" :key="'content'+contentIndex">
                <div class="planContent" v-if="itemContent !== null && itemContent !== undefined">
                    <div class="planTitle">
                        <p>{{itemContent.content.title}}</p>
                        <p>{{itemContent.content.limit}}</p>
                    </div>
                    <div class="planName">
                        <p>{{itemContent.content.name}}</p>
                        <p>{{itemContent.content.data}}</p>
                    </div>
                </div>
                <div class="planPrice">
                    保费 :
                    <span class="planPriceContent"> ¥ {{itemContent.content.price}}</span>
                </div>
            </div>
            <div class="planImg">
                <img :src="correct">
            </div>
        </div>

    </r-card>
</template>

<script>
import correct from '../../../../assets/correct.png';

export default {
    props: {
        items: { text: String },
        contentItems: {
            content: {
                title: String,
                name: String,
                limit: String,
                data: String,
                price: String
            }
        }
    },
    data() {
        return {
            correct: correct,
            activeIndex: 0,
            pos: 0
        };
    },
    methods: {
        onItemClick(index) {
            this.activeIndex = index;
            this.pos = index;
            this.getShow(index);
        },
        getShow(contentIndex) {
            // 判断两个索引值是否相等
            return this.pos === contentIndex;
        }
    }
};
</script>
<style lang="less">
.plan {
    margin: 10px;
    background-color: #fff !important;
    border: 1px solid rgba(255, 148, 20, 1);
    position: relative;
}
button {
    font-size: 17px;
    background-color: #fff;
    width: 50%;
    line-height: 42px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #eee;
}

.planContent {
    padding: 0 10px;
}
.planTitle,
.planName {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.planName {
    min-height: 60px;
    font-size: 16px;
    color: #5e5e5e;
}
.planTitle {
    min-height: 44px;
    font-size: 14px;
    color: #6b6b6b;
}
.planPrice {
    border-top: 1px solid #eee;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    color: #868686;
}
.planPriceContent {
    margin-left: 10px;
    color: rgba(255, 148, 20, 1);
}
.planImg {
    position: absolute;
    right: 0;
    bottom: -8px;
}


</style>