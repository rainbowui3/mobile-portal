<template>
  <page>
      <top :title="$t('project.jtyw')" :showBack="true" />
      <r-body>     
          <card>
              <insurance-duration-short-term :readonly="readonly"  :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"/>
          </card>
          <card title="乘客信息">
              <holder-info :holderInfo="passengerInfo" :readonly="readonly"/>
              <r-input :title="$t('车次号')"  :model="passengerInfo" value="rainNo"  :readonly="readonly"/>           
              <r-input :title="$t('姓名:')"  :model="passengerInfo" value="seatNum"  :readonly="readonly"/>
              <r-switch  :title="$t('与投保人为同一人')"  :model="passengerInfo" value="relationToHolder" :disabled="readonly"></r-switch>      
          </card>
          <card title="投保人信息">
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
        InsuranceDurationShortTerm

    },
    data(){
        return{
                    holderInfo: {
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    insuredInfo: {
                    relationToHolder:"本人",
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    passengerInfo:{
                    relationToHolder:true,
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    rainNo: "G203",
                    seatNum: "12C",
                    email: "wangxm@outlook.com"

                },
                buttonName:"提交支付",
                amount:"100",
                readonly:true,
                policy: {
                    effectiveDate: "",
                    expireDate: ""
                }
                 
        };
    }
  
}
</script>


<style>

</style>

