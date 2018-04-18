<template>
  <r-page>
    <top :title="$t('common.autoPassengersInsurance')" :showBack="true" />
    <r-body>
      <r-card :title="$t('planSelection.term')">
        <insurance-duration-short-term type="day" :model="policy.policyData" expireDate="expireDate" effectiveDate="effectiveDate" />
      </r-card>
      <r-card :title="$t('common.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo" :required="required"></holder-info>
      </r-card>
      <r-card :title="$t('insuredInfoEntryPassenger.carInfo')">
        <r-input :title="$t('insuredInfoEntryPassenger.model')" :model="policy.carInfo" value="carModel" :onChange="getCarModel" :required="required" :novalidate="false" />
        <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :required="required" :model="policy.carInfo" value="licenseNo" :onChangle="getCarModel" :novalidate="false" />
        <r-input :title="$t('insuredInfoEntryPassenger.engineNo')" :required="required" :model="policy.carInfo" value="engineNo" :onChange="getCarModel" :novalidate="false" />
        <r-input :title="$t('insuredInfoEntryPassenger.vin')" :required="required" :model="policy.carInfo" value="vin" :onChange="getCarModel" :novalidate="false" />
        <r-input :title="$t('insuredInfoEntryPassenger.approvalSeatNum')" :required="required" :model="policy.carInfo" value="approvalSeatCount" :onChange="getCarModel" :novalidate="false" :isNumber="true" />
        <r-input :title="$t('insuredInfoEntryPassenger.carOwner')" :required="required" :model="policy.carInfo" value="drivingLicenseOwner" :onChange="getCarModel" :novalidate="false" />
        <r-selector :title="$t('insuredInfoEntryPassenger.carUsage')" :options="options" :model="policy.carInfo" value="vehicleUseNatureCode" :onChange="getVehicleUseNatureCode" :required="required" :novalidate="false"></r-selector>
      </r-card>
    </r-body>
    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="goto"></proposal-confirm>
    </r-tab-bar>
  </r-page>
</template>

<script>
import InsuranceDurationShortTerm from '../../components/InsuranceDurationShortTerm';
import HolderInfo from '../../components/HolderInfo';
import ProposalConfirm from '../../components/ProposalConfirm';
import '../../../../i18n/insuredInfoEntryPassenger';
import '../../../../i18n/planSelection';
export default {
  components: {
    InsuranceDurationShortTerm,
    HolderInfo,
    ProposalConfirm
  },
  props: {},
  data() {
    return {
      readonly: false,
      policy: {
        policyData: {
          effectiveDate: '',
          expireDate: ''
        },
        holderInfo: {},
        carInfo: {}
      },
      options: [{ key: '1', value: '家庭自用' }],
      buttonName: 'proposalConfirm.immediatelyInsure',
      amount: '100',
      required: true
    };
  },
  created: function() {},
  mounted: function() {},
  methods: {
    getCarModel: function() {
    },
    getVehicleUseNatureCode: function() {
    },
    goto: function() {
      sessionStorage.setItem('policy', JSON.stringify(this.policy));
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      if (route && route.route3 && route.route3 != '') {
        this.$router.push({
          path:
            '/proposal/ah/AHRouterConfirm/' +
            this.$route.params.productCode +
            '/' +
            this.$route.params.agentCode +
            '/' +
            route.route3,
          params: [
            {
              name: 'test',
              dataObj: this.policy
            },
            {
              name: 'test2',
              dataObj: this.policy
            }
          ]
        });
      }
      // this.$router.push({
      //   path: "/project/proposal/ah/InsuredInfoConfirmPassenger",
      //   name: "InsuredInfoConfirmPassenger",
      //   params: [
      //     {
      //       name: "test",
      //       dataObj: this.policy
      //     },
      //     {
      //       name: "test2",
      //       dataObj: this.policy
      //     }
      //   ]
      // });
    }
  },
  watch: {
    'policy.carInfo.licenseNo': {
      handler: function(value) {
        if (value) {
          this.policy.carInfo.licenseNo = value.toUpperCase();
        }
      },
      deep: true
    },
    'policy.carInfo.engineNo': {
      handler: function(value) {
        if (value) {
          this.policy.carInfo.engineNo = value.toUpperCase();
        }
      },
      deep: true
    },
    'policy.carInfo.vin': {
      handler: function(value) {
        if (value) {
          this.policy.carInfo.vin = value.toUpperCase();
        }
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
