<template>
    <r-page>
        <top :title="$t('auto2cPlan.title')" :showBack="true" />
        <r-body>
            <div class='planTab'>
                <div>
                    <r-tab :tabItems="tabItems" class="tab" />
                </div>
                <div class="customPlan" v-on:click="gotoCustomPlan">
                    <span class="planEdit">定制方案</span>
                </div>
            </div>
            <div class="auto2cPlan">
                <div v-for="(planItem,uuid) in planItemList[index].TempPolicyCoverageList[0].PolicyCoverageList" :key="BusinessObjectId" class="planItem.TempData.uuid">
                    <div class="selectedPlanContent">
                        <div class="planName">
                            {{planItem.ProductElementCode}}
                        </div>
                        <div class="planAddition" v-if="planItem.IsNonDeductible">
                            {{"不计免赔"}}
                        </div>
                    </div>
                    <div class="planAmount">
                        {{planItem.SumInsured}}
                    </div>
                </div>
            </div>
        </r-body>
        <r-tab-bar>
            <r-card class="bottom">

                <r-button type="primary" :onClick="confirmClick">{{$t('common.confirm')}}</r-button>
            </r-card>
        </r-tab-bar>
    </r-page>
</template>
<script>
import '../../../../../i18n/auto2cPlan';
import {SubmissionStore, PolicyStore, SchemaUtil} from 'rainbow-foundation-sdk';
import config from '../../../../../config/config';
export default {
    data() {
        return {
            planTabItems: [],
            planItemList: [],
            plan: [],
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
        async confirmClick() {
            const submission = SubmissionStore.getSubmission();
            const policy = SubmissionStore.getPolicy(submission);
            let productId = policy['ProductId'];
            SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                let modelNameParma = {
                    'ModelName': 'PolicyPlan'
                };
                const objectCode = SchemaUtil.getSchemaByModelName(modelNameParma, schema);
                modelNameParma = {
                    'ModelName': 'PolicyRisk'
                };
                const parentObjectCode = SchemaUtil.getSchemaByModelName(modelNameParma, schema);
                const param = {
                        'ModelName': 'PolicyPlan',
                        'ObjectCode': objectCode[0].ObjectCode,
                        'ParentModelName': 'PolicyRisk',
                        'ParentObjectCode': parentObjectCode[0].ObjectCode
                };
                let child = PolicyStore.getChild(param, policy);
                let selectPlanItem = this.planItemList[this.index];
                if (child) {
                    // 当前选中方案和policy模型中的方案是否一致
                    if (!child.PlanCode == selectPlanItem.PlanCode) {
                        PolicyStore.deleteChild(child, policy);
                        PolicyStore.setChild(selectPlanItem, policy, param);
                    }
                } else {
                    PolicyStore.setChild(selectPlanItem, policy, param);
                }
                PolicyStore.setChild(this.planItemList[this.index], policy, param);
        });

            this.$router.push({
                path: '/bind/auto2c',
                query: this.$route.query
            });
        }
    },
    async created() {
        const submission = SubmissionStore.getSubmission();
        const policy = SubmissionStore.getPolicy(submission);
        console.log(submission);
        let planTabItem = {
            selected: false,
            showdot: false,
            disabled: false,
            badge: '',
            onClick: this.goto
        };
        return new Promise((resolve, reject) => {
            let productId = policy['ProductId'];
            let url = `${config['PRODUCT_API']['GET_PLAN_BY_PLAN_CODE']}?productId=` + productId;
            const planCodesList = [];
            let planTabItems = [];
            AjaxUtil.call(url).then((data) => {
                _.forEach(data, function(planItem) {
                    // 暂时最多取三个方案
                    if (planCodesList.length < 4) {
                        planCodesList.push(planItem['PlanCode']);
                    }
                });
                SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                    let modelNameParma = {
                     'ModelName': 'PolicyPlan'
                    };
                    const objectCode = SchemaUtil.getSchemaByModelName(modelNameParma, schema);
                    modelNameParma = {
                        'ModelName': 'PolicyRisk'
                    };
                    const parentObjectCode = SchemaUtil.getSchemaByModelName(modelNameParma, schema);
                    const param = {
                        'ModelName': 'PolicyPlan',
                         'ObjectCode': objectCode[0].ObjectCode,
                         'ParentModelName': 'PolicyRisk',
                         'ParentObjectCode': parentObjectCode[0].ObjectCode,
                         'PlanCodes': planCodesList
                    };

                    let child = PolicyStore.getChild(param, policy);
                    let selectedIndex = 0;
                    _.forEach(data, function(planItem) {
                        // 暂时最多取三个方案
                        if (selectedIndex < 3) {
                            // 初始化，还没有已选方案,显示已选，如果没有选，显示第一个
                            if ((child && child['PlanCode'] == planItem['PlanCode']) || (!child && selectedIndex == 0)) {
                                planTabItem['selected'] = true;
                                planTabItem['text'] = planItem['PlanName'];
                                planTabItems.push(planTabItem);
                                this.index = selectedIndex;
                            } else {
                                planTabItem['text'] = planItem['PlanName'];
                                planTabItems.push(planTabItem);
                            }
                        }
                        selectedIndex = selectedIndex + 1;
                    });
                    this.planTabItems = planTabItems;

                    // 初始化方案列表
                    let planItemList = [];
                    PolicyStore.initPlan(param, policy).then((plans) => {
                        _.forEach(planCodesList, function(planCode) {
                            _.forEach(plans, function(plan) {
                                if (planCode == plan['PlanCode']) {
                                    planItemList.push(plan);
                                }
                            });
                        });
                        this.planItemList = planItemList;

                        console.log(plans);
                    });
                });
            });
        });
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
.planTab {
    display: flex;
}
.planTab > :nth-child(1) {
    width: 85%;
}
.customPlan {
    position: relative;
    width: 16%;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-right: 10px;
    padding-left: 10px;
}
.customPlan>i{
    font-size: 20px;
}
.planEdit {
    position: absolute;
    font-size: 14px;
    color: #FF9414;
    vertical-align: bottom;
}
</style>


