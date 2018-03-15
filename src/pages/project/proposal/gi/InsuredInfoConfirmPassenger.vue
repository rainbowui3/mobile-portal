<template>
    <page>
        <top :title="$t('司乘险')" :showBack="true" />
        <r-body>
            <insurance-duration-short-term type="day" :model="policy" expireDate="expireDate" effectiveDate="effectiveDate" />
            <card :title="$t('投保人')">
                <holder-info v-bind:readonly="readonly" v-bind:holderInfo="policy.holderInfo"></holder-info>
            </card>
            <card :title="$t('车辆信息')">
                <r-input :title="$t('品牌车型')" :required="true" :model="policy.carInfo" value="carModel" :onChange="getCarModel" :readonly="readonly" />
                <r-input :title="$t('车牌号码')" :required="true" :model="policy.carInfo" value="licenseNo" :onChangle="getCarModel" :readonly="readonly" />
                <r-input :title="$t('发动机号')" :required="true" :model="policy.carInfo" value="engineNo" :onChange="getCarModel" :readonly="readonly" />
                <r-input :title="$t('车架号')" :required="true" :model="policy.carInfo" value="vin" :onChange="getCarModel" :readonly="readonly" />
                <r-input :title="$t('核定座位数')" :required="true" :model="policy.carInfo" value="approvalSeatCount" :onChange="getCarModel" :readonly="readonly" />
                <r-input :title="$t('车主')" :required="true" :model="policy.carInfo" value="drivingLicenseOwner" :onChange="getCarModel" :readonly="readonly" />
                <selector :title="$t('车辆使用性质')" :options="options" :model="policy.carInfo" value="vehicleUseNatureCode" :onChange="getVehicleUseNatureCode" :readonly="readonly"></selector>
            </card>
            <proposal-clause-confirm/>
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
  TabBar
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import HolderInfo from "../../components/HolderInfo";
import ProposalConfirm from "../../components/ProposalConfirm";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
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
    ProposalClauseConfirm
  },
  props: {},
  data() {
    return {
      readonly: true,
      policy: {
        effectiveDate: "",
        expireDate: "",
        holderInfo: {},
        carInfo: {}
      },
      options: [{ key: "1", value: "家庭自用" }],
      buttonName: "提交支付",
      amount: "100",
      readonly: true
    };
  },
  created: function() {},
  mounted: function() {},
  methods: {
    getCarModel: function() {
      console.log("getCarModel");
    },
    getVehicleUseNatureCode: function() {
      console.log("getVehicleUseNatureCode");
    },
    onClick: function() {
      this.$router.push({
        path: "/project/proposal/gi/InsuredInfoConfirmPassenger",
        name: "InsuredInfoConfirmPassenger",
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
    }
  }
};
</script>

<style>

</style>
