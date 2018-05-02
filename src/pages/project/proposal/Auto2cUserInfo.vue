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
                        <r-checker :model="policyRisk" value="IsNewVehicle" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></r-checker>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="policyCustomerOwner" value="CustomerName"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="policyCustomerOwner" value="IdNo" :validator="validateNumInput" :novalidate="false"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="policyCustomerOwner" value="IndiMobile" :isPhone="true" :novalidate="false"></r-input>   
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
import Validate from '../utils/Valitate';
import {ProductStore, SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {UrlUtil} from 'rainbow-foundation-tools';
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
      drivingCity: '上海'
    };
  },
  async created() {
        const urlObject = UrlUtil.parseURL(window.location.href);
        const param = { 'ProductCode': urlObject.params.productCode, 'ProductVersion': urlObject.params.productVersion };
        let product = await ProductStore.getProductByCodeVersion(param);

        this.productDes = product.ProductElementName;
        const submission = SubmissionStore.getSubmission();

        const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
        if (submission) {
            const policy = SubmissionStore.getPolicy(submission);
            const policyCustomers = PolicyStore.getChild(policyCustomerParam, policy);
            this.policyCustomerOwner = _.find(policyCustomers, (customer) => {
                return customer['CustomerRoeCode'] == '3';
            });
            this.policyRisk = PolicyStore.getChild(policyRiskParam, policy);
        } else {
            const submission = await SubmissionStore.initSubmission(SubmissionStore.POLICY_PACKAGE);
            const policy = await PolicyStore.initPolicy({'productCode': urlObject.params.productCode, 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType});

            const policyCustomerOwner = PolicyStore.createChild(policyCustomerParam, policy);
            policyCustomerOwner['CustomerRoeCode'] = '3';
            this.policyCustomerOwner = policyCustomerOwner;
            const policyCustomerHolder = PolicyStore.createChild(policyCustomerParam, policy);
            policyCustomerHolder['CustomerRoleCode'] = '1';
            const policyCustomerInsured = PolicyStore.createChild(policyCustomerParam, policy);
            policyCustomerInsured['CustomerRoleCode'] = '2';
            const policyCustomerContact = PolicyStore.createChild(policyCustomerParam, policy);
            policyCustomerContact['CustomerRoleCode'] = '5';

            const policyLobParam = {'ModelName': 'PolicyLob', 'ObjectCode': 'DEA'};
            PolicyStore.createChild(policyLobParam, policy);

            const policyRisk = PolicyStore.createChild(policyRiskParam, policy);
            this.policyRisk = policyRisk;
            SubmissionStore.setPolicy(policy, submission, true);
        }
  },
  methods: {
    async nextOnClick() {
        const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        const submission = SubmissionStore.getSubmission();
        const policy = SubmissionStore.getPolicy(submission);
        const policyCustomers = PolicyStore.getChild(policyCustomerParam, policy);
        _.each(policyCustomers, (customer) => {
            if (customer['CustomerRoeCode'] != '3') {
                customer['CustomerName'] = this.policyCustomerOwner['CustomerName'];
                customer['IdNo'] = this.policyCustomerOwner['IdNo'];
                customer['IndiMobile'] = this.policyCustomerOwner['IndiMobile'];
            }
        });
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

