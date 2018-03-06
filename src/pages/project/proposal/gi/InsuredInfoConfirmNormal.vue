<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
        <insurance-duration-short-term :readonly="readonly" />
        <card :title="$t('投保人')">
          <holder-info v-bind:readonly="readonly" v-bind:holderInfo="policy.holderInfo"></holder-info>
        </card>
        <card :title="$t('被保险人')">
          <insured-info v-bind:readonly="readonly" v-bind:insuredInfo="policy.insuredInfo"></insured-info>
        </card>
        <card :title="$t('附属被保险人')">
          <subsidiary-insured-info v-bind:readonly="readonly" v-bind:dubsidiaryInsuranceInfo="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
        </card>
    </r-body>
    <tab-bar>
      <proposal-submit-pay :onClick="onClick"></proposal-submit-pay>
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
import ProposalSubmitPay from "../../components/ProposalSubmitPay";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
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
    ProposalSubmitPay,
    InsuranceDurationShortTerm,
    RBody
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
          relationToHolder: "本人",
          relationToMainInsured: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      }
    };
  }
};
</script>

<style>

</style>
