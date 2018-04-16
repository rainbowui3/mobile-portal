<template>
  <page>
    <top :title="$t('project.accident')" :showBack="true" />
    <r-body>
      <card>
        <insurance-duration-short-term :readonlyEx="readonly" :readonlyEf="readonly" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </card>
      <card :title="$t('insuredInfoAccident.passengerInfo')">
        <holder-info :model="policy.passengerInfo" :readonly="readonly" />
        <r-input :title="$t('insuredInfoAccident.trainNo')" :model="policy.passengerInfo" value="rainNo" :readonly="readonly" />
        <r-input :title="$t('insuredInfoAccident.seatNo')" :model="policy.passengerInfo" value="seatNum" :readonly="readonly" />
        <r-switch :title="$t('insuredInfoAccident.sameWithHolder')" :model="policy.passengerInfo" value="relationToHolder" :disabled="readonly"></r-switch>
      </card>
      <card v-if="!this.policy.passengerInfo.relationToHolder" :title="$t('common.holderInfo')">
        <holder-info :model="policy.holderInfo" :readonly="readonly" />
      </card>
      <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
      <!-- 未确认条款后弹出的提示框 -->
      <toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
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
  Selector,
  Toast
} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import "../../../../i18n/insuredInfoAccident";
import "../../../../i18n/input";
import "../../../../i18n/insuredInfoEntryHealthSub";

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
    HolderInfo,
    InsuranceDurationShortTerm,
    ProposalClauseConfirm,
    Toast
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      // holderInfo: {
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "130903199503210324",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // insuredInfo: {
      //   relationToHolder: "1",
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "130903199503210324",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // passengerInfo: {
      //   relationToHolder: true,
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "130903199503210324",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   rainNo: "G203",
      //   seatNum: "12C",
      //   email: "wangxm@outlook.com"
      // },
      buttonName: "proposalConfirm.submitPay",
      amount: "100",
      readonly: true,
      policy: {
        // effectiveDate: "",
        // expireDate: ""
      }
    };
  },
  methods: {
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.removeItem("policy");
        let route = JSON.parse(sessionStorage.getItem("ROUTE_TYPE"));
        if (route && route.route4 && route.route4 != "") {
          this.$router.push({
            path:
              "/proposal/ah/AHRouterPay/" +
              this.$route.params.productCode +
              "/" +
              this.$route.params.agentCode +
              "/" +
              route.route4
          });
        }
        // this.$router.push("/project/proposal/payStatus");
      } else {
        this.pageModel.toastShow = true;
      }
    }
  },
  watch: {
    "pageModel.clauseConfirm": {
      handler: function() {}
    }
  },
  // mounted: function() {
  //   if (this.$route.params && this.$route.params.relationToHolder) {
  //     this.passengerInfo.relationToHolder = this.$route.params.relationToHolder;
  //   }
  // },
  created: function() {
    this.policy = JSON.parse(sessionStorage.getItem("policy"));
  }
};
</script>


<style>

</style>

