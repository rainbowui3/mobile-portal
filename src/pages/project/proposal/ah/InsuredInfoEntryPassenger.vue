<template>
  <page>
    <top :title="$t('common.autoPassengersInsurance')" :showBack="true" />
    <r-body>
      <card :title="$t('planSelection.term')">
        <insurance-duration-short-term type="day" :model="policy" expireDate="expireDate" effectiveDate="effectiveDate" />
      </card>
      <card :title="$t('common.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo"></holder-info>
      </card>
      <card :title="$t('insuredInfoEntryPassenger.carInfo')">
        <r-input :title="$t('insuredInfoEntryPassenger.model')" :required="true" :model="policy.carInfo" value="carModel" :onChange="getCarModel" />
        <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :required="true" :model="policy.carInfo" value="licenseNo" :onChangle="getCarModel" />
        <r-input :title="$t('insuredInfoEntryPassenger.engineNo')" :required="true" :model="policy.carInfo" value="engineNo" :onChange="getCarModel" />
        <r-input :title="$t('insuredInfoEntryPassenger.vin')" :required="true" :model="policy.carInfo" value="vin" :onChange="getCarModel" />
        <r-input :title="$t('insuredInfoEntryPassenger.approvalSeatNum')" :required="true" :model="policy.carInfo" value="approvalSeatCount" :onChange="getCarModel" />
        <r-input :title="$t('insuredInfoEntryPassenger.carOwner')" :required="true" :model="policy.carInfo" value="drivingLicenseOwner" :onChange="getCarModel" />
        <selector :title="$t('insuredInfoEntryPassenger.carUsage')" :options="options" :model="policy.carInfo" value="vehicleUseNatureCode" :onChange="getVehicleUseNatureCode"></selector>
      </card>
    </r-body>
    <tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="goto"></proposal-confirm>
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
import "../../../../i18n/insuredInfoEntryPassenger";
import "../../../../i18n/planSelection";
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
    ProposalConfirm
  },
  props: {},
  data() {
    return {
      readonly: false,
      policy: {
        effectiveDate: "",
        expireDate: "",
        holderInfo: {},
        carInfo: {}
      },
      options: [{ key: "1", value: "家庭自用" }],
      buttonName: "proposalConfirm.immediatelyInsure",
      amount: "100"
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
    goto: function() {
      this.$router.push({
        path: "/project/proposal/ah/InsuredInfoConfirmPassenger",
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
  },
  watch:{
    'policy.carInfo.licenseNo': {
      handler : function (value){
        if(value){
         this.policy.carInfo.licenseNo =  value.toUpperCase();
        }
      },
      deep:true
    },
    'policy.carInfo.engineNo': {
      handler : function (value){
        if(value){
         this.policy.carInfo.engineNo =  value.toUpperCase();
        }
      },
      deep:true
    },
    'policy.carInfo.vin': {
      handler : function (value){
        if(value){
         this.policy.carInfo.vin =  value.toUpperCase();
        }
      },
      deep:true
    },
    
  }
};
</script>

<style>

</style>
