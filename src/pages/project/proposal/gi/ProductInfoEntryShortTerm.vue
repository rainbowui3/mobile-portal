<template>
   <page>
       <top :title="$t('project.jtyw')" :showBack="true" />
       <r-body>
            <card>
                <product-top></product-top>
            </card>
            <card>
                <insurance-duration-shortTerm></insurance-duration-shortTerm>
            </card>
            <card>
                <plan-selection></plan-selection>
            </card>
            <card>
                <proposal-copies></proposal-copies>
            </card>
       </r-body>
       <tab-bar>
           <proposal-confirm v-bind:linkInsuredInfoUrl="linkInsuredInfoUrl" :onClick="onClick"></proposal-confirm>
       </tab-bar>

   </page>

  
</template>

<script>
import {Page,RBody,Card,RImage,RButton,Swiper,RSwitch,DateTime,Tab,SwiperItem,RTable,List,Selector,TabBar,Cell} from 'rainbow-mobile-core';
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import PlanSelection from "../../components/PlanSelection";
import ProposalCopies from "../../components/ProposalCopies";
import ProposalConfirm from "../../components/ProposalConfirm";
// import localStorage from "../../../../sotre.js";
// import policyJson from "../../../../policy.json";
export default {
    components:{
        Page,
        Card,
        TabBar,
        Top,
        Bottom,
        ProductTop,
        InsuranceDurationShortTerm,
        PlanSelection,
        ProposalCopies,
        ProposalConfirm,
        RBody
    },
    data() {
        return{
            linkInsuredInfoUrl:"/project/proposal/gi/insuredInfoEntryShortTerm"
            // policy:Json.stringify(policyJson)
            
        };
    },
    methods:{
        onClick:function(){
            this.$router.push("/project/proposal/gi/insuredInfoEntryShortTerm");
        }
    }
    // ,
    // mounted:function(){

    //     console.log(this.policy)
    // }
  
}
</script>

<style>

</style>
