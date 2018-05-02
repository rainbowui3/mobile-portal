<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card :title="$t('insuredInfoEntryShortTerm.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo" :required="required"></holder-info>
      </r-card>
      <r-card :title="$t('insuredInfoEntryShortTerm.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '1'" v-bind:readonly="readonly" v-bind:model="policy.insuredInfo" :required="required"></insured-info>
      </r-card>

      <r-card :title="$t('insuredInfoEntryShortTerm.subsidiaryInsured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.dubsidiaryInsuranceInfo" value="relationToHolder" />
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToInsured'" :model="policy.dubsidiaryInsuranceInfo" value="relationToMainInsured" />
        <subsidiary-insured-info v-if="policy.dubsidiaryInsuranceInfo.relationToHolder && policy.dubsidiaryInsuranceInfo.relationToHolder != '' && policy.dubsidiaryInsuranceInfo.relationToHolder != '1'" v-bind:readonly="readonly" v-bind:model="policy.dubsidiaryInsuranceInfo" :required="required"></subsidiary-insured-info>
      </r-card>
      <r-card class="addInsuredButton">
        <r-button type="primary" :onClick="clickHome">{{$t('insuredInfoEntryShortTerm.addMore')}}</r-button>
      </r-card>
      <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
      <!-- 未确认条款后弹出的提示框 -->
      <r-toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
    </r-body>

    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>

  </r-page>

</template>

<script>
import HolderInfo from '../../../components/HolderInfo';
import InsuredInfo from '../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import ProposalConfirm from '../components/ProposalConfirm';
import ChooseRelationship from '../components/ChooseRelationship';
import '../../../i18n/insuredInfoEntryShortTerm';
import '../../../i18n/insuredInfoEntryHealthSub';
import '../../../i18n/input';
import '../../../i18n/project';

export default {
  components: {
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalConfirm,
    ProposalClauseConfirm,
    ChooseRelationship
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      readonly: false,
      linkInsuredConfirmUrl: '/project/proposal/ah/InsuredInfoConfirmNormal',
      policy: {
        // holderInfo: {
        //   name: "王小明",
        //   certificateId: "10000",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // },
        // insuredInfo: {
        //   relationToHolder: "1",
        //   name: "王小明",
        //   certificateId: "10000",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // },
        // dubsidiaryInsuranceInfo: {
        //   relationToHolder: "1",
        //   relationToMainInsured: "1",
        //   name: "王小明",
        //   certificateId: "10000",
        //   certificateNum: "65300119520705283x",
        //   birthdate: "2000-01-01",
        //   mobileNum: "18398768724",
        //   email: "wangxm@outlook.com"
        // }
      },
      required: true,
      amount: '100',
      buttonName: 'proposalConfirm.confirmInsure',
      // relationToHolder: [
      //   { key: "10000", value: "本人" },
      //   { key: "10001", value: "配偶" },
      //   { key: "10002", value: "子女" }
      // ],
      datas1: [
        {
          key: '1',
          value: '本人',
          active: true
          // onClick: this.onClickInsured
        },
        {
          key: '2',
          value: '配偶',
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: '3',
          value: '子女',
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: '4',
          value: '父母',
          active: false
          // onClick: this.onClickInsured
        }
      ]
    };
  },
  methods: {
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.setItem('policy', JSON.stringify(this.policy));
        let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
        if (route && route.route3 && route.route3 != '') {
          this.$router.push({
            path: '/bind/' + route.route3,
            query: this.$route.query
          });
        }
        // this.$router.push("/project/proposal/ah/InsuredInfoConfirmNormal");
      } else {
        this.pageModel.toastShow = true;
      }
    },
    clickHome: function() {}
  },
  created: function() {
    this.policy = JSON.parse(sessionStorage.getItem('policy'));
  }
  // ,
  // watch:{
  //     policy:{
  //         handler:function(policy){
  //             localStorage.save(policy)
  //         },
  //         deep:true
  //     }
  // },
  // mounted:function(){
  //     console.log(this.policy)
  // }
};
</script>
<style>
.addInsuredButton {
  margin-bottom: 5px;
}
</style>
