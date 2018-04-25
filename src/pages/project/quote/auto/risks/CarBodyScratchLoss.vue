<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
                <r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>
                <r-selector :title="$t('autoPlan.sumInsured')" :options="options" :model="policy" value="sumInsured"></r-selector>
            </r-card>
        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="confirm">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>
    </r-page>

</template>
<script>
import '../../../../../i18n/autoPlan';

export default {
  data() {
    return {
      options: [{'key': '20001', 'value': '10万'}, {'key': '20002', 'value': '20万'}],
      policy: {
        sumInsured: '20001',
        sdew: true
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

