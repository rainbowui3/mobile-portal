<template>
    <r-page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <r-card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </r-card>
            <r-card>
                <r-row :title="$t('productInfoEntryAutoC.drivingCity')" :model="policy" value="drivingCity" :onClick="goto" :isLink="true" ></r-row>
                <r-cell :type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('productInfoEntryAutoC.carLicense')" :model="policy" value="carLicense"></r-input>
                    </r-cell>
                    <r-cell :span="5">
                        <r-checker :model="policy" value="" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></r-checker>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="policy" value="name"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="policy" value="certificateNo" :validator="validateNumInput" :novalidate="false"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="policy" value="mobile" :isPhone="true" :novalidate="false"></r-input>   
            </r-card>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('productInfoEntryAutoC.wantInsure')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import Jtgj from '../../../../assets/jtgj.jpg';
import ProductTop from '../../components/ProductTop';
import '../../../../i18n/Auto2cUserInfo';
import Validate from '../../utils/Valitate';
import {SubmissionStore} from 'rainbow-foundation-sdk';

export default {
  components: {
    ProductTop
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: '车险',
      row: 'row',
      submission: null,
      policy: {
          drivingCity: '上海',
          carLicense: '',
          newCar: false,
          name: '',
          certificateNo: '',
          mobile: ''
      }
    };
  },
  methods: {
    nextOnClick() {
        this.$router.push({
            path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
            name: 'Auto2cDrivingLicenseInfo'
        });
    },
    goto() {

    },
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      return {
        valid: isCertification === true,
        msg: this.$t('input.validate')
      };
    }

   },
   async created() {
      this.submission = await SubmissionStore.initSubmission(SubmissionStore.POLICY_PACKAGE);
   }

};
</script>

<style>

</style>

