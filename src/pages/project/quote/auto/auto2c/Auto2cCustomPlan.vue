<template>
    <r-page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <r-card v-if="policyComp">
                <r-switch  :title="$t('auto2cCustomPlan.compulsoryInsurance')" :model="this" value="IsRealProposal" :valueMap="valueMap" ></r-switch>
                <div v-show="IsRealProposal == 'Y'">                    
                    <r-date-time :title="$t('auto2cCustomPlan.compStart')" :model="policyComp" value="EffectiveDate" :format="hoursFormat" ></r-date-time>                  
                </div>        
            </r-card>
            <r-card v-if='policyComm'>
                <r-date-time :title="$t('auto2cCustomPlan.commStart')" :model="policyComm" value="EffectiveDate" :format="hoursFormat" ></r-date-time>                                
                <!--<div v-for="(ctItem,index) in nonDeductibleCts" :key="ctItem.ProductElementCode" >
                    <div v-if="ctItem.ProductElementCode == config.VEHICLE_LOSS_MIANCODE
                        || ctItem.ProductElementCode == config.THIRD_DUTY_MAINCODE
                        || ctItem.ProductElementCode == config.DRIVER_DUTY_MAINCODE
                        || ctItem.ProductElementCode == config.PASSENGER_DUTY_MAINCODE">
                         <r-cell :type="row" class="margin_brage">
                            <r-cell  :padding="padding" :span="4">
                                <div v-text="ctItem.ProductElementCode" />
                            </r-cell>
                            <r-cell  :padding="padding" :span="4">
                                <r-checker :model="this" value="IsNonDeductible" :text="$t('auto2cCustomPlan.sdew')" type="icon" :onChange="IsNonDeductibleOnChange(index)"></r-checker>                     
                            </r-cell>
                            <r-cell  :padding="padding" class="padding_brage" >
                                <r-row :model="policy" value="value" :onClick="goto" :isLink="true"></r-row>
                            </r-cell>
                        </r-cell>
                    </div>
                    <div v-else>
                        <r-switch  :title="ctItem.ProductElementCode"  :model="this" value="IsRealProposal" ></r-switch>
                    </div>
                </div>-->
                <r-cell :type="row" class="margin_brage" v-if='vehicleLossMianCode'>
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.vehicleLoss')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="vehicleLossMianCode" value="IsNonDeductible" :text="$t('auto2cCustomPlan.sdew')" type="icon" :valueMap="valueMap"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row v-if="vehicleLossMianCode.IsRealProposal && vehicleLossMianCode.IsRealProposal == 'Y'" :model="this" value="insured"  :onClick="gotoVL" :isLink="true"></r-row>
                        <r-row v-else :model="this" value="notInsured"  :onClick="gotoVL" :isLink="true"></r-row>
                    </r-cell>
                </r-cell>
                
                <r-cell :type="row" class="margin_brage" v-if='thirdDutyMainCode'>
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.thirdDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="thirdDutyMainCode" value="IsNonDeductible" :text="$t('auto2cCustomPlan.sdew')" type="icon" :valueMap="valueMap"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row v-if="thirdDutyMainCode.IsRealProposal && thirdDutyMainCode.IsRealProposal == 'Y'" :model="this" value="insured"  :onClick="gotoThirdDuty" :isLink="true"></r-row>
                        <r-row v-else :model="this" value="notInsured"  :onClick="gotoThirdDuty" :isLink="true"></r-row>
                    </r-cell>
                </r-cell>
                <r-switch v-if='carRobberyMianCode' :title="$t('auto2cCustomPlan.carRobberyMain')"  :model="carRobberyMianCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-cell :type="row" class="margin_brage" v-if='driverDutyMainCode'>
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.driverDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="driverDutyMainCode" value="IsNonDeductible" :text="$t('auto2cCustomPlan.sdew')" type="icon" :valueMap="valueMap"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row v-if="driverDutyMainCode.IsRealProposal && driverDutyMainCode.IsRealProposal == 'Y'" :model="this" value="insured" :onClick="gotoDriverDuty" :isLink="true"></r-row>
                        <r-row v-else :model="this" value="notInsured" :onClick="gotoDriverDuty" :isLink="true"></r-row>
                    </r-cell>
                </r-cell>
                <r-cell :type="row" class="margin_brage" v-if='passengerDutyMainCode'>
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.passengerDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="passengerDutyMainCode" value="IsNonDeductible" :text="$t('auto2cCustomPlan.sdew')" type="icon" :valueMap="valueMap"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row v-if="passengerDutyMainCode.IsRealProposal && passengerDutyMainCode.IsRealProposal == 'Y'" :model="this" value="insured" :onClick="gotoPassengerDuty" :isLink="true"></r-row>
                        <r-row v-else :model="this" value="notInsured" :onClick="gotoPassengerDuty" :isLink="true"></r-row>
                    </r-cell>
                </r-cell>
                <r-switch v-if='glassCrushAdditionalCode' :title="$t('auto2cCustomPlan.glassCrushAdditional')"  :model="glassCrushAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='naturalLossAdditionalCode' :title="$t('auto2cCustomPlan.naturalDamage')"  :model="naturalLossAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='carBodyScratchLossAdditionalCode' :title="$t('auto2cCustomPlan.carBodyScratchLoss')"  :model="carBodyScratchLossAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='engineWadLossAdditionalCode' :title="$t('auto2cCustomPlan.engineWadLoss')"  :model="engineWadLossAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='repairCompenstoryPaymentAdditionalCode' :title="$t('auto2cCustomPlan.repairPayment')" :model="repairCompenstoryPaymentAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='noFondThirdAdditionalCode' :title="$t('auto2cCustomPlan.notFoundThirdAdditional')"  :model="noFondThirdAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-switch v-if='appointRepairShopAdditionalCode' :title="$t('auto2cCustomPlan.appointRepairShop')"  :model="appointRepairShopAdditionalCode" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-toast :model="this" value="isReminder" :text="$t('auto2cCustomPlan.reminder')" type='warn'/>         
            </r-card>
            <div class="button_vertical-align">
               <r-button type="default" :mini="true" :onClick="resetClick">{{$t('auto2cCustomPlan.reset')}}</r-button>                        
            </div>
        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>
    </r-page>

