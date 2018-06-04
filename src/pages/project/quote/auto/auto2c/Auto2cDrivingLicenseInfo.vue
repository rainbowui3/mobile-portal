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
                <r-input :title="$t('autoProposalInfoConfirm.vin')" :model="policyRisk" value="Vin" :required="true" :placeholder="$t('auto2cDrivingLicenseInfo.inputVin')" :validator="validateVinInput" :novalidate="false" />
                <r-input :title="$t('carInfo.engineNo')" :model="policyRisk" value="EngineNo" :required="true" :placeholder="$t('carInfo.inputEngineNo')" />
                <r-date-time :title="$t('auto2cDrivingLicenseInfo.registryDate')" :model="policyRisk" value="VehicleInitialRegDate" :required="true" />
                <r-selector :title="$t('auto2cDrivingLicenseInfo.carType')" :model="policyRisk" value="VehicleKindTcCode" :options="carTypeList" />
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
        { key: 'K31', value: '小型普通客车' }
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

       // 临时写死"Power": 96, "VehicleQuality": 1315, "VehicleCode": "DZAAND0085"
       this.policyRisk['Power'] = 96;
       this.policyRisk['VehicleQuality'] = 1315;
       this.policyRisk['VehicleCode'] = 'DZAAND0085';
       this.policyRisk['IndustryModelCode'] = 'BYQKBMUC0002';
       this.policyRisk['GasType'] = 'D1';
       this.policyRisk['AnnouncedModel'] = 'FV7142TXG';
       this.policyRisk['NewVehiclePurchasePrice'] = '126800';
       this.policyRisk['ApprovalSeatCount'] = 5;
       this.policyRisk['ApprovalQuality'] = 1000;
       this.policyRisk['CarName'] = '车款名称';
       this.policyRisk['LicenseType'] = '02';
       this.policyRisk['Displacement'] = '1.0';
       policyRiskComp['Power'] = this.policyRisk['Power'];
       policyRiskComp['VehicleQuality'] = this.policyRisk['VehicleQuality'];
       policyRiskComp['VehicleCode'] = this.policyRisk['VehicleCode'];
       policyRiskComp['IndustryModelCode'] = this.policyRisk['IndustryModelCode'];
       policyRiskComp['GasType'] = this.policyRisk['GasType'];
       policyRiskComp['AnnouncedModel'] = this.policyRisk['AnnouncedModel'];
       policyRiskComp['NewVehiclePurchasePrice'] = this.policyRisk['NewVehiclePurchasePrice'];
       policyRiskComp['ApprovalSeatCount'] = this.policyRisk['ApprovalSeatCount'];
       policyRiskComp['ApprovalQuality'] = this.policyRisk['ApprovalQuality'];
       policyRiskComp['CarName'] = this.policyRisk['CarName'];
       policyRiskComp['LicenseType'] = this.policyRisk['LicenseType'];
       policyRiskComp['Displacement'] = this.policyRisk['Displacement'];

       // 正常数据
       policyRiskComp['LicenseNo'] = this.policyRisk['LicenseNo'];
       policyRiskComp['Model'] = this.policyRisk['Model'];
       policyRiskComp['Vin'] = this.policyRisk['Vin'];
       policyRiskComp['EngineNo'] = this.policyRisk['EngineNo'];
       policyRiskComp['VehicleInitialRegDate'] = this.policyRisk['VehicleInitialRegDate'];
       policyRiskComp['LicenseType'] = this.policyRisk['LicenseType'];
       SubmissionStore.setSubmission(submission);
       this.$router.push({
           path: '/quote/plan',
           query: this.$route.query
       });
      },
        validateVinInput(value) {
            // debugger;
            var isValidateVin = Validate.CheckVinReg(value);
            return {
                valid: isValidateVin === true,
                msg: this.$t('auto2cDrivingLicenseInfo.validateVin')
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
