<template>
  <page>
      <top :title="$t('project.accident')" :showBack="true" />
      <r-body>     
          <card>
              <insurance-duration-short-term :readonly="readonly"  :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"/>
          </card>
          <card :title="$t('insuredInfoAccident.passengerInfo')">
              <holder-info :holderInfo="passengerInfo" :readonly="readonly"/>
              <r-input :title="$t('insuredInfoAccident.trainNo')"  :model="passengerInfo" value="rainNo"  :readonly="readonly"/>           
              <r-input :title="$t('insuredInfoAccident.seatNo')"  :model="passengerInfo" value="seatNum"  :readonly="readonly"/>
              <r-switch  :title="$t('insuredInfoAccident.sameWithHolder')"  :model="passengerInfo" value="relationToHolder" :disabled="readonly"></r-switch>      
          </card>
          <card :title="$t('common.holderInfo')">
              <holder-info :holderInfo="holderInfo" :readonly="readonly" />
          </card>    
          <proposal-clause-confirm/>

      </r-body>
      
      <tab-bar>
        <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
      </tab-bar>
      
  </page>
 
  
</template>

<script>
import {Page,RBody,TabBar,Card,RInput,RSwitch,Selector} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import "../../../../i18n/insuredInfoAccident";
import "../../../../i18n/input";

export default {
    components:{
        Page,
        Top,
        RBody,
        TabBar,
        Card,
        RInput,
        RSwitch,
        ProposalConfirm,
        HolderInfo,
        InsuranceDurationShortTerm,
        ProposalClauseConfirm

    },
    data(){
        return{
                    holderInfo: {
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "130903199503210324",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    insuredInfo: {
                    relationToHolder:"本人",
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "130903199503210324",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    passengerInfo:{
                    relationToHolder:true,
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "130903199503210324",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    rainNo: "G203",
                    seatNum: "12C",
                    email: "wangxm@outlook.com"

                },
                buttonName:"proposalConfirm.submitPay",
                amount:"100",
                readonly:true,
                policy: {
                    effectiveDate: "",
                    expireDate: ""
                }
                 
        };
    },
    methods:{         
        onClick: function() {
            this.$router.push("/project/proposal/payStatus");
        },
    }
  
}
</script>


<style>

</style>

