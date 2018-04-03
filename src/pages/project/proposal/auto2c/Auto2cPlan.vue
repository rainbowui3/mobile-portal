<template>
    <page>
        <top :showBack="true" :title="$t('auto2cPlan.title')" />
        <r-body>
            <tab :tabItems="tabItems" class="tab" />
            <swiper :model="index">
                <swiper-item>
                    <card>
                        <row title="fdsafsafdsa" :model="pageModel" />
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
                <swiper-item>
                    {{2}}
                </swiper-item>
                <swiper-item>
                    {{3}}
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
  TabBar,
  Card,
  Cell,
  Tab,
  Swiper,
  SwiperItem,
  RButton,
  Row
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/auto2cPlan";
export default {
  components: {
    Page,
    RBody,
    TabBar,
    Card,
    Cell,
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
      pageModel: {}
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
  padding: 10px 5px 10px 15px;
}
.planAddition {
  float: left;
  font-size: 13px;
  margin: 15px 0 15px 0;
  background: blue;
  color: white;
}
.planAmount {
  float: right;
  font-size: 17px;
  padding: 10px 15px;
}
</style>
