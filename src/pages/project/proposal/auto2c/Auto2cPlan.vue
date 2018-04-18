<template>
    <r-page>
        <top :title="$t('auto2cPlan.title')" :showBack="true" />
        <r-body>
            <r-card>
                <r-tab :tabItems="tabItems" class="tab" />
                <div v-for="(selectedPlan,selectedIdx) in planList[index].selectedPlans" :key="selectedIdx" class="selectedPlan">
                    <div class="planName">
                        {{selectedPlan.name}}
                    </div>
                    <div class="planAddition" v-if="selectedPlan.isNonDeductible">
                        {{"不计免赔"}}
                    </div>
                    <div class="planAmount">
                        {{selectedPlan.value}}
                    </div>
                </div>
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-card class="bottom">
                <hr/>
                <div class="customPlan">
                    <span v-on:click="gotoCustomPlan">
                        <a href="javascript:void(0);" class="link">{{"修改投保方案"}}</a>
                    </span>
                </div>
                <r-button type="primary" :onClick="confirmClick">{{$t('common.confirm')}}</r-button>
            </r-card>
        </r-tab-bar>
    </r-page>
</template>
<script>
import '../../../../i18n/auto2cPlan';
export default {
  data() {
    return {
      index: 0,
      pageModel: {},
      planList: [
        {
          planName: '自选方案',
          description: '灵活搭配',
          selectedPlans: [
            { name: '交强险', isNonDeductible: false, value: '投保' },
            { name: '机动车损失险', isNonDeductible: true, value: '' },
            { name: '第三者责任险', isNonDeductible: true, value: '30万' },
            { name: '司机责任险', isNonDeductible: true, value: '1万' },
            { name: '乘客责任险', isNonDeductible: true, value: '1万' },
            { name: '盗抢险', isNonDeductible: true, value: '' }
          ]
        },
        {
          planName: '热销方案',
          description: '高性价比',
          selectedPlans: [
            { name: '交强险', isNonDeductible: false, value: '投保' },
            { name: '机动车损失险', isNonDeductible: true, value: '' },
            { name: '第三者责任险', isNonDeductible: true, value: '30万' },
            { name: '司机责任险', isNonDeductible: true, value: '1万' },
            { name: '乘客责任险', isNonDeductible: true, value: '1万' }
          ]
        },
        {
          planName: '基础方案',
          description: '安全出行',
          selectedPlans: [
            { name: '第三者责任险', isNonDeductible: true, value: '30万' }
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
          badge: '',
          text: this.$t('auto2cPlan.hotSale'),
          onClick: this.goto
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('auto2cPlan.basic'),
          onClick: this.goto
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('auto2cPlan.advance'),
          onClick: this.goto
        }
      ];
    }
  },
  methods: {
    goto: function(index) {
      this.index = index;
    },
    gotoCustomPlan: function() {
        console.log('gotoCustomPlan');
        // Todo:跳转到自定义险种页面
        this.$router.push({
          path: '/project/proposal/auto2C/Auto2cCustomPlan',
          name: 'Auto2cCustomPlan',
          params: {}

        });
    },
    confirmClick() {
      this.$router.push({
        path: '/project/proposal/auto2c/Auto2cProposalInfoConfirm',
        name: 'Auto2cProposalInfoConfirm'
      });
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
.selectedPlan {
  width: 100%;
  display: inline-block;
}
.bottom {
  width: 100%;
}
.customPlan {
  text-align: center;
  height: 40px;
  padding-top: 10px;
}
.link {
  color: #4d93e4;
 font-size: 14px;

}
</style>


