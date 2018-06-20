<template>
    <r-page>
        <top :title="$t('auto2cPlan.title')" :showBack="true" />
        <r-body>
            <div >
                    <r-tab :tabItems="tabItems" class="tab" id="planId"/>
            </div>
            <div class="auto2cPlan" v-if="planItemList && planItemList.length > 0 && planItemList[index].ChildPlanCoverageList">
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
                <div v-for="(ctLstItem,ProductElementId) in planItemList[index].ChildPlanCoverageList" :key="ctLstItem.ProductElementId" class="selectedPlan" v-if="ctLstItem.IsRealProposal && ctLstItem.IsRealProposal == 'Y'">
                    <div class="selectedPlanContent">
                        <div class="planName">
                            {{ctLstItem.ProductElementCode}}
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
            <r-toast :model="this" value="toastShow" :text="$t('auto2cPlan.error')" type='text'/>      
        </r-body>
        <div class="autoPlanBottom">
        <r-tab-bar>
            <div class="bottom">
                <div class="autoPlan" v-on:click="gotoCustomPlan">
                    <span class="planEditAuto">{{$t('auto2cPlan.modifyPlan')}}</span>
                </div>
                <r-button type="primary" :onClick="confirmClick">{{$t('auto2cPlan.quoted')}}</r-button>
            </div>
        </r-tab-bar>
        </div>
    </r-page>