</template>
<script>
import AutoAgent from '../../../../../components/AutoAgent';
import '../../../../../i18n/auto2cCustomPlan';
// import RowAndChecker from "../../components/RowAndChecker"
import config from '../../../../../config/config';
import {LoadingApi} from 'rainbow-mobile-core';
import {SubmissionStore, PolicyStore, SchemaUtil} from 'rainbow-foundation-sdk';
import {ObjectUtil} from 'rainbow-foundation-tools';

export default {
  components: {
    AutoAgent
    // RowAndChecker
  },
  data() {
    return {
        hoursFormat: config.DEFAULT_HOURS_FORMATER,
        config: config,
        row: 'row',
        padding: '0px',
        IsRealProposal: 'Y',
        submission: undefined,
        policyComp: undefined,
        policyComm: undefined,
        // allUsedCts: [],
        nonDeductibleCts: [],
        deductibleCtsCts: [],
        // IsNonDeductible: 'N',
        vehicleLossMianCode: undefined,
        thirdDutyMainCode: undefined,
        carRobberyMianCode: undefined,
        driverDutyMainCode: undefined,
        passengerDutyMainCode: undefined,
        glassCrushAdditionalCode: undefined,
        naturalLossAdditionalCode: undefined,
        carBodyScratchLossAdditionalCode: undefined,
        engineWadLossAdditionalCode: undefined,
        repairCompenstoryPaymentAdditionalCode: undefined,
        noFondThirdAdditionalCode: undefined,
        appointRepairShopAdditionalCode: undefined,
        // model: [{
        //     isNonDeductible: false
        // }],
        insured: '投保',
        notInsured: '不投保',
        // policyPlanList: [],
        isReminder: false,
        valueMap: ['N', 'Y']
    };
  },
  methods: {
    calculatePremium() {
        let isSubmit = false;
        _.each(this.deductibleCtsCts, (deductibleCtItem) => {
            if (deductibleCtItem['IsRealProposal'] == 'Y') {
                isSubmit = true;
            }
        });
        if (!isSubmit) {
            this.isReminder = true;
        } else {
            this.isReminder = false;
            // console.log(this.deductibleCtsCts);
            // const submission = SubmissionStore.getSubmission();
            // const submissionProductList = SubmissionStore.getPolicy(submission);
            // const policy = _.find(submissionProductList, (policyItem) => {
            //     return policyItem['ProductCode'] == 'DEA';
            // });

            let productId = this.policyComm['ProductId'];
            SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
                let param = this.getParams(schema);
                // let child = PolicyStore.getChild(param, policy);
                // if (child) {
                //     PolicyStore.deleteChild(child, policy);
                // }
                param['PlanCodes'] = [config['PRIVATE_PLAN_CODE']];
                PolicyStore.initPlan(param, this.policyComm).then((plans) => {
                    _.each(plans, (planItem) => {
                        let newCtList = [];
                        _.each(this.deductibleCtsCts, (ctItem) => {
                            if (ctItem['IsRealProposal'] == 'Y') {
                                const saveCtItem = ObjectUtil.clone(ctItem);
                                saveCtItem['IsRealProposal'] = undefined;
                                newCtList.push(saveCtItem);
                                if (ctItem['IsNonDeductible'] == 'Y') {
                                    let nonDeductibleCtItem = {};
                                    if (ctItem['ProductElementCode'] == config['VEHICLE_LOSS_MIANCODE']) {
                                        nonDeductibleCtItem = _.find(this.nonDeductibleCts, (item) => {
                                            return item['ProductElementCode'] == config['NONVEHICLE_LOSS_ADDITIONAL_CODE'];
                                        });
                                    } else if (ctItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE']) {
                                        nonDeductibleCtItem = _.find(this.nonDeductibleCts, (item) => {
                                            return item['ProductElementCode'] == config['NONTHIRD_DUTY_ADDITIONAL_CODE'];
                                        });
                                    } else if (ctItem['ProductElementCode'] == config['DRIVER_DUTY_MAINCODE']) {
                                        nonDeductibleCtItem = _.find(this.nonDeductibleCts, (item) => {
                                            return item['ProductElementCode'] == config['NONDRIVER_DUTY_ADDITIONAL_CODE'];
                                        });
                                    } else if (ctItem['ProductElementCode'] == config['PASSENGER_DUTY_MAINCODE']) {
                                        nonDeductibleCtItem = _.find(this.nonDeductibleCts, (item) => {
                                            return item['ProductElementCode'] == config['NONPASSENGER_DUTY_ADDITIONAL_CODE'];
                                        });
                                    }
                                    nonDeductibleCtItem['IsNonDeductible'] = 'Y';
                                    newCtList.push(nonDeductibleCtItem);
                                }
                            }
                        });
                        planItem['TempPolicyCoverageList'][0]['PolicyCoverageList'] = newCtList;
                        let policyPlanList = [];
                        policyPlanList.push(planItem);
                        this.policyComm['PolicyLobList'][0]['PolicyRiskList'][0]['PolicyPlanList'] = policyPlanList;
                    });
                    SubmissionStore.setSubmission(this.submission);
                    // console.log(this.submission);

                    // this.setState({submission: this.submission});
                    sessionStorage.setItem('PLAN_FLAG', JSON.stringify(config['CUSTOMER_PLAN_FLAG']));
                    this.$router.push({
                        path: '/bind/auto2c',
                        query: this.$route.query
                    });
                });
            });
        }
    },
    async resetClick() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        const submission = SubmissionStore.getSubmission();
        const submissionProductList = SubmissionStore.getPolicy(submission);
        const policyComm = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DEA';
        });
        let productId = policyComm['ProductId'];
        SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
            let param = this.getParams(schema);
            // 定制方案code
            param['PlanCodes'] = [config['PRIVATE_PLAN_CODE']];
            let child = PolicyStore.getChild(param, policyComm);
            if (child && child['PlanCode'] == config['PRIVATE_PLAN_CODE']) {
                PolicyStore.deleteChild(child, policyComm);
            }
            LoadingApi.hide(this);
            this.$router.go(-1);
        });
    },
    onChange() {

    },
    IsNonDeductibleOnChange(index) {
        // console.log(index);
    },
    gotoVL() {
        sessionStorage.setItem('Policy_Coverage_Item', JSON.stringify(this.deductibleCtsCts));
        this.$router.push({
            path: '/project/proposal/auto2e/VehicleLoss/',
            query: this.$route.query
        });
    },
    gotoThirdDuty() {
        sessionStorage.setItem('Policy_Coverage_Item', JSON.stringify(this.deductibleCtsCts));
        this.$router.push({
            path: '/project/proposal/auto2e/ThirdDutyMian',
            query: this.$route.query
        });
    },
    gotoDriverDuty() {
        sessionStorage.setItem('Policy_Coverage_Item', JSON.stringify(this.deductibleCtsCts));
        this.$router.push({
            path: '/project/proposal/auto2e/DriverDutyMian',
            query: this.$route.query
        });
    },
    gotoPassengerDuty() {
        sessionStorage.setItem('Policy_Coverage_Item', JSON.stringify(this.deductibleCtsCts));
        this.$router.push({
            path: '/project/proposal/auto2e/passengerDutyMian',
            query: this.$route.query
        });
    },
    goto(code) {
        switch (code) {
            case config['VEHICLE_LOSS_MIANCODE']:
            this.$router.push({
                path: '/project/proposal/auto2e/VehicleLoss',
                query: this.$route.query,
                params: {
                    model: this.vehicleLossMianCode
                }
            });
            break;
            case config['THIRD_DUTY_MAINCODE']:
                this.$router.push({
                    path: '/project/proposal/auto2e/ThirdDutyMian',
                    query: this.$route.query
                });
            break;
            case config['DRIVER_DUTY_MAINCODE']:
                this.$router.push({
                    path: '/project/proposal/auto2e/DriverDutyMian',
                    query: this.$route.query
                });
            break;
            case config['PASSENGER_DUTY_MAINCODE']:
                this.$router.push({
                    path: '/project/proposal/auto2e/passengerDutyMian',
                    query: this.$route.query
                });
            break;
            default:
        }
    },
    // initPlan,init是全量CT,删除多余的CT
    initPlan(param, policy) {
        PolicyStore.initPlan(param, policy).then((plans) => {
            _.each(plans, (planItem) => {
                // this.policyPlanList = planItem;
                // const allUsedCts = [];
                const nonDeductibleCts = [];
                const deductibleCtsCts = [];
                const PolicyCoverageList = planItem.TempPolicyCoverageList[0].PolicyCoverageList;
                // 有session说明从险别页面过来的
                const sessionCtList = sessionStorage.getItem('Policy_Coverage_Item') ? JSON.parse(sessionStorage.getItem('Policy_Coverage_Item')) : undefined;
                // console.log(sessionCtList);
                // 先存储已有ct数据
                const child = PolicyStore.getChild(param, policy);
                _.each(PolicyCoverageList, (initCtItem) => {
                    // 有session数据说明操作险别页面存储数据
                    if (sessionCtList && sessionCtList.length > 0) {
                        _.each(sessionCtList, (sessionCtItem) => {
                            if (initCtItem['ProductElementCode'] == sessionCtItem['ProductElementCode']) {
                                initCtItem = sessionCtItem;
                            }
                        });
                    } else if (child && child['PlanCode'] == config['PRIVATE_PLAN_CODE']) {
                        const oldPolicyCoverageList = child.TempPolicyCoverageList[0].PolicyCoverageList;
                        _.each(oldPolicyCoverageList, (oldPolicyCoverageItem) => {
                            if (oldPolicyCoverageItem['ProductElementCode'] == initCtItem['ProductElementCode']) {
                                initCtItem = oldPolicyCoverageItem;
                                initCtItem['IsRealProposal'] = 'Y';
                            }
                        });
                    }
                    // initCtItem['IsRealProposal'] = 'N';
                    switch (initCtItem['ProductElementCode']) {
                        case config['VEHICLE_LOSS_MIANCODE'] :
                             this.vehicleLossMianCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['THIRD_DUTY_MAINCODE'] :
                             this.thirdDutyMainCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['CAR_ROBBERY_MIANCODE'] :
                             this.carRobberyMianCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['DRIVER_DUTY_MAINCODE'] :
                             this.driverDutyMainCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['PASSENGER_DUTY_MAINCODE'] :
                             this.passengerDutyMainCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['GLASS_CRUSH_ADDITIONAL_CODE'] :
                             this.glassCrushAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['NATURAL_LOSS_ADDITIONAL_CODE'] :
                             this.naturalLossAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['CAR_BODY_SCRATCH_LOSS_ADDITIONAL_CODE'] :
                             this.carBodyScratchLossAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['ENGINE_WAD_LOSS_ADDITIONAL_CODE'] :
                             this.engineWadLossAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['REPAIR_COMPENSTORY_PAYMENT_ADDITIONAL_CODE'] :
                             this.repairCompenstoryPaymentAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['NOFOND_THIRD_ADDITIONAL_CODE'] :
                             this.noFondThirdAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['APPOINT_REPAIRSHOP_ADDITIONAL_CODE'] :
                             this.appointRepairShopAdditionalCode = initCtItem;
                             deductibleCtsCts.push(initCtItem);
                        break;
                        case config['NONVEHICLE_LOSS_ADDITIONAL_CODE'] :
                            nonDeductibleCts.push(initCtItem);
                        break;
                        case config['NONTHIRD_DUTY_ADDITIONAL_CODE'] :
                            nonDeductibleCts.push(initCtItem);
                        break;
                        case config['NONDRIVER_DUTY_ADDITIONAL_CODE'] :
                            nonDeductibleCts.push(initCtItem);
                        break;
                        case config['NONPASSENGER_DUTY_ADDITIONAL_CODE'] :
                            nonDeductibleCts.push(initCtItem);
                        break;
                    }
                    // if (initCtItem['ProductElementCode'] == config['VEHICLE_LOSS_MIANCODE'] ||
                    //    initCtItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE'] ||
                    //    initCtItem['ProductElementCode'] == config['CAR_ROBBERY_MIANCODE'] ||
                    //    initCtItem['ProductElementCode'] == config['DRIVER_DUTY_MAINCODE'] ||
                    //    initCtItem['ProductElementCode'] == config['PASSENGER_DUTY_MAINCODE'] ||
                    //    initCtItem['ProductElementCode'] == config['GLASS_CRUSH_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['NATURAL_LOSS_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['CAR_BODY_SCRATCH_LOSS_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['ENGINE_WAD_LOSS_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['REPAIR_COMPENSTORY_PAYMENT_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['NOFOND_THIRD_ADDITIONAL_CODE'] ||
                    //    initCtItem['ProductElementCode'] == config['APPOINT_REPAIRSHOP_ADDITIONAL_CODE']) {
                    //        allUsedCts.push(initCtItem);
                    //        deductibleCtsCts.push(initCtItem);
                    // } else if (initCtItem['ProductElementCode'] == config['NONVEHICLE_LOSS_ADDITIONAL_CODE'] ||
                    //         initCtItem['ProductElementCode'] == config['NONTHIRD_DUTY_ADDITIONAL_CODE'] ||
                    //         initCtItem['ProductElementCode'] == config['NONDRIVER_DUTY_ADDITIONAL_CODE'] ||
                    //         initCtItem['ProductElementCode'] == config['NONPASSENGER_DUTY_ADDITIONAL_CODE']
                    // ) {
                    //     allUsedCts.push(initCtItem);
                    //     nonDeductibleCts.push(initCtItem);
                    // }
                });
                // this.allUsedCts = allUsedCts;
                this.nonDeductibleCts = nonDeductibleCts;
                this.deductibleCtsCts = deductibleCtsCts;
            });
            // 清除缓存
            sessionStorage.removeItem('Policy_Coverage_Item');
            sessionStorage.removeItem('PLAN_FLAG');
        LoadingApi.hide(this);
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
    }
  },
  async created() {
      LoadingApi.show(this, {
          text: this.$t('common.processing')
      });
      const submissionStore = SubmissionStore.getSubmission();
      const submission = ObjectUtil.clone(submissionStore);
      this.submission = submission;
      this.IsRealProposal = submission['SubmissionProductList'][0]['IsRealProposal'];
    //   this.IsRealProposal = IsRealProposal;
      const policyComp = submission['SubmissionProductList'][0]['Policy'];
      this.policyComp = policyComp;
    //   this.policyComp = _.find(submissionProductList, (policyItem) => {
    //       return policyItem['ProductCode'] == 'DFA';
    //   });
      const policyComm = submission['SubmissionProductList'][1]['Policy'];
    //   const policyComm = _.find(submissionProductList, (policyItem) => {
    //       return policyItem['ProductCode'] == 'DEA';
    //   });
      this.policyComm = policyComm;
      let productId = policyComm['ProductId'];
      SchemaUtil.loadModelObjectSchema('Policy', 'Policy', productId, '-2').then((schema) => {
          let param = this.getParams(schema);
          // 定制方案code
          param['PlanCodes'] = [config['PRIVATE_PLAN_CODE']];
          this.initPlan(param, policyComm);
      });
  }
};
</script>

<style>
.button_vertical-align {
    margin-top: 10px;  
    text-align: center;
}
.margin_brage{
    margin-left: 15px;
    margin-right: 30px;
 }
.padding_brage{
    
    padding-right: 16px;
 }
    

</style>

