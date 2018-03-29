<template>
    <page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>   
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
  RButton
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
    RInput,  
    TabBar,
    RButton
  },
  data() {
    return {
      policy: {
        sdew:true,
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

