<template>
    <r-page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <r-card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </r-card>
            <r-card>
                <r-row :title="$t('productInfoEntryAutoC.drivingCity')" :model="this" value="drivingCity" :isLink="true" ></r-row>
                <r-cell :type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('productInfoEntryAutoC.carLicense')" :model="policyRisk" value="LicenseNo"></r-input>
                    </r-cell>
                    <r-cell :span="5">
                        <r-checker :model="this" value="IsNewVehicle" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></r-checker>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="policyCustomerOwner" value="CustomerName" :required="true"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="policyCustomerOwner" value="IdNo" :validator="validateNumInput" :novalidate="false" :required="true"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="policyCustomerOwner" value="IndiMobile" :isPhone="true" :novalidate="false" :required="true"></r-input>   
            </r-card>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('productInfoEntryAutoC.wantInsure')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import Jtgj from '../../../assets/jtgj.jpg';
import ProductTop from '../../../components/ProductTop';
import '../../../i18n/Auto2cUserInfo';
import Validate from '../../../components/utils/Valitate';
import {ProductStore, SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {UrlUtil} from 'rainbow-foundation-tools';
import {LoadingApi} from 'rainbow-mobile-core';
export default {
  components: {
    ProductTop
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: '',
      row: 'row',
      policyCustomerOwner: {},
      policyRisk: {},
      IsNewVehicle: false,
      drivingCity: '上海'
    };
  },
  async created() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        const urlObject = UrlUtil.parseURL(window.location.href);
        const param = { 'ProductCode': urlObject.params.productCode, 'ProductVersion': urlObject.params.productVersion };
        let product = await ProductStore.getProductByCodeVersion(param);

        this.productDes = product.ProductElementName;
        const submission = SubmissionStore.getSubmission();

        const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
        if (submission) {
            const submissionProductList = SubmissionStore.getPolicy(submission);
            const policyComm = _.find(submissionProductList, (policyItem) => {
                return policyItem['ProductCode'] == 'DEA';
            });
            const policyCustomers = PolicyStore.getChild(policyCustomerParam, policyComm);
            this.policyCustomerOwner = _.find(policyCustomers, (customer) => {
                return customer['CustomerRoeCode'] == '3';
            });
            this.policyRisk = PolicyStore.getChild(policyRiskParam, policyComm);
        } else {
            const submission = await SubmissionStore.initSubmission(SubmissionStore.POLICY_PACKAGE);
            // 交强险initPolicy 目前交强险CODE写死啦
            const policyComp = await PolicyStore.initPolicy({'productCode': 'DFA', 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType});
            // 交强险policyCustomerList创建
            const policyCustomerOwnerComp = PolicyStore.createChild(policyCustomerParam, policyComp);
            policyCustomerOwnerComp['CustomerRoeCode'] = '3';
            const policyCustomerHolderComp = PolicyStore.createChild(policyCustomerParam, policyComp);
            policyCustomerHolderComp['CustomerRoleCode'] = '1';
            const policyCustomerInsuredComp = PolicyStore.createChild(policyCustomerParam, policyComp);
            policyCustomerInsuredComp['CustomerRoleCode'] = '2';
            const policyCustomerContactComp = PolicyStore.createChild(policyCustomerParam, policyComp);
            policyCustomerContactComp['CustomerRoleCode'] = '5';

            const policyLobParamComp = {'ModelName': 'PolicyLob', 'ObjectCode': 'DFA'};
            PolicyStore.createChild(policyLobParamComp, policyComp);
            PolicyStore.createChild(policyRiskParam, policyComp);
            PolicyStore.createChild({'ModelName': 'VehicleCheck', 'ObjectCode': 'VehicleCheck'}, policyComp);
            PolicyStore.createChild({'ModelName': 'PolicyForm', 'ObjectCode': 'POLICYFORM', 'ParentModelName': 'PolicyLob', 'ParentObjectCode': 'DFA'}, policyComp);
            SubmissionStore.setPolicy(policyComp, submission, false);

            // 商业险initPolicy
            const policyComm = await PolicyStore.initPolicy({'productCode': urlObject.params.productCode, 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType});
            // 商业险policyCustomerList创建
            const policyCustomerOwner = PolicyStore.createChild(policyCustomerParam, policyComm);
            policyCustomerOwner['CustomerRoeCode'] = '3';
            this.policyCustomerOwner = policyCustomerOwner;
            const policyCustomerHolder = PolicyStore.createChild(policyCustomerParam, policyComm);
            policyCustomerHolder['CustomerRoleCode'] = '1';
            const policyCustomerInsured = PolicyStore.createChild(policyCustomerParam, policyComm);
            policyCustomerInsured['CustomerRoleCode'] = '2';
            const policyCustomerContact = PolicyStore.createChild(policyCustomerParam, policyComm);
            policyCustomerContact['CustomerRoleCode'] = '5';

            const policyLobParam = {'ModelName': 'PolicyLob', 'ObjectCode': 'DEA'};
            PolicyStore.createChild(policyLobParam, policyComm);

            const policyRisk = PolicyStore.createChild(policyRiskParam, policyComm);
            this.policyRisk = policyRisk;
            SubmissionStore.setPolicy(policyComm, submission, true);
        }
        LoadingApi.hide(this);
  },
  methods: {
    async nextOnClick() {
        const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
        const submission = SubmissionStore.getSubmission();
        const submissionProductList = SubmissionStore.getPolicy(submission);
        const policyComm = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DEA';
        });
        const policyCustomers = PolicyStore.getChild(policyCustomerParam, policyComm);
        _.each(policyCustomers, (customer) => {
            if (customer['CustomerRoeCode'] != '3') {
                customer['CustomerName'] = this.policyCustomerOwner['CustomerName'];
                customer['IdNo'] = this.policyCustomerOwner['IdNo'];
                customer['IndiMobile'] = this.policyCustomerOwner['IndiMobile'];
            }
        });
        const policyRiskComm = PolicyStore.getChild(policyRiskParam, policyComm);
        if (this.IsNewVehicle) {
            policyRiskComm['IsNewVehicle'] = 'Y';
        } else {
            policyRiskComm['IsNewVehicle'] = 'N';
        }

        const policyComp = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DFA';
        });
        const policyCustomersComp = PolicyStore.getChild(policyCustomerParam, policyComp);
        _.each(policyCustomersComp, (customer) => {
            customer['CustomerName'] = this.policyCustomerOwner['CustomerName'];
            customer['IdNo'] = this.policyCustomerOwner['IdNo'];
            customer['IndiMobile'] = this.policyCustomerOwner['IndiMobile'];
        });
        const policyRiskComp = PolicyStore.getChild(policyRiskParam, policyComp);
        policyRiskComp['LicenseNo'] = policyRiskComm['LicenseNo'];
        policyRiskComp['IsNewVehicle'] = policyRiskComm['IsNewVehicle'];
        // console.log(submission);
        this.$router.push({
            path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
            query: this.$route.query
        });
    },
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      return {
        valid: isCertification === true,
        msg: this.$t('productInfoEntryAutoC.validateID')
      };
    }

   }

};
</script>

<style>

</style>

