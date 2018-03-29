<template>
    <page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>
                <r-input  :title="$t('autoPlan.seatNo')"  :model="policy" value="seatNo" :isNumber="true" :novalidate="false"></r-input>
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="policy" value="sumInsured" :isNumber="true" :novalidate="false"></r-input>
                <r-input  :title="$t('autoPlan.singleSumInsured')"  :model="policy" value="singleSumInsured" :isNumber="true" :novalidate="false"></r-input>
                <r-switch  :title="$t('autoPlan.copilot')"  :model="policy" value="copilot" ></r-switch>
                <r-input  :title="$t('autoPlan.copilotSeats')"  :model="policy" value="copilotSeats" :isNumber="true" :novalidate="false"></r-input>
                <r-input  :title="$t('autoPlan.copilotSumInsured')"  :model="policy" value="copilotSumInsured" :isNumber="true" :novalidate="false"></r-input>       
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
    RButton,
    Selector
  },
  data() {
    return {
      options:[{"key":"20001","value":"10万"},{"key":"20002","value":"20万"}],
      policy: {
        sumInsured:"",
        sdew:true,
        seatNo:"4",
        singleSumInsured:"20001",
        copilot:false,
        copilotSeats:"",
        copilotSumInsured:""
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

