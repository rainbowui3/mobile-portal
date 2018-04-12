<template>
  <page>
    <top :title="$t('common.autoPassengersInsurance')" :showBack="true" />
    <r-body>
      <card :title="$t('planSelection.term')">
        <insurance-duration-short-term type="day" :model="policy.policyData" expireDate="expireDate" effectiveDate="effectiveDate" />
      </card>
      <card :title="$t('common.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo"></holder-info>
      </card>
      <card :title="$t('insuredInfoEntryPassenger.carInfo')">
        <r-input :title="$t('insuredInfoEntryPassenger.model')" :required="true" :model="policy.carInfo" value="carModel" :onChange="getCarModel" :readonly="readonly" />
        <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :required="true" :model="policy.carInfo" value="licenseNo" :onChangle="getCarModel" :readonly="readonly" />
        <r-input :title="$t('insuredInfoEntryPassenger.engineNo')" :required="true" :model="policy.carInfo" value="engineNo" :onChange="getCarModel" :readonly="readonly" />
        <r-input :title="$t('insuredInfoEntryPassenger.vin')" :required="true" :model="policy.carInfo" value="vin" :onChange="getCarModel" :readonly="readonly" />
        <r-input :title="$t('insuredInfoEntryPassenger.approvalSeatNum')" :required="true" :model="policy.carInfo" value="approvalSeatCount" :onChange="getCarModel" :readonly="readonly" />
        <r-input :title="$t('insuredInfoEntryPassenger.carOwner')" :required="true" :model="policy.carInfo" value="drivingLicenseOwner" :onChange="getCarModel" :readonly="readonly" />
        <selector :title="$t('insuredInfoEntryPassenger.carUsage')" :options="options" :model="policy.carInfo" value="vehicleUseNatureCode" :onChange="getVehicleUseNatureCode" :readonly="readonly"></selector>
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
  Card,
  RInput,
  Selector,
  TabBar,
  Toast
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import HolderInfo from "../../components/HolderInfo";
import ProposalConfirm from "../../components/ProposalConfirm";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import "../../../../i18n/insuredInfoEntryPassenger";
import "../../../../i18n/planSelection";
import "../../../../i18n/insuredInfoEntryHealthSub";
export default {
  components: {
    Page,
    InsuranceDurationShortTerm,
    RBody,
    Top,
    Card,
    HolderInfo,
    RInput,
    Selector,
    TabBar,
    ProposalConfirm,
    ProposalClauseConfirm,
    Toast
  },
  props: {},
  data() {
    return {
      readonly: true,
      policy: {
        // effectiveDate: "",
        // expireDate: "",
        // holderInfo: {},
        // carInfo: {}
      },
      options: [{ key: "1", value: "家庭自用" }],
      buttonName: "proposalConfirm.submitPay",
      amount: "100",
      readonly: true,
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      }
    };
  }, 
  created: function() {
    this.policy  = JSON.parse(sessionStorage.getItem("policy"));
  },
  mounted: function() {},
  methods: {
    getCarModel: function() {
      console.log("getCarModel");
    },
    getVehicleUseNatureCode: function() {
      console.log("getVehicleUseNatureCode");
    },
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.removeItem("policy");
        this.$router.push({
          path: "/project/proposal/payStatus",
          name: "PayStatus",
          params: [
            {
              name: "test",
              dataObj: this.policy
            },
            {
              name: "test2",
              dataObj: this.policy
            }
          ]
        });
      } else {
        this.pageModel.toastShow = true;
      }
    }
  },
  watch: {
    "pageModel.clauseConfirm": {
      handler: function() {
        console.log(this.pageModel.clauseConfirm);
      }
    }
  }
};
</script>

<style>

</style>
