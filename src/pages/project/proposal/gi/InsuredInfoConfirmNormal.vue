<template>
   <page>
       <top :title="$t('project.jtyw')" :showBack="true" />
       <card :title="$t('投保人')">
           <holder-info 
              v-bind:readonly="readonly"
              v-bind:holderInfo="policy.holderInfo"
           ></holder-info>
       </card>
       <card :title="$t('被保险人')">
           <insured-info 
              v-bind:readonly="readonly"
              v-bind:insuredInfo="policy.insuredInfo"
               ></insured-info>

       </card>
       
       <card :title="$t('附属被保险人')">
           <subsidiary-insured-info 
              v-bind:readonly="readonly"
              v-bind:dubsidiaryInsuranceInfo="policy.dubsidiaryInsuranceInfo"
               ></subsidiary-insured-info>
       </card>
      
       <card>
            <r-button type="primary" :onClick="clickHome" >{{$t('添加更多被保险人')}}</r-button>
       </card>
       <tab-bar>
           <proposal-submit-pay></proposal-submit-pay>
       </tab-bar>

   </page>

  
</template>

<script>
import {Page,Card,RImage,RButton,Swiper,RSwitch,DateTime,Tab,RTable,List,Selector,TabBar,Cell} from 'rainbow-mobile-core';
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalSubmitPay from "../../components/ProposalSubmitPay";
// import localStorage from "../../../../sotre.js";

export default {
    components:{
        Page,
        Card,
        RButton,
        TabBar,
        Top,
        Bottom,
        HolderInfo,
        InsuredInfo,
        SubsidiaryInsuredInfo,
        ProposalSubmitPay
    },
    methods:{
        clickHom() {

        }
    },
    data() {
        return{
            readonly:true
            // ,
            // policy:localStorage.fetch()
        };
    }
  
}
</script>

<style>

</style>
