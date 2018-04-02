<template>
    <page>
        <top :showBack="true" :title="$t('auto2cPlan.title')" />
        <r-body>
            <tab :tabItems="tabItems" class="tab"/>
            <swiper :model="index">
                <swiper-item>
                    <card>
                        <div></div>
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
  RButton
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
    Top
  },
  data() {
    return {
        index:0
    };
  },
  computed: {
    tabItems() {
      return [
          {'selected':true, 'showdot':false, 'disabled':false,'badge':'','text':this.$t('auto2cPlan.hotSale'),"onClick":this.goto},
          {'selected':false, 'showdot':false, 'disabled':false,'badge':'','text':this.$t('auto2cPlan.basic'),"onClick":this.goto},
          {'selected':false, 'showdot':false, 'disabled':false,'badge':'','text':this.$t('auto2cPlan.advance'),"onClick":this.goto},
        ];
    }
  },
  methods:{
      goto:function(index){
          console.log(index);
          this.index = index;
      }
  }
};
</script>

<style>
.tab > div{
    height: 100px;
}
.tab>.vux-tab>.vux-tab-item{
    line-height: 100px;
}
</style>
