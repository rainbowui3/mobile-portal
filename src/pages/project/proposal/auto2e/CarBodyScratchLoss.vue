<template>
    <page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>
                <selector :title="$t('autoPlan.sumInsured')" :options="options" :model="policy" value="sumInsured"></selector>
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
  TabBar,
  RButton,
  Selector
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/autoPlan";

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RSwitch,
    TabBar,
    RButton,
    Selector
  },
  data() {
    return {
      options:[{"key":"20001","value":"10万"},{"key":"20002","value":"20万"}],
      policy: {
        sumInsured:"20001",
        sdew:true
      }
    };
  },
  methods: {
    confirm(){      
        // this.$router.push("/project/proposal/auto2e/AutoPremiumInfo");
        // this.$router.push("");
    },
  }
};
</script>

<style>

</style>

