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
                <div v-for="(ctLstItem,ProductElementId) in planItemList[index].ChildPlanCoverageList" :key="ctLstItem.ProductElementId" class="selectedPlan">
                                   
                    <div class="selectedPlanContent">
                        <div class="planName">
                            {{ctLstItem.PlanCoverageName}}
                        </div>
                        <div class="planAddition" v-if="ctLstItem.IsNonDeductible && ctLstItem.IsNonDeductible == 'Y' ">
                            {{"不计免赔"}}
                        </div>
                    </div>
                    <div class="planAmount">
                        {{ctLstItem.SumInsured}}
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
        // initPlan,init是全量CT,删除多余的CT
        initPlan(param, policy) {
            let childCoverageList = this.planItemList[this.index]['ChildPlanCoverageList'];
            PolicyStore.initPlan(param, policy).then((plans) => {
                _.each(plans, (planItem) => {
                    PolicyStore.setChild(planItem, policy, param);
                    let PolicyCoverageList = planItem.TempPolicyCoverageList[0].PolicyCoverageList;
                    _.each(PolicyCoverageList, (initCtItem) => {
                        let isSaved = false;
                        _.each(childCoverageList, (selectedCtItem) => {
                            if (initCtItem['ProductElementCode'] == selectedCtItem['ProductElementCode']) {
                                isSaved = true;
                                initCtItem['IsNonDeductible'] = selectedCtItem['IsNonDeductible'];
                                if (selectedCtItem['SumInsured']) {
                                    initCtItem['SumInsured'] = selectedCtItem['SumInsured'];
                                }
                            }
                        });
                        if (!isSaved) {
                            PolicyStore.deleteChild(initCtItem, policy);
                        }
                    });
                });
            });
        },
        getParams(schema) {
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
            return param;
        },
        async confirmClick() {
            const submission = SubmissionStore.getSubmission();
            const policy = SubmissionStore.getPolicy(submission);
            let productId = policy['ProductId'];
            SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                let param = this.getParams(schema);
                let planCodesList = [];
                let selectCode = this.planItemList[this.index]['PlanCode'];
                planCodesList.push(selectCode);
                param['PlanCodes'] = planCodesList;
                let child = PolicyStore.getChild(param, policy);
                if (child) {
                    // 当前选中方案和policy模型中的方案是否一致
                    if (child.PlanCode != selectCode) {
                        PolicyStore.deleteChild(child, policy);
                        this.initPlan(param, policy);
                    }
                } else {
                     this.initPlan(param, policy);
                }
        });
        // console.log(submission);
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
            const planCodesList = [];
            let planTabItems = [];
            let planItemList = [];
            AjaxUtil.call(url).then((planCodes) => {
                // console.log(planCodes);
                // // 测试数据
                planCodes = {
                    'DEA180061': {'PlanCode': 'DEA180061', 'ProductId': '301132390', 'PlanName': '经济方案'},
                    'DEA180060': {'PlanCode': 'DEA180060', 'ProductId': '301132390', 'PlanName': '景点方案'},
                    'DEA180062': {'PlanCode': 'DEA180062', 'ProductId': '301132390', 'PlanName': '豪华方案'}
                    };
                _.each(planCodes, (planCodeItem) => {
                    // 暂时最多取三个方案
                    if (planCodesList.length < 3) {
                        planCodesList.push(planCodeItem['PlanCode']);
                    }
                });
                url = `${config['PRODUCT_API']['GET_PLAN_DEF_BY_CODES']}?productId=` + productId;
                AjaxUtil.call(url, planCodesList, { 'method': 'POST' }).then((planList) => {
                    SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                        let param = this.getParams(schema);
                        let child = PolicyStore.getChild(param, policy);
                        _.each(planList, (planItem, i) => {
                            let planTabItem = {};
                            if ((child && child['PlanCode'] == planItem['PlanCode']) || (!child && i == 0)) {
                                planTabItem['selected'] = true;
                                planTabItem['showdot'] = false;
                                planTabItem['disabled'] = false;
                                planTabItem['badge'] = '';
                                planTabItem['onClick'] = this.goto;
                                planTabItem['text'] = planItem['PlanName'];
                                planTabItems.push(planTabItem);
                                this.index = i;
                            } else {
                                planTabItem['selected'] = false;
                                planTabItem['showdot'] = false;
                                planTabItem['disabled'] = false;
                                planTabItem['badge'] = '';
                                planTabItem['onClick'] = this.goto;
                                planTabItem['text'] = planItem['PlanName'];
                                planTabItems.push(planTabItem);
                            }
                            let childplanCoverageLst = planItem.PlanCoverageList[0].ChildPlanCoverageList;
                            _.each(childplanCoverageLst, (planCoverageLstItem) => {
                                if (planCoverageLstItem.PlanCoverageFieldList) {
                                    _.each(planCoverageLstItem.PlanCoverageFieldList, (fieldLstItem) => {
                                        if (fieldLstItem.FieldName === 'SumInsured') {
                                            planCoverageLstItem['SumInsured'] = fieldLstItem['DefaultValue'];
                                        }
                                    });
                                }
                            });
                            let ctItem = {
                                'PlanCode': planItem['PlanCode'],
                                'ChildPlanCoverageList': childplanCoverageLst
                            };
                            planItemList.push(ctItem);
                        });
                        this.planTabItems = planTabItems;
                        this.planItemList = planItemList;
                        // console.log(this.planTabItems);
                        // console.log(this.planItemList);
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
    width: 70%;
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


