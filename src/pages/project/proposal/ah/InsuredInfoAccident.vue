<template>
    <page>
        <top :title="$t('project.accident')" :showBack="true" />
        <r-body>
            <card :title="$t('insuredInfoAccident.passengerInfo')">
                <holder-info :model="policy.passengerInfo" :required="required"/>
                <r-input :title="$t('insuredInfoAccident.trainNo')" :model="policy.passengerInfo" value="rainNo" />
                <r-input :title="$t('insuredInfoAccident.seatNo')" :model="policy.passengerInfo" value="seatNum" />
                <r-switch :title="$t('insuredInfoAccident.sameWithHolder')" :model="policy.passengerInfo" value="relationToHolder" :onClick="changeRelationToHolder"></r-switch>
            </card>
            <card :title="$t('common.holderInfo')">
                <holder-info :model="policy.holderInfo" :required="required"/>
            </card>

        </r-body>

        <tab-bar>
            <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
        </tab-bar>
    </page>

</template>

<script>
import {
  Page,
  RBody,
  TabBar,
  Card,
  RInput,
  RSwitch,
  Selector
} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import HolderInfo from "../../components/HolderInfo";
import "../../../../i18n/insuredInfoAccident";
import "../../../../i18n/input";
export default {
  components: {
    Page,
    Top,
    RBody,
    TabBar,
    Card,
    RInput,
    RSwitch,
    ProposalConfirm,
    HolderInfo
  },
  data() {
    return {
      policy:{},
      // holderInfo: {
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // insuredInfo: {
      //   relationToHolder: "1",
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // passengerInfo: {
      //   relationToHolder: true,
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   rainNo: "G203",
      //   seatNum: "12C",
      //   email: "wangxm@outlook.com"
      // },
      buttonName: "proposalConfirm.immediatelyInsure",
      amount: "100",
      required:true,
    };
  },
  watch: {
    'policy.passengerInfo': {
      handler() {
        if (this.policy.passengerInfo.relationToHolder) {
          this.policy.holderInfo.name = this.policy.passengerInfo.name;
          this.policy.holderInfo.certificateId = this.policy.passengerInfo.certificateId;
          this.policy.holderInfo.certificateNum = this.policy.passengerInfo.certificateNum;
          this.policy.holderInfo.birthdate = this.policy.passengerInfo.birthdate;
          this.policy.holderInfo.mobileNum = this.policy.passengerInfo.mobileNum;
          this.policy.holderInfo.email = this.policy.passengerInfo.email;
        }
      },
      deep: true
    }
  },
  methods: {
    changeRelationToHolder() {
      this.policy.passengerInfo.relationToHolder = !this.policy.passengerInfo
        .relationToHolder;
      if (this.policy.passengerInfo.relationToHolder) {
        this.policy.holderInfo.name = this.policy.passengerInfo.name;
        this.policy.holderInfo.certificateId = this.policy.passengerInfo.certificateId;
        this.policy.holderInfo.certificateNum = this.policy.passengerInfo.certificateNum;
        this.policy.holderInfo.birthdate = this.policy.passengerInfo.birthdate;
        this.policy.holderInfo.mobileNum = this.policy.passengerInfo.mobileNum;
        this.policy.holderInfo.email = this.policy.passengerInfo.email;
      } else {
        this.policy.holderInfo = {   
        name:"",
        certificateId:"",
        certificateNum:"",
        birthdate:"",
        mobileNum:"",
        email:""
        };
      }
    },
    onClick: function() {    
      sessionStorage.setItem("policy",JSON.stringify(this.policy));
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      if(route && route.route3 && route.route3 != ''){
        this.$router.push({
          path:'/proposal/ah/AHRouterConfirm/'+this.$route.params.productCode + '/'+this.$route.params.agentCode+'/'+route.route3
        });
      }
      // this.$router.push({
      //   path:"/project/proposal/ah/InsuredInfoConfirmAccident",
      //   name:"InsuredInfoConfirmAccident",
      //   // params:{relationToHolder:this.passengerInfo.relationToHolder}
      // });
    }
  },
  created: function() {
    this.policy  = JSON.parse(sessionStorage.getItem("policy"));
    this.policy.passengerInfo = {relationToHolder:true};
    this.policy.holderInfo={
        name:"",
        certificateId:"",
        certificateNum:"",
        birthdate:"",
        mobileNum:"",
        email:""
    }
  }
};
</script>


<style>

</style>

