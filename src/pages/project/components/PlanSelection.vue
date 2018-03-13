//方案选择组件
<template>
  <div>
    <tab :tabItems="tabItems" />
    <swiper height="400px" :model="index" onChange=this.onIndexChange>
      <swiper-item v-for="(item,idx) in items" :key="idx">
        <card :title="$t('保障范围')">
          <r-table :data="item.planData" :class="{table:classStatus}" />
          <div v-for="(item, idx) in items" :key="idx">
            <row :title="'公共交通意外伤害-飞机'" :value="'50万'" :isLink="true"></row>
            <template v-if="item.showDescription">
              <div>
                <p class="coverageDescription">-在保险期间内，被保险人持有效客票乘坐民航班机，在交通工具内因发生交通事故而遭受意外的，则自遭受该意外之日起一百八十日内以该意外为直接、完全原因而身故或伤残的，保险人按照合同约定给付保险金。</p>
              </div>
            </template>
          </div>
          <row :title="'公共交通意外伤害-火车(地铁、轻轨)'" :value="'70万'" :isLink="true"></row>
          <row :title="'公共交通意外伤害-汽车'" :value="'100万'" :isLink="true"></row>
        </card>
        <card :title="$t('投保须知')">
          <list :data="getListData" />
        </card>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {
  Card,
  Tab,
  Swiper,
  SwiperItem,
  RTable,
  List,
  Row
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
    List,
    Row
  },
  data: function() {
    return {
      items: this.getSwiperItems(),
      coverageItemList:[

      ],
      index: 0,
      classStatus: true
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
        {
          label: this.$t("特殊说明:"),
          value: "本产品最终解释权由中国大地保险所有"
        }
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
            head: [[{ text: "保险责任" }, { text: "保险金额" }]]
            // body: [
            //   [{ text: "公共交通意外伤害-飞机" }, { text: "50万" }],
            //   [{ text: "公共交通意外伤害-火车(地铁、轻轨)" }, { text: "40万" }],
            //   [{ text: "公共交通意外伤害-汽车" }, { text: "30万" }]
            // ]
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
.coverageLine {
  overflow: hidden;
}
.coverage {
  float: left;
  margin-left: 15px;
  color: #999999;
}
.coverageAmount {
  float: right;
  margin-right: 15px;
  color: #999999;
}
.table > table > thead > tr > th:first-child {
  float: left;
  margin-left: 15px;
  color: #999999;
  border: none;
}
.table > table > thead > tr > th:last-child {
  float: right;
  margin-right: 15px;
  color: #999999;
  border: none;
}
.table > table > thead > tr {
  border-bottom: 1px solid #e5e5e5;
}
.coverageDescription {
  margin-left: 20px;
  text-align: left;
  margin-right: 20px;
  font-size: 14px;
}
</style>
<i18n>

</i18n>