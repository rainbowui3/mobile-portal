<template>
    <r-page>
        <top :showBack="true" :title="$t('auto2cDrivingLicenseInfo.title')" />
        <r-body>
            <r-card v-if="policyRisk">
                <!--<r-input v-if="!policyRisk.IsNewVehicle || policyRisk.IsNewVehicle == 'N'" :title="$t('carInfo.licenseNo')" :model="policyRisk" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" :readonly="true"/>-->
                <r-cell type="row" v-if="!policyRisk.IsNewVehicle || policyRisk.IsNewVehicle == 'N'"> 
                    <r-cell :span="7">
                        <r-input :title="$t('carInfo.licenseNo')" :model="policyRisk" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" :readonly="true"/>
                    </r-cell>
                    <r-cell>
                        <r-button type="primary" class="fa fa-qrcode fa-2x">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('autoProposalInfoConfirm.model')" :model="policyRisk" value="Model" :required="true" :placeholder="$t('carInfo.inputModel')" />
                <r-input :title="$t('autoProposalInfoConfirm.vin')" :model="policyRisk" value="Vin" :required="true" :placeholder="$t('auto2cDrivingLicenseInfo.inputVin')" :validator="validateVinInput" :novalidate="false" />
                <r-input :title="$t('carInfo.engineNo')" :model="policyRisk" value="EngineNo" :required="true" :placeholder="$t('carInfo.inputEngineNo')" />
                <r-date-time :title="$t('auto2cDrivingLicenseInfo.registryDate')" :model="policyRisk" value="VehicleInitialRegDate" :required="true" :endDate="EffectiveDate"/>
                <!--<r-textarea v-if='policyRisk.RunArea == 1234' :title="$t('auto2cUserAddr.address')" :model="holderCustomer" value="auto2cDrivingLicenseInfo.licenseRegisteAddr" :required="true"/>-->
                <!--<r-selector :title="$t('auto2cDrivingLicenseInfo.carType')" :model="policyRisk" value="VehicleKindTcCode" :options="carTypeList" />-->
            </r-card>
            <!--<r-toast :model="this" value="toastShow" :text="$t('auto2cUserAddr.addressNotNull')" type='text'/>-->
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
import config from 'config';
import {DateUtil} from 'rainbow-foundation-tools';
const dayjs = require('dayjs');
export default {
  data() {
    return {
    //   carTypeList: [
    //     { key: 'K31', value: '小型普通客车' }
    //   ],
      policyRisk: undefined,
      EffectiveDate: undefined
    //   toastShow: false
    };
  },
  methods: {
      quotationClick() {
    //    if (this.policyRisk.RunArea == 1234) {
    //        this.toastShow = true;
    //    } else {
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
        this.policyRisk['Displacement'] = '1.0';
        if (this.policyRisk['IsNewVehicle'] == 'N') {
            this.policyRisk['LicenseType'] = '02';
            policyRiskComp['LicenseType'] = this.policyRisk['LicenseType'];
        } else {
            this.policyRisk['LicenseType'] = '';
            policyRiskComp['LicenseType'] = '';
        }
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
        policyRiskComp['Displacement'] = this.policyRisk['Displacement'];
        this.policyRisk['VehicleKindTcCode'] = 'K31';
        policyRiskComp['VehicleKindTcCode'] = 'K31';

        // 正常数据
        policyRiskComp['LicenseNo'] = this.policyRisk['LicenseNo'];
        policyRiskComp['Model'] = this.policyRisk['Model'];
        policyRiskComp['Vin'] = this.policyRisk['Vin'];
        policyRiskComp['EngineNo'] = this.policyRisk['EngineNo'];
        policyRiskComp['VehicleInitialRegDate'] = this.policyRisk['VehicleInitialRegDate'];
        policyRiskComp['LicenseType'] = this.policyRisk['LicenseType'];
        SubmissionStore.setSubmission(submission);
        this.$router.push({
            path: '/quote/autoModel',
            query: this.$route.query
        });
        //    this.$router.push({
        //        path: '/quote/plan',
        //        query: this.$route.query
        //    });
    //    }
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

       // 初登日期小于起保日期
       this.EffectiveDate = dayjs(DateUtil.subtract(policyComm['EffectiveDate'], 2, 'days')).format(config.DEFAULT_DATE_FORMATER);
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
