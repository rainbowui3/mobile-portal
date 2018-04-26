<template>
  <r-page>
    <top :title="$t('auto2cPlan.title')" :showBack="true" />
    <r-body>
      <r-tab :tabItems="tabItems" class="tab" />
      <div class="auto2cPlan">
        <div v-for="(selectedPlan,selectedIdx) in planList[index].selectedPlans" :key="selectedIdx" class="selectedPlan">
          <div class="selectedPlanContent">
            <div class="planName">
              {{selectedPlan.name}}
            </div>
            <div class="planAddition" v-if="selectedPlan.isNonDeductible">
              {{"不计免赔"}}
            </div>

          </div>
          <div class="planAmount">
            {{selectedPlan.value}}
          </div>
        </div>
      </div>
    </r-body>
    <r-tab-bar>
      <r-card class="bottom">
        <div class="customPlan" v-on:click="gotoCustomPlan">
          <a href="javascript:void(0);" class="link">{{"修改投保方案"}}</a>
        </div>
        <r-button type="primary" :onClick="confirmClick">{{$t('common.confirm')}}</r-button>
      </r-card>
    </r-tab-bar>
  </r-page>
</template>
<script>
import '../../../../../i18n/auto2cPlan';
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
                        {
                            name: '交强险',
                            isNonDeductible: false,
                            value: '保额'
                        },
                        {
                            name: '机动车损失险',
                            isNonDeductible: true,
                            value: ''
                        },
                        {
                            name: '第三者责任险',
                            isNonDeductible: true,
                            value: '30万'
                        },
                        {
                            name: '司机责任险',
                            isNonDeductible: true,
                            value: '1万'
                        },
                        {
                            name: '乘客责任险',
                            isNonDeductible: true,
                            value: '1万'
                        },
                        { name: '盗抢险', isNonDeductible: true, value: '' }
                    ]
                },
                {
                    planName: '热销方案',
                    description: '高性价比',
                    selectedPlans: [
                        {
                            name: '交强险',
                            isNonDeductible: false,
                            value: '投保'
                        },
                        {
                            name: '机动车损失险',
                            isNonDeductible: true,
                            value: ''
                        },
                        {
                            name: '第三者责任险',
                            isNonDeductible: true,
                            value: '30万'
                        },
                        {
                            name: '司机责任险',
                            isNonDeductible: true,
                            value: '1万'
                        },
                        {
                            name: '乘客责任险',
                            isNonDeductible: true,
                            value: '1万'
                        }
                    ]
                },
                {
                    planName: '基础方案',
                    description: '安全出行',
                    selectedPlans: [
                        {
                            name: '第三者责任险',
                            isNonDeductible: true,
                            value: '30万'
                        }
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
            // Todo:跳转到自定义险种页面
            this.$router.push({
                path: '/project/proposal/auto2C/Auto2cCustomPlan',
                name: 'Auto2cCustomPlan',
                query: this.$route.query
            });
        },
        confirmClick() {
            this.$router.push({
                path: '/bind/auto2c',
                query: this.$route.query
            });
        }
    }
};
</script>
<style >
.auto2cPlan {
    background-color: #fff;
}
.selectedPlanContent {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.auto2cPlan > :nth-child(1) {
    border-bottom: 2px solid #ededed;
}
.selectedPlan {
    padding: 0 20px;
    height: 45px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ededed;
    color: #4b4949;
    font-size: 15px;
}
.bottom {
    width: 100%;
}
.planAddition {
    color: #fff;
    font-size: 11px;
    background-color: #ff9414;
    width: 60px;
    height: 20px;
    text-align: center;
    border-radius: 7px;
    line-height: 20px;
}
.link {
    font-size: 14px;
    color: #4d93e4;
}
.customPlan {
    background-color: #eee;
    text-align: center;
    padding: 5px 0;
}
</style>


