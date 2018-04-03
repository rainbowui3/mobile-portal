<template>
    <page>
        <top :title="$t('auto2cPlan.title')" :showBack="true" />
        <r-body>
            <tab :tabItems="tabItems" class="tab" />
            <swiper :model="index">
                <swiper-item v-for="(plan,idx) in planList" :key="idx">
                    <card>
                        <div>
                            <div class="planName">
                                {{"xxxxx险"}}
                            </div>
                            <div class="planAddition">
                                {{"不计免赔"}}
                            </div>
                            <div class="planAmount">
                                {{"15000元"}}
                            </div>
                        </div>
                    </card>

                </swiper-item>
            </swiper>
        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('common.confirm')}}</r-button>
        </tab-bar>
    </page>
</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton,
  Tab,
  Swiper,
  SwiperItem,
  Row,
  List
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/auto2cPlan";
export default {
  components: {
    Page,
    RBody,
    TabBar,
    Card,
    Tab,
    Swiper,
    SwiperItem,
    RButton,
    Top,
    Row
  },
  data() {
    return {
      index: 0,
      pageModel: {},
      planList: [
        {
          planName: "自选方案",
          description: "灵活搭配",
          selectedPlans: [
            { name: "交强险", isNonDeductible: false, value: "投保" },
            { name: "机动车损失险", isNonDeductible: true, value: "" },
            { name: "第三者责任险", isNonDeductible: true, value: "30万" },
            { name: "司机责任险", isNonDeductible: true, value: "1万" },
            { name: "乘客责任险", isNonDeductible: true, value: "1万" },
            { name: "盗抢险", isNonDeductible: true, value: "" }
          ]
        },
        {
          planName: "热销方案",
          description: "高性价比",
          selectedPlans: [
            { name: "交强险", isNonDeductible: false, value: "投保" },
            { name: "机动车损失险", isNonDeductible: true, value: "" },
            { name: "第三者责任险", isNonDeductible: true, value: "30万" },
            { name: "司机责任险", isNonDeductible: true, value: "1万" },
            { name: "乘客责任险", isNonDeductible: true, value: "1万" }
          ]
        },
        {
          planName: "基础方案",
          description: "安全出行",
          selectedPlans: [
            { name: "第三者责任险", isNonDeductible: true, value: "30万" }
          ]
        }
      ]
    };
  },
  computed: {
    tabItems() {
      return [
        {
          selected: true,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("auto2cPlan.hotSale"),
          onClick: this.goto
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("auto2cPlan.basic"),
          onClick: this.goto
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("auto2cPlan.advance"),
          onClick: this.goto
        }
      ];
    }
  },
  methods: {
    goto: function(index) {
      console.log(index);
      this.index = index;
    }
  }
};
</script>
<style>
.tab > div {
  height: 100px;
}
.tab > .vux-tab > .vux-tab-item {
  line-height: 100px;
}
.planName {
  float: left;
  font-size: 17px;
  padding: 10px 10px 10px 15px;
}
.planAddition {
  float: left;
  font-size: 13px;
  margin: 15px 0 15px 0;
  background: #ffcc33;
  color: white;
}
.planAmount {
  float: right;
  font-size: 17px;
  padding: 10px 15px;
}
</style>


