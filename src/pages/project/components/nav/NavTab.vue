<template>
    <div class="navTab">
        <div class="list">
            <div v-model="index" v-for="(item, index) in listTab" @click="onItemClick(index)" :class="{active: activeIndex == index}">{{item.text}}</div>
        </div>
        <div class="listContent">
            <div v-for="(itemContent, contentIndex) in contentItems" v-if="getShow(contentIndex)">
                <div v-if="itemContent !== null && itemContent !== undefined">
                    <div class="listContentTitle">
                        <p>{{itemContent.content.title}}</p>
                    </div>
                    <div class="tabContent">
                        <div>{{itemContent.content.content1}}</div>
                        <div>{{itemContent.content.content2}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        listTab: { text: String },
        contentItems: {
            content: {
                title: String,
                content1: String,
                content2: String
            }
        }
    },

    data() {
        return {
            activeIndex: 0,
            pos: 0
        };
    },
    methods: {
        onItemClick(index) {
            this.activeIndex = index;
            this.pos = index;
            this.$emit('onItemClick', this.pos);
            this.getShow(index);
        },
        getShow(contentIndex) {
            // 判断两个索引值是否相等
            return this.pos === contentIndex;
        }
    }
};
</script>
<style>
.navTab {
    font-size: 14px;
    display: flex;
}
.list > div {
    display: flex;
    min-height: 42px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #fff;
}
.list {
    width: 25%;
}
.listContent {
    padding-left: 15px;
    width: 75%;
    background-color: #fff;
    min-height: 600px;
}
.active {
    border-left: 3px solid #ff9414;
    background-color: #fff;
    color: #ff9414;
}
.listContentTitle {
    min-height: 42px;
    line-height: 42px;
    color: #515151;
}
.tabContent {
    display: flex;
}
.tabContent > div:nth-child(1) {
    background: linear-gradient(
        180deg,
        rgba(250, 194, 70, 1) 0%,
        rgba(250, 194, 70, 1) 0%,
        rgba(255, 148, 20, 1) 100%,
        rgba(255, 148, 20, 1) 100%
    );
    color: #fff;
}
.tabContent > div {
    background: linear-gradient(
        180deg,
        rgba(248, 248, 248, 1) 0%,
        rgba(248, 248, 248, 1) 0%,
        rgba(240, 240, 240, 1) 100%,
        rgba(240, 240, 240, 1) 100%
    );
    margin-top: 7px;
    font-size: 13px;
    text-align: center;
    width: 76px;
    height: 30px;
    border-radius: 4px;
    line-height: 30px;
    margin-right: 15px;
    color: #6b6b6b;
}
</style>