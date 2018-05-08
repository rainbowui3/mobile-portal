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
            <div class="auto2cPlan" v-if="planItemList">
                <div class="selectedPlan">
                    <div class="selectedPlanContent">
                        <div class="planName">
                            {{$t('auto2cPlan.risk')}}
                        </div>
                    </div>
                    <div class="planAmount">
                        {{$t('auto2cPlan.insured')}}
                    </div>
                </div>
                <div v-for="(planItem,uuid) in planItemList[index].TempPolicyCoverageList[0].PolicyCoverageList" :key="planItem.TempData.uuid" class="selectedPlan">
                                   
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
            index: 0
        };
    },
    computed: {
        tabItems() {
            return this.planTabItems;
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
                    if (child.PlanCode != selectPlanItem.PlanCode) {
                        PolicyStore.deleteChild(child, policy);
                        PolicyStore.setChild(selectPlanItem, policy, param);
                    }
                } else {
                    PolicyStore.setChild(selectPlanItem, policy, param);
                }
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
        // console.log(submission);
        return new Promise((resolve, reject) => {
            let productId = policy['ProductId'];
            let url = `${config['PRODUCT_API']['GET_PLANE_CODES_BY_PRODUCTID_AH']}?productId=` + productId;
            // let url = config.PRODUCT_API.GET_PLANE_CODES_BY_PRODUCTID_AH + '?productId=' + productId;
            const planCodesList = [];
            let planTabItems = [];
            AjaxUtil.call(url).then((planCodes) => {
                // 测试数据
                planCodes = {
                    'DEA180061': {'PlanCode': 'DEA180061', 'ProductId': '301132390', 'PlanName': '12'},
                    'DEA180060': {'PlanCode': 'DEA180061', 'ProductId': '301132390', 'PlanName': '常用方案'}
                    };
                // console.log(JSON.stringify(planCodes));
                _.each(planCodes, (planCodeItem) => {
                    // 暂时最多取三个方案
                    if (planCodesList.length < 3) {
                        planCodesList.push(planCodeItem['PlanCode']);
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
                        // console.log('child.............');
                        // console.log(child);
                    let selectedIndex = 0;
                    _.each(planCodes, (planCodeItem) => {
                        if (selectedIndex < 3) {
                            // 初始化，还没有已选方案,显示已选，如果没有选，显示第一个
                            if ((child && child['PlanCode'] == planCodeItem['PlanCode']) || (!child && selectedIndex == 0)) {
                                let planTabItem = {};
                                planTabItem['selected'] = true;
                                planTabItem['showdot'] = false;
                                planTabItem['disabled'] = false;
                                planTabItem['badge'] = '';
                                planTabItem['onClick'] = this.goto;
                                planTabItem['text'] = planCodeItem['PlanName'];
                                planTabItems.push(planTabItem);
                                this.index = selectedIndex;
                            } else {
                                let planTabItem = {};
                                planTabItem['selected'] = false;
                                planTabItem['showdot'] = false;
                                planTabItem['disabled'] = false;
                                planTabItem['badge'] = '';
                                planTabItem['onClick'] = this.goto;
                                planTabItem['text'] = planCodeItem['PlanName'];
                                planTabItems.push(planTabItem);
                            }
                        }
                        selectedIndex = selectedIndex + 1;
                    });
                    this.planTabItems = planTabItems;
                        // console.log('planTabItems........');
                        // console.log(this.planTabItems);

                    // 初始化方案列表
                    let planItemList = [];
                    PolicyStore.initPlan(param, policy).then((plans) => {
                        _.each(planCodesList, (planCode) => {
                            _.each(plans, (plan) => {
                                if (planCode == plan['PlanCode']) {
                                    planItemList.push(plan);
                                }
                            });
                        });
                        this.planItemList = planItemList;

                        // console.log(this.planItemList);
                        // console.log(plans);
                        // console.log(submission);
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


