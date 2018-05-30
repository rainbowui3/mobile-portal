<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card :title="$t('planSelection.term')">
        <poi :readonlyEx="readonly" :readonlyEf="readonly" type="day" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </r-card>
      <r-card :title="$t('common.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo"></holder-info>
      </r-card>
      <r-card :title="$t('common.insured')">
        <choose-relationship :data="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" :isToHolder="true" :readonly="true" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '1'" v-bind:readonly="readonly" v-bind:model="policy.insuredInfo"></insured-info>
      </r-card>
      <r-card :title="$t('common.subsidiaryInsured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.dubsidiaryInsuranceInfo" :isToHolder="true" :readonly="true" />
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToInsured'" :model="policy.dubsidiaryInsuranceInfo" :isToHolder="false" :readonly="true" />
        <subsidiary-insured-info v-if="policy.dubsidiaryInsuranceInfo.relationToHolder && policy.dubsidiaryInsuranceInfo.relationToHolder != '' && policy.dubsidiaryInsuranceInfo.relationToHolder != '1'" v-bind:readonly="readonly" v-bind:model="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
      </r-card>
    </r-body>
    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>
  </r-page>
</template>

<script>
import HolderInfo from '../../../components/HolderInfo';
import InsuredInfo from '../../../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../../../components/SubsidiaryInsuredInfo';
import ProposalConfirm from '../../../components/ProposalConfirm';
import Poi from '../../../components/Poi';
import ChooseRelationship from '../../../components/ChooseRelationship';
import '../../../i18n/planSelection';
import '../../../i18n/input';
import '../../../i18n/project';
import {SessionContext} from 'rainbow-foundation-cache';

// import localStorage from "../../../../sotre.js";

export default {
  components: {
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalConfirm,
    Poi,
    ChooseRelationship
  },
  methods: {
    clickHom() {},
    onClick: function() {
      SessionContext.remove('policy');
      let route = JSON.parse(SessionContext.get('ROUTE_TYPE'));
      // this.$router.push("/project/proposal/payStatus");
      this.$router.push({
        path: '/issue/' + route.route4,
        query: this.$route.query
      });
    }
  },
  data() {
    return {
      readonly: true,
      // policyData: {
      //   effectiveDate: "",
      //   expireDate: ""
      // },
      // ,
      // policy:localStorage.fetch()
      policy: {
        // holderInfo: {
        //   name: "王小明",
        //   certificateId: "",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // },
        // insuredInfo: {
        //   relationToHolder: "",
        //   name: "王小明",
        //   certificateId: "",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // },
        // dubsidiaryInsuranceInfo: {
        //   relationToHolder: "",
        //   relationToMainInsured: "1 ",
        //   name: "王小明",
        //   certificateId: "",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // }
      },
      amount: '100',
      buttonName: 'proposalConfirm.submitPay',
      datas1: [
        {
          key: '1',
          value: '本人',
          'disabled': true
          // onClick: this.onClickInsured
        },
        {
          key: '2',
          value: '配偶',
          'disabled': true
          // onClick: this.onClickInsured
        },
        {
          key: '3',
          value: '子女',
          'disabled': true
          // onClick: this.onClickInsured
        },
        {
          key: '4',
          value: '父母',
          'disabled': true
          // onClick: this.onClickInsured
        }
      ]
    };
  },
  created: function() {
    this.policy = JSON.parse(SessionContext.get('policy'));
  }
};
</script>

<style>

</style>
