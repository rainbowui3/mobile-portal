<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
                 <r-input  :title="$t('autoPlan.dayPay')"  :model="policy" value="dayPay" :isNumber="true" :novalidate="false"></r-input>
                <r-input  :title="$t('autoPlan.dayNo')"  :model="policy" value="dayNo" :isNumber="true" :novalidate="false"></r-input>
            </r-card>
        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="confirm">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>
    </r-page>

</template>
<script>
import '../../../../i18n/autoPlan';

export default {
  data() {
    return {
      policy: {
        dayNo: '',
        dayPay: ''
      }
    };
  },
  methods: {
    confirm() {
        // this.$router.push("/project/proposal/auto2e/AutoPremiumInfo");
        // this.$router.push("");
    }
  }
};
</script>

<style>

</style>

