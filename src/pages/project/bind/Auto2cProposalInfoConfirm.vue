<template>
  <r-page>
    <top :showBack="true" :title="$t('autoProposalInfoConfirm.title')" />
    <r-body>
      <!-- 添加递送地址 -->
      <r-card>
        <div class="addressRow" v-on:click="addAddress">
          <!-- <r-row :model="pageModel" :title="$t('auto2cProposalInfoConfirm.addAdd')" :isLink="true" /> -->
          <span>{{$t('auto2cProposalInfoConfirm.addAdd')}}</span>
        </div>
      </r-card>
      <!-- 车辆信息 -->
      <r-card v-if="policyRisk">
        <r-row :model="pageModel" :title="$t('carInfo.carInfo')" class="cardTitle">
          <div>
            <span class="fa fa-edit" v-on:click="gotoCarInfo" />
          </div>
        </r-row>
        <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :model="policyRisk" value="LicenseNo" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.model')" :model="policyRisk" value="Model" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="policyRisk" value="VehicleCode" :readonly="true" />
        <r-input :title="$t('carInfo.engineNo')" :model="policyRisk" value="EngineNo" :readonly="true" />
        <r-date-time :title="$t('carInfo.regiDate')" :model="policyRisk" value="VehicleInitialRegDate" :readonly="true" />
      </r-card>
      <!-- 投保详情 -->
      <r-card>
        <r-row :model="pageModel" :title="$t('autoProposalInfoConfirm.proposalDetail')" class="cardTitle">
          <div>
            <span class="fa fa-edit" v-on:click="editDetail"/>
          </div>
        </r-row>
        <r-input :title="$t('auto2cProposalInfoConfirm.proposalRegion')" :model="this" value="Region" :readonly="true"/>
        <r-date-time v-if="policyComp" :title="$t('auto2cProposalInfoConfirm.commStart')" :model="policyComp" value="EffectiveDate" :format="hoursFormat" :readonly="true"></r-date-time>
        <r-date-time v-if="policyComm" :title="$t('auto2cProposalInfoConfirm.commStart')" :model="policyComm" value="EffectiveDate" :format="hoursFormat" :readonly="true"></r-date-time>
      </r-card>
      <r-card>
        <r-list v-if="policyComm && deductibleList && deductibleList.length > 0" :title="$t('auto2cProposalInfoConfirm.commericalInsurance')" :value="policyComm.DuePremium" :data="deductibleList" />
        <r-list v-if="nondeductibleList && nondeductibleList.length > 0" :data="nondeductibleList" />
        <r-input v-if="policyComp" :title="$t('auto2cProposalInfoConfirm.compulsoryInsurance')" :model="policyComp" value="DuePremium" :readonly="true" />
        <r-input v-if="vehicleTax" :title="$t('auto2cProposalInfoConfirm.carShipTax')" :model="vehicleTax" value="TotalTax" :readonly="true" />
        <r-input :title="$t('auto2cProposalInfoConfirm.sumPremium')" :model="this" value="sumPremium" :readonly="true" />
      </r-card>
      <!-- 条款确认 -->
      <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
      <!-- 未确认条款后弹出的提示框 -->
      <r-toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
    </r-body>
    <r-tab-bar>
      <r-button type="primary" :onClick="gotoPay">{{$t('auto2cProposalInfoConfirm.payNow')}}</r-button>
    </r-tab-bar>
  </r-page>
</template>

