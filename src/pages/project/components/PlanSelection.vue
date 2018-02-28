//方案选择组件
<template>
    <card>
        <tab :tabItems="tabItems" />
        <swiper height="400px" :model="index" onChange=this.onIndexChange>
            <swiper-item v-for="(item,idx) in items" :key="idx">
                <card :title="$t('保障范围')">
                    <r-table :data="item.planData" />
                </card>
                <card :title="$t('投保须知')">
                    <list :data="getListData" />
                </card>
            </swiper-item>
        </swiper>
    </card>
</template>
<script>
import {
    Card,
    Tab,
    Swiper,
    SwiperItem,
    RTable,
    List
} from "rainbow-mobile-core";
import { PassThrough } from "stream";
import { debug } from "util";
export default {
    components: {
        Tab,
        Card,
        Swiper,
        SwiperItem,
        RTable,
        List
    },
    data: function() {
        return {
            items: this.getSwiperItems(),
            index: 0,
            planData: {
                head: [[{ text: "保险责任" }, { text: "保险金额" }]],
                body: [
                    [{ text: "1" }, { text: "1" }],
                    [{ text: "2" }, { text: "2" }],
                    [{ text: "3" }, { text: "3" }]
                ]
            }
        };
    },
    computed: {
        //Tab选项卡的名称
        tabItems: function() {
            return [
                {
                    selected: true,
                    showdot: false,
                    disabled: false,
                    bage: "",
                    text: "item1",
                    onClick: this.onTabItemClicked
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    bage: "",
                    text: "item2",
                    onClick: this.onTabItemClicked
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    bage: "",
                    text: "item3",
                    onClick: this.onTabItemClicked
                }
            ];
        },
        getListData() {
            return [
                { label: this.$t("适用人群:"), value: "XXXXXX" },
                { label: this.$t("每人限购:"), value: "XXXXX份" },
                { label: this.$t("保险期限:"), value: "XXXXX年" },
                { label: this.$t("特殊说明:"), value: "XXXXXXXXX" }
            ];
        }
    },
    methods: {
        onIndexChange:function(value){
            console.log(value);
            debugger;
        },
        getSwiperItems: function() {
            return [
                {
                    planData: {
                        head: [[{ text: "保险责任" }, { text: "保险金额" }]],
                        body: [
                            [{ text: "11" }, { text: "11" }],
                            [{ text: "12" }, { text: "12" }],
                            [{ text: "13" }, { text: "13" }]
                        ]
                    }
                },
                {
                    planData: {
                        head: [[{ text: "保险责任" }, { text: "保险金额" }]],
                        body: [
                            [{ text: "21" }, { text: "21" }],
                            [{ text: "22" }, { text: "22" }],
                            [{ text: "23" }, { text: "23" }]
                        ]
                    }
                },
                {
                    planData: {
                        head: [[{ text: "保险责任" }, { text: "保险金额" }]],
                        body: [
                            [{ text: "31" }, { text: "31" }],
                            [{ text: "32" }, { text: "32" }],
                            [{ text: "33" }, { text: "33" }]
                        ]
                    }
                }
            ];
        },
        onTabItemClicked: function(index) {
            this.index = index;
        }
    },
    mounted: function() {
        console.log(this.items);
    }
};
</script>
<style>
.weui-panel__hd {
    text-align: left;
}
</style>
<i18n>

</i18n>