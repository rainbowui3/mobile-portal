//方案选择组件
<template>
  <div>
    <!-- <card> -->
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
    <!-- </card> -->
  </div>
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
          text: "基础版",
          onClick: this.onTabItemClicked
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          bage: "",
          text: "升级版",
          onClick: this.onTabItemClicked
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          bage: "",
          text: "尊享版",
          onClick: this.onTabItemClicked
        }
      ];
    },
    getListData() {
      return [
        { label: this.$t("适用人群:"), value: "各个年龄段人群" },
        { label: this.$t("每人限购:"), value: "10份" },
        { label: this.$t("保险期限:"), value: "1年" },
        { label: this.$t("特殊说明:"), value: "本产品最终解释权由中国大地保险所有" }
      ];
    }
  },
  methods: {
    onIndexChange: function(value) {
      console.log(value);
    },
    getSwiperItems: function() {
      return [
        {
          planData: {
            head: [[{ text: "保险责任" }, { text: "保险金额" }]],
            body: [
              [{ text: "公共交通意外伤害-飞机" }, { text: "50万" }],
              [{ text: "公共交通意外伤害-火车(地铁、轻轨)" }, { text: "40万" }],
              [{ text: "公共交通意外伤害-汽车" }, { text: "30万" }]
            ]
          }
        },
        {
          planData: {
            head: [[{ text: "保险责任" }, { text: "保险金额" }]],
            body: [
              [{ text: "公共交通意外伤害-飞机" }, { text: "70万" }],
              [{ text: "公共交通意外伤害-火车(地铁、轻轨)" }, { text: "60万" }],
              [{ text: "公共交通意外伤害-汽车" }, { text: "50万" }]
            ]
          }
        },
        {
          planData: {
            head: [[{ text: "保险责任" }, { text: "保险金额" }]],
            body: [
              [{ text: "公共交通意外伤害-飞机" }, { text: "100万" }],
              [{ text: "公共交通意外伤害-火车(地铁、轻轨)" }, { text: "90万" }],
              [{ text: "公共交通意外伤害-汽车" }, { text: "80万" }]
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