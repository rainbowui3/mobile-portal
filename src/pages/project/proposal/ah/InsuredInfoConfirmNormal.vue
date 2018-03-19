<template>
  <page>
    <top :title="$t('common.autoPassengersInsurance')" :showBack="true" />
    <r-body>
      <insurance-duration-short-term :readonly="readonly" type="day" :model="policyData" effectiveDate="effectiveDate" expireDate="expireDate"/>
      <card :title="$t('common.holder')">
        <choose-relationship></choose-relationship>
        <holder-info v-bind:readonly="readonly" v-bind:holderInfo="policy.holderInfo"></holder-info>
      </card>
      <card :title="$t('common.insured')">
        <insured-info v-bind:readonly="readonly" v-bind:insuredInfo="policy.insuredInfo"></insured-info>
      </card>
      <card :title="$t('common.subsidiary')">
        <subsidiary-insured-info v-bind:readonly="readonly" v-bind:dubsidiaryInsuranceInfo="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
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
import ProposalConfirm from "../../components/ProposalConfirm";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import ChooseRelationship from "../../components/ChooseRelationship";
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
    ProposalConfirm,
    InsuranceDurationShortTerm,
    RBody,
    ChooseRelationship
  },
  methods: {
    clickHom() {},
    onClick: function() {
      this.$router.push("/project/proposal/payStatus");
    }
  },
  data() {
    return {
      readonly: true,
      // ,
      // policy:localStorage.fetch()
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
          relationToMainInsured: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      },
      amount: "100",
      buttonName: "提交支付"
    };
  },
  created: function() {
    this.policy.dubsidiaryInsuranceInfo.relationToHolder = sessionStorage.getItem(
      "dubsidiaryInsuranceInfo-relationToHolder"
    );
    sessionStorage.removeItem("dubsidiaryInsuranceInfo-relationToHolder");
  }
};
</script>

<style>

</style>
