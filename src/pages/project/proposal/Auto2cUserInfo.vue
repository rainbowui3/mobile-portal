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
                        <r-input :title="$t('productInfoEntryAutoC.carLicense')" :model="data" value="carLicense"></r-input>
                    </r-cell>
                    <r-cell :span="5">
                        <r-checker :model="data" value="" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></r-checker>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="data" value="name"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="data" value="certificateNo" :validator="validateNumInput" :novalidate="false"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="data" value="mobile" :isPhone="true" :novalidate="false"></r-input>   
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
      customer: {
          drivingCity: '上海',
          carLicense: '',
          newCar: false,
          name: '',
          certificateNo: '',
          mobile: ''
      }

    };
  },
  async mounted() {
        const urlObject = UrlUtil.parseURL(window.location.href);
        const param = { 'ProductCode': urlObject.params.productCode, 'ProductVersion': urlObject.params.productVersion };
        let product = await ProductStore.getProductByCodeVersion(param);
        this.productDes = product.ProductElementName;
        const submissionId = urlObject.params.submissionId;
        if (submissionId) {

        } else {
              const submission = await SubmissionStore.initSubmission(SubmissionStore.POLICY_PACKAGE);
              const policy = await PolicyStore.initPolicy({'productCode': urlObject.params.productCode, 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType});
              // init customer 4
              // this.customer = customer;
              // init risk
              // set policy
              // set policy
              SubmissionStore.setPolicy(policy, submission, true);
        }
  },
  methods: {
    async nextOnClick() {
        this.$router.push({
            path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
            query: this.$route.query
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

