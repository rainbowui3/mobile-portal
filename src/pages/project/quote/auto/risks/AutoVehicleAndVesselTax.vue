<template>
    <r-page>
        <top :title="$t('autoVehicleAndVesselTax.carShipTax')" :showBack="true" />
        <r-body>
            <r-card>
              <r-picker :title="$t('autoVehicleAndVesselTax.taxesSign')" :model="policy" value="taxesSign" :options="list1" ></r-picker>
              <r-date-time  :title="$t('autoVehicleAndVesselTax.lastTaxStart')" :model="policy" value="lastTaxStart" :format="formatDate"></r-date-time>
              <r-date-time  :title="$t('autoVehicleAndVesselTax.lastTaxYear')" :model="policy" value="lastTaxYear" :format="formatYear"></r-date-time>
              <r-date-time  :title="$t('autoVehicleAndVesselTax.lastFeeCalculate')" :model="policy" value="lastFeeCalculate" :format="formatDate"></r-date-time>
              <r-picker :title="$t('autoVehicleAndVesselTax.refuseCase')" :model="policy" value="refuseCase" :options="list1" ></r-picker>
              <r-input :title="$t('autoVehicleAndVesselTax.taxPayerNo')" :model="policy" value="taxPayerNo" ></r-input>            
            </r-card>
        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import '../../../../../i18n/autoVehicleAndVesselTax';
import config from '../../../../../config/config';
export default {
  data() {
    return {
      policy: {
        taxesSign: [],
        lastTaxStart: '',
        lastTaxYear: '',
        lastFeeCalculate: '',
        refuseCase: [],
        taxPayerNo: ''
      },
      formatDate: config.DEFAULT_DATE_FORMATER,
      formatYear: config.DEFAULT_YEAR_FORMATER,
      list1: [['拒绝原因1', '拒绝原因2', '拒绝原因3', '拒绝原因4']]
    };
  },
  methods: {
    calculatePremium() {
        this.$router.push('/project/proposal/payStatus');
        // this.$router.push("");
    },
    onChange() {

    },
    goto(event) {
      window.location.hash = '';
    }

  }
};
</script>

<style>

</style>

