<template>
    <r-page>
        <top :showBack="true" :title="$t('auto2cDrivingLicenseInfo.title')" />
        <r-body>
            <r-card v-if="policyRisk">
                <r-input v-if="!policyRisk.IsNewVehicle || policyRisk.IsNewVehicle == 'N'" :title="$t('carInfo.licenseNo')" :model="policyRisk" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" :readonly="true"/>
                <!--<r-cell type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('carInfo.licenseNo')" :model="policyRisk" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" />
                    </r-cell>
                    <r-cell>
                        <r-button type="primary" class="fa fa-qrcode fa-2x">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button>
                    </r-cell>
                </r-cell>-->
                <r-input :title="$t('autoProposalInfoConfirm.model')" :model="policyRisk" value="Model" :required="true" :placeholder="$t('carInfo.inputModel')" />
                <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="policyRisk" value="Vin" :required="true" :placeholder="$t('auto2cDrivingLicenseInfo.inputVehicleCode')" :validator="validateVinInput" :novalidate="false" />
                <r-input :title="$t('carInfo.engineNo')" :model="policyRisk" value="EngineNo" :required="true" :placeholder="$t('carInfo.inputEngineNo')" />
                <r-date-time :title="$t('auto2cDrivingLicenseInfo.registryDate')" :model="policyRisk" value="VehicleInitialRegDate" :required="true" />
                <r-selector :title="$t('auto2cDrivingLicenseInfo.carType')" :model="policyRisk" value="VehicelType" :options="carTypeList" />
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="quotationClick">{{$t('auto2cDrivingLicenseInfo.quotationNow')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../../i18n/auto2cDrivingLicenseInfo';
import '../../../../../i18n/carInfo';
import '../../../../../i18n/autoProposalInfoConfirm';
import {SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {LoadingApi} from 'rainbow-mobile-core';
import Validate from '../../../../../components/utils/Valitate';
export default {
  data() {
    return {
      carTypeList: [
        { key: '1', value: '小型汽车' },
        { key: '2', value: '大型汽车' },
        { key: '3', value: '专用汽车' }
      ],
      policyRisk: undefined
    };
  },
  methods: {
      quotationClick() {
       const submission = SubmissionStore.getSubmission();
       const submissionProductList = SubmissionStore.getPolicy(submission);
       const policyComp = _.find(submissionProductList, (policyItem) => {
           return policyItem['ProductCode'] == 'DFA';
       });
       const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
       const policyRiskComp = PolicyStore.getChild(policyRiskParam, policyComp);
       policyRiskComp['LicenseNo'] = this.policyRisk['LicenseNo'];
       policyRiskComp['Model'] = this.policyRisk['Model'];
       policyRiskComp['VehicleCode'] = this.policyRisk['VehicleCode'];
       policyRiskComp['EngineNo'] = this.policyRisk['EngineNo'];
       policyRiskComp['VehicleInitialRegDate'] = this.policyRisk['VehicleInitialRegDate'];
       policyRiskComp['LicenseType'] = this.policyRisk['LicenseType'];
       SubmissionStore.setSubmission(submission);
          this.$router.push({
             path: '/project/proposal/auto2c/Auto2cPlan',
             query: this.$route.query
          });
      },
        validateVinInput(value) {
            // debugger;
            var isValidateVin = Validate.CheckVinReg(value);
            return {
                valid: isValidateVin === true,
                msg: this.$t('auto2cDrivingLicenseInfo.validateVehicleCode')
            };
        }
  },
   async created() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
       const submission = SubmissionStore.getSubmission();
       const submissionProductList = SubmissionStore.getPolicy(submission);
       const policyComm = _.find(submissionProductList, (policyItem) => {
           return policyItem['ProductCode'] == 'DEA';
       });
       const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
       this.policyRisk = PolicyStore.getChild(policyRiskParam, policyComm);
       LoadingApi.hide(this);
   },
  watch: {
    'policyRisk.EngineNo': {
      handler: function(value) {
        //   debugger;
        if (value) {
          this.policyRisk.EngineNo = value.toUpperCase();
        }
      },
      deep: true
    },
    'policyRisk.Vin': {
      handler: function(value) {
        //   debugger;
        if (value) {
          this.policyRisk.Vin = value.toUpperCase();
        }
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
