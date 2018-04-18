<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
               <r-checker :max="1" :model="policy" value="value2" :data="options"  type="list"/>  
                <r-input  :title="$t('autoPlan.floatingRate')"  :model="policy" value="floatingRate" :isNumber="true" :novalidate="false"></r-input>
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
      options: [{'key': '20001', 'value': '国产'}, {'key': '20002', 'value': '进口'}],
      policy: {
        value2: '20001',
        floatingRate: ''
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

