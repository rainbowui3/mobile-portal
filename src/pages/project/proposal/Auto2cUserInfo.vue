<template>
    <r-page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <r-card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </r-card>
            <r-card>
                <r-row :title="$t('productInfoEntryAutoC.drivingCity')" :model="data" value="drivingCity" :isLink="true" ></r-row>
                <r-cell :type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('productInfoEntryAutoC.carLicense')" :model="policyRisk" value="LicenseNo"></r-input>
                    </r-cell>
                    <r-cell :span="5">
                        <r-checker :model="policyRisk" value="IsNewVehicle" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></r-checker>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="policyCustomer" value="CustomerName"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="policyCustomer" value="IdNo" :validator="validateNumInput" :novalidate="false"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="policyCustomer" value="IndiMobile" :isPhone="true" :novalidate="false"></r-input>   
            </r-card>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('productInfoEntryAutoC.wantInsure')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import Jtgj from '../../../assets/jtgj.jpg';
import ProductTop from '../components/ProductTop';
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
      policyCustomer: {},
      policyRisk: {},
      data: {
          drivingCity: '上海'
      },
      submissionId: '11'

    };
  },
  async mounted() {
        const urlObject = UrlUtil.parseURL(window.location.href);
        const param = { 'ProductCode': urlObject.params.productCode, 'ProductVersion': urlObject.params.productVersion };
        let product = await ProductStore.getProductByCodeVersion(param);
        this.productDes = product.ProductElementName;
        const submission = SubmissionStore.getSubmission('NoSubmissionId');
        const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        const policyRiskParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
        if (submission) {
            const policy = SubmissionStore.getPolicy(submission);
            const policyCustomers = PolicyStore.getChild(policyCustomerParam, policy);
            this.policyCustomer = _.find(policyCustomers, (customer) => {
                return customer['CustomerRoeCode'] == 0;
            });
            this.policyRisk = PolicyStore.getChild(policyRiskParam, policy);
        } else {
            const submission = await SubmissionStore.initSubmission(SubmissionStore.POLICY_PACKAGE);
            const policy = await PolicyStore.initPolicy({'productCode': urlObject.params.productCode, 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType});
            const policyCustomer = PolicyStore.createChild(policyCustomerParam, policy);
            policyCustomer['CustomerRoeCode'] = 0;
            this.policyCustomer = policyCustomer;
            PolicyStore.createChild(policyCustomerParam, policy);
            PolicyStore.createChild(policyCustomerParam, policy);
            PolicyStore.createChild(policyCustomerParam, policy);
            const policyRisk = PolicyStore.createChild(policyRiskParam, policy);
            this.policyRisk = policyRisk;
            SubmissionStore.setPolicy(policy, submission, true);
        }
  },
  methods: {
    async nextOnClick() {
        this.$router.push({
            path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
            query: this.$route.query
            //  {
            //     productCode: this.$route.query.productCode,
            //     productVersion: this.$route.query.productVersion,
            //     submissionId: this.submissionId
            // }
        });
    },
    buildCustomer(policy) {
            // initChlid
            const param = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
            const policyCustomer = PolicyStore.initChild(param, policy);
            PolicyStore.setChild(policyCustomer, policy, param);
    },
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      return {
        valid: isCertification === true,
        msg: this.$t('input.validate')
      };
    }

   }

};
</script>

<style>

</style>

