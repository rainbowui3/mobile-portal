<template>
    <page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <card>
                <!--<r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>-->
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="policy" value="sumInsured" :isNumber="true" :novalidate="false"></r-input>
                <selector :title="$t('autoPlan.franchise')" :options="options" :model="policy" value="franchise"></selector>
                <r-input  :title="$t('autoPlan.deductibles')"  :model="policy" value="deductibles" :isNumber="true" :novalidate="false" ></r-input>
                <r-input  :title="$t('autoPlan.benchRiskPremium')" :model="policy" value="benchRiskPremium" :isNumber="true" :novalidate="false"></r-input>             
            </card>
        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="confirm">{{$t('common.confirm')}}</r-button>          
        </tab-bar>
    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  RInput,
  TabBar,
  RButton,
  Selector
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import '../../../../i18n/autoPlan';

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RSwitch,
    RInput,
    TabBar,
    RButton,
    Selector
  },
  data() {
    return {
      options: [{'key': '20001', 'value': '10万'}, {'key': '20002', 'value': '20万'}],
      policy: {
        sumInsured: '',
        sdew: true,
        franchise: '20001',
        deductibles: '1.0',
        benchRiskPremium: ''
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

