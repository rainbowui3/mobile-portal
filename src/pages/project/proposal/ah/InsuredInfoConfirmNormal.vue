<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card :title="$t('planSelection.term')">
        <insurance-duration-short-term :readonly="readonly" type="day" :model="policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </card>
      <card :title="$t('common.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:holderInfo="policy.holderInfo"></holder-info>
      </card>
      <card :title="$t('common.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" :readonly="true" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '本人'" v-bind:readonly="readonly" v-bind:insuredInfo="policy.insuredInfo"></insured-info>
      </card>
      <card :title="$t('common.subsidiaryInsured')"> 
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" :readonly="true" />
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToInsured'" :model="policy.dubsidiaryInsuranceInfo" value="relationToMainInsured" :readonly="true" />
        <subsidiary-insured-info v-if="policy.dubsidiaryInsuranceInfo.relationToHolder && policy.dubsidiaryInsuranceInfo.relationToHolder != '' && policy.dubsidiaryInsuranceInfo.relationToHolder != '本人'" v-bind:readonly="readonly" v-bind:dubsidiaryInsuranceInfo="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
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
import "../../../../i18n/planSelection";
import "../../../../i18n/input";
import "../../../../i18n/project";

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
      policyData: {
        effectiveDate: "",
        expireDate: ""
      },
      // ,
      // policy:localStorage.fetch()
      policy: {
        holderInfo: {
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        insuredInfo: {
          relationToHolder: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder: "10000",
          relationToMainInsured: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      },
      amount: "100",
      buttonName: "proposalConfirm.submitPay",
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
