<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <insurance-duration-short-term/>
      <card :title="$t('投保人信息')">
        <holder-info :holderInfo="holderInfo" />
      </card>
      <card :title="$t('被保险人信息')">
        <insured-info :insuredInfo="insuredInfo" />
      </card>
      <card :title="$t('附属被保险人信息')">
        <subsidiary-insured-info :dubsidiaryInsuranceInfo="dubsidiaryInsuranceInfo" />
      </card>
      <card class="addInsured">
        <r-button type="primary" :onClick="clickHome">{{$t('添加更多被保险人')}}</r-button>
      </card>
      <proposal-clause-confirm/> 
    </r-body>
    <tab-bar>
      <proposal-confirm 
                :buttonName="buttonName"
                :amount="amount"
                :onClick="onClick"></proposal-confirm>
    </tab-bar>
  </page>
</template>

<script>
import { Page, Card, TabBar, RButton, RBody } from "rainbow-mobile-core";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import ProposalConfirm from "../../components/ProposalConfirm";
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
    RBody
  },
  data() {
    return {
      holderInfo: {
        name: "王小明",
        certificateId: "身份证",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      insuredInfo: {
        relationToHolder: "本人",
        name: "王小明",
        certificateId: "身份证",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      dubsidiaryInsuranceInfo: {
        relationToHolder: "10000",
        relationToMainInsured: "10000",
        name: "王小明",
        certificateId: "身份证",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      amount:"100",
      buttonName:"立即投保"
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/gi/InsuredInfoConfirmNormal");
    },
    clickHome: function() {
      console.log("lalalalala");
    }
  },
  created: function() {
    console.log("created");
  },
  beforeDestroy: function() {}
};
</script>

<style>
.addInsured{
  margin-bottom: 5px;
}
</style>