</template>
<script>
import '../../../../../i18n/auto2cPlan';
import { SubmissionStore, PolicyStore, SchemaUtil } from 'rainbow-foundation-sdk';
import config from '../../../../../config/config';
import { LoadingApi } from 'rainbow-mobile-core';
import { UrlUtil, ObjectUtil } from 'rainbow-foundation-tools';
import { SessionContext } from 'rainbow-foundation-cache';
export default {
    data() {
        return {
            planTabItems: [],
            planItemList: [],
            index: 0,
            submission: undefined,
            toastShow: false
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
        async gotoCustomPlan() {
            let isConfirm = false;
            this.savePlan(isConfirm);
            // Todo:跳转到自定义险种页面
            // this.$emit('showPackage', false);
            // this.$router.push({
            //     path: '/project/proposal/auto2C/Auto2cCustomPlan',
            //     name: 'Auto2cCustomPlan',
            //     query: this.$route.query
            // });
        },
        // initPlan,init是全量CT,删除多余的CT
        initPlan(param, policy, submission, isConfirm) {
            let childCoverageList = this.planItemList[this.index]['ChildPlanCoverageList'];
            PolicyStore.initPlan(param, policy).then((plans) => {
                _.each(plans, (planItem) => {
                    const savePlanItem = ObjectUtil.clone(planItem);
                    savePlanItem['TempPolicyCoverageList'][0]['PolicyCoverageList'] = [];
                    let PolicyCoverageList = planItem.TempPolicyCoverageList[0].PolicyCoverageList;
                    _.each(PolicyCoverageList, (initCtItem) => {
                        _.each(childCoverageList, (selectedCtItem) => {
                            if (initCtItem['ProductElementCode'] == selectedCtItem['ProductElementCode']) {
                                initCtItem['IsNonDeductible'] = selectedCtItem['IsNonDeductible'];
                                if (selectedCtItem['SumInsured']) {
                                    initCtItem['SumInsured'] = selectedCtItem['SumInsured'];
                                } else { // 临时给没有保额的险别附上保额
                                    initCtItem['SumInsured'] = '10000';
                                }
                                // 临时删除模型的字段
                                initCtItem['IsSelectedByDefault'] = undefined;
                                savePlanItem['TempPolicyCoverageList'][0]['PolicyCoverageList'].push(initCtItem);
                            }
                        });
                    });
                    policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'].push(savePlanItem);
                });

                // 把policyPlanList 下面的policyCoverageList 数据存到 policyRiskList下面的 PolicyCoverageList
                let child = policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'][0];
                if (child) {
                    policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyCoverageList'] = child['TempPolicyCoverageList'];
                }
                SubmissionStore.setSubmission(submission);
                // const routerType = JSON.parse(SessionContext.get('ROUTE_TYPE'));
                //     this.$router.push({
                //         path: `/bind/${routerType.route3}`,
                //         query: this.$route.query
                //     });
                // console.log(JSON.stringify(submission));
                if (isConfirm) {
                    this.accurateAndGoNextPage(submission);
                } else {
                    this.$emit('showPackage', false);
                }
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
            let isConfirm = true;
            this.savePlan(isConfirm);
        },
        savePlan(isConfirm) {
            LoadingApi.show(this, {
                text: this.$t('common.processing')
            });
            const submission = this.submission;
            const policy = submission['SubmissionProductList'][1]['Policy'];
            let productId = policy['ProductId'];
            SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                let param = this.getParams(schema);
                let planCodesList = [];
                let selectCode = this.planItemList[this.index]['PlanCode'];
                planCodesList.push(selectCode);
                param['PlanCodes'] = planCodesList;
                policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'] = [];
                this.initPlan(param, policy, submission, isConfirm);
            });
        },
        accurateAndGoNextPage(submission) {
            let url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'POLICY_API', 'ACCURATE_QUOTE')}`;
            SubmissionStore.call(url, submission, { 'method': 'POST' }).then((reponsed) => {
                const self = this;
                if (reponsed.Submission) {
                    self.showBackSubmission(reponsed.Submission);
                    const routerType = JSON.parse(SessionContext.get('ROUTE_TYPE'));
                    self.$router.push({
                        path: `/bind/${routerType.route3}`,
                        query: self.$route.query
                    });
                } else {
                    self.toastShow = true;
                }
                LoadingApi.hide(self);
            });
        },
        showBackSubmission(returnSubmission) {
            const policyRiskBack = returnSubmission.SubmissionProductList[1].Policy.PolicyLobList[0].PolicyRiskList[0];
            returnSubmission.SubmissionProductList[1].Policy.PolicyLobList[0].PolicyRiskList[0].PolicyPlanList[0].TempPolicyCoverageList = policyRiskBack.PolicyCoverageList;
            SubmissionStore.setSubmission(returnSubmission);
        }
    },
    async created() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        const submissionStore = SubmissionStore.getSubmission();
        const submission = ObjectUtil.clone(submissionStore);
        this.submission = submission;
        const policy = submission['SubmissionProductList'][1]['Policy'];
        // let productId = policy['ProductId'];
        // let url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'PRODUCT_API', 'GET_PLANE_CODES_BY_PRODUCTID_AH')}?productId=${productId}`;
        // const planCodesList = [];
        let planTabItems = [];
        let planItemList = [];
        // AjaxUtil.call(url).then((planCodes) => {
            // // 测试数据
            // planCodes = {
            //     'DEA180061': { 'PlanCode': 'DEA180061', 'ProductId': '301132390', 'PlanName': '经济方案' },
            //     'DEA180060': { 'PlanCode': 'DEA180060', 'ProductId': '301132390', 'PlanName': '景点方案' },
            //     'DEA180062': { 'PlanCode': 'DEA180062', 'ProductId': '301132390', 'PlanName': '豪华方案' }
            // };
            // _.each(planCodes, (planCodeItem) => {
            //     // 暂时最多取三个方案
            //     if (planCodesList.length < 3) {
            //         planCodesList.push(planCodeItem['PlanCode']);
            //     }
            // });
            // url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'PRODUCT_API', 'GET_PLAN_DEF_BY_CODES')}?productId=${productId}`;
            let url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'PRODUCT_API', 'PLAN_LIST_FOR_GENERAL')}`;
            const urlObject = UrlUtil.parseURL(window.location.href);
            const param = { 'ProductCode': urlObject.params.productCode};
            AjaxUtil.call(url, param, { 'method': 'POST' }).then((planList) => {
                // console.log(JSON.stringify(planList));
                    let child;
                    if (policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'] && policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'].length > 0) {
                        child = policy['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'][0];
                    };
                    let clonePlanList = {};
                    // if (planList.l) {
                    //     clonePlanList.l = planList.l;
                    // }
                    if (planList.m) {
                        clonePlanList.m = planList.m;
                    }
                    if (planList.h) {
                        clonePlanList.h = planList.h;
                    }
                    let showIndex = 0;
                    _.each(clonePlanList, (planItem, key) => {
                        let planTabItem = {};
                        if ((child && child['PlanCode'] == planItem['PlanCode']) || (!child && showIndex == '0')) {
                            this.index = showIndex;
                            planTabItem['selected'] = true;
                        } else {
                            planTabItem['selected'] = false;
                        }
                        planTabItem['showdot'] = false;
                        planTabItem['disabled'] = false;
                        planTabItem['badge'] = '';
                        planTabItem['onClick'] = this.goto;
                        if (key == 'l') {
                            planTabItem['text'] = '超值';
                        } else if (key == 'm') {
                            planTabItem['text'] = '人气';
                        } else {
                            planTabItem['text'] = '尊享';
                        }
                        planTabItem['text'] = planItem['PlanName'];
                        planTabItems.push(planTabItem);

                        let childplanCoverageLst = planItem.PlanCoverageList[0].ChildPlanCoverageList;
                        _.each(childplanCoverageLst, (planCoverageLstItem) => {
                            // 把方案下面的保额字段赋值到集合字段里
                            if (planCoverageLstItem.PlanCoverageFieldList) {
                                _.each(planCoverageLstItem.PlanCoverageFieldList, (fieldLstItem) => {
                                    if (fieldLstItem.FieldName === 'SumInsured') {
                                        planCoverageLstItem['SumInsured'] = fieldLstItem['DefaultValue'];
                                    }
                                });
                            }

                            // 此字段只做页面控制用，页面展示不展示次险别
                            planCoverageLstItem['IsRealProposal'] = 'Y';

                            // 因为方案里不对 IsNonDeductible 做维护，所以程序处理
                            planCoverageLstItem['IsNonDeductible'] = 'N';

                            // 不计免赔逻辑 如果对应险别有不计免赔险，不显示，不计免赔字段设为Y
                            switch (planCoverageLstItem.ProductElementCode) {
                                case config['VEHICLE_LOSS_MIANCODE']:
                                    _.each(childplanCoverageLst, (item) => {
                                        if (item['ProductElementCode'] == config['NONVEHICLE_LOSS_ADDITIONAL_CODE']) {
                                            planCoverageLstItem['IsNonDeductible'] = 'Y';

                                            // 临时填充数据，记得删除
                                            planCoverageLstItem['SumInsured'] = '12000';
                                        }
                                    });
                                    break;
                                case config['THIRD_DUTY_MAINCODE']:
                                    _.each(childplanCoverageLst, (item) => {
                                        if (item['ProductElementCode'] == config['NONTHIRD_DUTY_ADDITIONAL_CODE']) {
                                            planCoverageLstItem['IsNonDeductible'] = 'Y';
                                        }
                                    });
                                    break;
                                case config['DRIVER_DUTY_MAINCODE']:
                                    _.each(childplanCoverageLst, (item) => {
                                        if (item['ProductElementCode'] == config['NONDRIVER_DUTY_ADDITIONAL_CODE']) {
                                            planCoverageLstItem['IsNonDeductible'] = 'Y';
                                        }
                                    });
                                    break;
                                case config['PASSENGER_DUTY_MAINCODE']:
                                    _.each(childplanCoverageLst, (item) => {
                                        if (item['ProductElementCode'] == config['NONPASSENGER_DUTY_ADDITIONAL_CODE']) {
                                            planCoverageLstItem['IsNonDeductible'] = 'Y';
                                        }
                                    });
                                    break;
                                // 不计免赔险页面不展示，临时加一个IsRealProposal来做页面控制
                                case config['NONVEHICLE_LOSS_ADDITIONAL_CODE']:
                                    planCoverageLstItem['IsNonDeductible'] = 'Y';
                                    planCoverageLstItem['IsRealProposal'] = 'N';
                                    break;
                                case config['NONTHIRD_DUTY_ADDITIONAL_CODE']:
                                    planCoverageLstItem['IsNonDeductible'] = 'Y';
                                    planCoverageLstItem['IsRealProposal'] = 'N';
                                    break;
                                case config['NONDRIVER_DUTY_ADDITIONAL_CODE']:
                                    planCoverageLstItem['IsNonDeductible'] = 'Y';
                                    planCoverageLstItem['IsRealProposal'] = 'N';
                                    break;
                                case config['NONPASSENGER_DUTY_ADDITIONAL_CODE']:
                                    planCoverageLstItem['IsNonDeductible'] = 'Y';
                                    planCoverageLstItem['IsRealProposal'] = 'N';
                                    break;
                            }
                        });
                        let ctItem = {
                            'PlanCode': planItem['PlanCode'],
                            'ChildPlanCoverageList': childplanCoverageLst
                        };
                        planItemList.push(ctItem);
                        showIndex++;
                    });
                    this.planTabItems = planTabItems;
                    this.planItemList = planItemList;
                    LoadingApi.hide(this);
            });
        // });
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

.auto2cPlan> :nth-child(1) {
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

.planTab> :nth-child(1) {
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

.customPlan>i {
    font-size: 20px;
}

.planEdit {
    position: absolute;
    font-size: 14px;
    color: #FF9414;
    vertical-align: bottom;
}
.autoPlanBottom>.weui-tabbar{
    background-color: transparent!important;
}
.autoPlanBottom>.weui-tabbar::before{
    border:0px!important;
}
.autoPlan{
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: blue;
}
</style>