<script>
import '../../../i18n/auto2cProposalInfoConfirm';
import '../../../i18n/autoProposalInfoConfirm';
import '../../../i18n/carInfo';
import '../../../i18n/insuredInfoEntryPassenger';
import '../../../i18n/insuredInfoEntryHealthSub';
import ProposalClauseConfirm from '../../../components/ProposalClauseConfirm';
import {SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {LoadingApi} from 'rainbow-mobile-core';
import config from '../../../config/config';

export default {
  components: {
    ProposalClauseConfirm
  },
  data() {
    return {
      hoursFormat: config.DEFAULT_HOURS_FORMATER,
      Region: '上海',
      policyRisk: undefined,
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      vehicleTax: undefined,
      nondeductibleList: undefined,
      policyComp: undefined,
      sumPremium: undefined,
      policyComm: undefined,
      deductibleList: []
    };
  },
  methods: {
    addAddress: function() {
      this.$router.push({
        path: '/project/proposal/auto2c/Auto2cUserAddr',
        name: 'Auto2cUserAddr'
      });
    },
    gotoCarInfo: function() {
      let planFlag = JSON.parse(sessionStorage.getItem('PLAN_FLAG'));
      if (planFlag && planFlag == config['CUSTOMER_PLAN_FLAG']) {
        // debugger;
        this.$router.go(-3);
      } else {
        this.$router.go(-2);
      }
      // this.$router.push({
      //   path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
      //   name: 'Auto2cDrivingLicenseInfo'
      // });
    },
    editDetail() {
      this.$router.go(-1);
    },
    gotoPay() {
      if (this.pageModel.clauseConfirm) {
        this.$router.push({
          path: '/issue/auto2c',
          query: this.$route.query
        });
      } else {
        this.pageModel.toastShow = true;
      }
    }
  },
  async created() {
      LoadingApi.show(this, {
          text: this.$t('common.processing')
      });
      const submission = SubmissionStore.getSubmission();
      // console.log(submission);
      const submissionProductList = SubmissionStore.getPolicy(submission);
      const policyComm = _.find(submissionProductList, (policyItem) => {
          return policyItem['ProductCode'] == 'DEA';
      });
      this.policyComm = policyComm;
      const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
      const policyRisk = PolicyStore.getChild(policyRiskParam, policyComm);
      this.policyRisk = policyRisk;
      if (policyRisk['PolicyPlanList'] && policyRisk['PolicyPlanList'].length > 0) {
        const policyCoverageList = policyRisk['PolicyPlanList'][0]['TempPolicyCoverageList'][0]['PolicyCoverageList'];
        let nondeductiblePremium = 0;
        let deductibleList = [];
        _.each(policyCoverageList, (policyCoverageItem) => {
          let deductibleItem = {};
          if (policyCoverageItem['ProductElementCode'] == config['NONVEHICLE_LOSS_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONTHIRD_DUTY_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONDRIVER_DUTY_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONPASSENGER_DUTY_ADDITIONAL_CODE']) {
              nondeductiblePremium = nondeductiblePremium + policyCoverageItem['DuePremium'];
            } else {
              if (policyCoverageItem['SumInsured']) {
                  deductibleItem['label'] = `${policyCoverageItem['ProductElementCode']}(${policyCoverageItem['SumInsured']}${this.$t('auto2cProposalInfoConfirm.thousand')})`;
              } else {
                deductibleItem['label'] = policyCoverageItem['ProductElementCode'];
              }
              deductibleItem['value'] = policyCoverageItem['DuePremium'];
              deductibleList.push(deductibleItem);
            }
            // else if (policyCoverageItem['ProductElementCode'] == config['VEHICLE_LOSS_MIANCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['DRIVER_DUTY_MAINCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['PASSENGER_DUTY_MAINCODE']) {
            //     if (policyCoverageItem['SumInsured']) {
            //       deductibleItem['label'] = policyCoverageItem['ProductElementCode'] + '(' + policyCoverageItem['SumInsured'] + ')';
            //     } else {
            //       deductibleItem['label'] = policyCoverageItem['ProductElementCode'];
            //     }
            //   deductibleItem['value'] = policyCoverageItem['DuePremium'];
            //   deductibleList.push(deductibleItem);
            // }
        });
        this.deductibleList = deductibleList;
        if (nondeductiblePremium > 0) {
          let nondeductibleList = [];
          let nondeductibleItem = {};
          nondeductibleItem['label'] = '不计免赔特约险';
          nondeductibleItem['value'] = nondeductiblePremium;
          nondeductibleList.push(nondeductibleItem);
          this.nondeductibleList = nondeductibleList;
        }
      }
      // 算保费合计
      let sumPremium = 0;
      if (policyComm['DuePremium']) {
        sumPremium = sumPremium + policyComm['DuePremium'];
      }
      let policyComp = null;
      if (submission['SubmissionProductList'][0]['IsRealProposal'] == 'Y') {
        policyComp = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DFA';
        });
        this.policyComp = policyComp;
        if (policyComp['DuePremium']) {
          sumPremium = sumPremium + policyComp['DuePremium'];
        }
      }
      if (policyComp) {
        let param = {'ModelName': 'VehicleTax', 'ObjectCode': 'VehicleTax'};
        const vehicleTax = PolicyStore.getChild(param, policyComp);
        if (vehicleTax['DuePremium']) {
          sumPremium = sumPremium + vehicleTax['TotalTax'];
        }
        this.vehicleTax = vehicleTax;
      }
      this.sumPremium = sumPremium;
      LoadingApi.hide(this);
  }
};
</script>

<style>
.addressRow {
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.cardTitle {
  color: #999;
}
</style>
