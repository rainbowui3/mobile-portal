<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card>
        <insurance-duration-short-term type="day" :model="policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </card>
      <card :title="$t('common.holder')">
        <holder-info :model="holderInfo" />
      </card>
      <card :title="$t('common.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="insuredInfo" value="relationToHolder" />
        <insured-info v-if="insuredInfo.relationToHolder && insuredInfo.relationToHolder != '' && insuredInfo.relationToHolder != '本人'" :model="insuredInfo" />
      </card>
      <card>
          <row :title="$t('insuredInfoEntryHealthSub.healthInfo')" :model="policy" :onClick="goto" :isLink="true"></row>
      </card>
      <card class="addInsured">
        <r-button type="primary" :onClick="clickHome">{{$t('common.addmore')}}</r-button>
      </card>
      <proposal-clause-confirm/>
    </r-body>
    <tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </tab-bar>
  </page>
</template>

<script>
import { Page, Card, TabBar, RButton, RBody,Row } from "rainbow-mobile-core";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import ProposalConfirm from "../../components/ProposalConfirm";
import ChooseRelationship from "../../components/ChooseRelationship";
import "../../../../i18n/project";
import "../../../../i18n/input";
import "../../../../i18n/planSelection";
import "../../../../i18n/insuredInfoEntryHealthSub";
export default {
  components: {
    Top,
    Card,
    Bottom,
    Page,
    HolderInfo,
    InsuranceDurationShortTerm,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirm,
    TabBar,
    RButton,
    RBody,
    ChooseRelationship,
    Row
  },
  data() {
    return {
      policy: {},
      holderInfo: {
        name: "王小明",
        certificateId: "10000",
        certificateNum: "65300119520705283x",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      insuredInfo: {
        relationToHolder: "本人",
        name: "王小明",
        certificateId: "10000",
        certificateNum: "65300119520705283x",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      dubsidiaryInsuranceInfo: {
        relationToHolder: "本人",
        relationToMainInsured: "本人",
        name: "王小明",
        certificateId: "10000",
        certificateNum: "65300119520705283x",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      amount: "100",
      buttonName: "proposalConfirm.immediatelyInsure",
      policyData: {
        // effectiveDate: "",
        // expireDate: ""
      },
      datas1: [
        {
          key: "1",
          value: "本人",
          active: true
          // onClick: this.onClickInsured
        },
        {
          key: "2",
          value: "配偶",
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: "3",
          value: "子女",
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: "4",
          value: "父母",
          active: false
          // onClick: this.onClickInsured
        }
      ]
    };
  },
  methods: {
    onClick: function() {
      this.$router.push({
          path:"/project/proposal/ah/InsuredInfoConfirmHealth",
          name:"InsuredInfoConfirmHealth",
          params:this.policy

      });
    },
    clickHome: function() {
      console.log("lalalalala");
    },
    goto(){
        
    }
  },
//   created: function() {
//     this.policy = JSON.parse(sessionStorage.getItem("POLICY"));
//     console.log("policy", this.policy);
//   },
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style>
.addInsured {
  margin-bottom: 5px;
}
</style>
