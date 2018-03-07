<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
        <card :title="$t('投保人')">
          <holder-info v-bind:readonly="readonly" v-bind:holderInfo="policy.holderInfo"></holder-info>
        </card>
        <card :title="$t('被保险人')">
          <insured-info v-bind:readonly="readonly" v-bind:insuredInfo="policy.insuredInfo"></insured-info>

        </card>

        <card :title="$t('附属被保险人')">
          <subsidiary-insured-info v-bind:readonly="readonly" v-bind:dubsidiaryInsuranceInfo="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
        </card>
        <card class="addInsuredButton">
          <r-button type="primary" :onClick="clickHome">{{$t('添加更多被保险人')}}</r-button>
        </card>
        <proposal-clause-confirm/>
    </r-body>

    <tab-bar>
      <proposal-confirm-imme v-bind:linkInsuredConfirmUrl="linkInsuredConfirmUrl" :onClick="onClick"></proposal-confirm-imme>
    </tab-bar>
    
  </page>

</template>

<script>
import {
  Page,
  RBody,
  Card,
  RImage,
  RButton,
  Swiper,
  RSwitch,
  DateTime,
  Tab,
  RTable,
  List,
  Selector,
  TabBar,
  Cell
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalConfirmImme from "../../components/ProposalConfirmImme";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
// import localStorage from "../../../../sotre.js";

export default {
  components: {
    Page,
    Card,
    RButton,
    TabBar,
    Top,
    Bottom,
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalConfirmImme,
    ProposalClauseConfirm,
    RBody
  },
  methods: {
    clickHom() {}
  },
  data() {
    return {
      readonly: false,
      linkInsuredConfirmUrl: "/project/proposal/gi/InsuredInfoConfirmNormal",
      policy: {
        holderInfo: {
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        insuredInfo: {
          relationToHolder:"本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder:"10000",
          relationToMainInsured:"本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      }
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/gi/InsuredInfoConfirmNormal");
    },
    clickHome: function() {}
  }
  // ,
  // watch:{
  //     policy:{
  //         handler:function(policy){
  //             localStorage.save(policy)
  //         },
  //         deep:true
  //     }
  // },
  // mounted:function(){
  //     console.log(this.policy)
  // }
};
</script>
<style>
.addInsuredButton{
  margin-bottom: 5px;
}
</style>
