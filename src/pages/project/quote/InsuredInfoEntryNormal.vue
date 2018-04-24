<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card :title="$t('planSelection.term')">
        <insurance-duration-short-term type="day" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </r-card>
      <r-card :title="$t('common.holder')">
        <holder-info :model="policy.holderInfo" :required="required"/>
      </r-card>
      <r-card :title="$t('common.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '1'" :model="policy.insuredInfo" :required="required"/>
      </r-card>
      <r-card :title="$t('common.subsidiaryInsured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.dubsidiaryInsuranceInfo" value="relationToHolder" />
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToInsured'" :model="policy.dubsidiaryInsuranceInfo" value="relationToMainInsured" />
        <subsidiary-insured-info v-if="policy.dubsidiaryInsuranceInfo.relationToHolder && policy.dubsidiaryInsuranceInfo.relationToHolder != '' && policy.dubsidiaryInsuranceInfo.relationToHolder != '1'" :model="policy.dubsidiaryInsuranceInfo" :required="required"/>
      </r-card>
      <r-card class="addInsured">
        <r-button type="primary" :onClick="clickHome">{{$t('common.addmore')}}</r-button>
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
import HolderInfo from '../components/HolderInfo';
import InsuranceDurationShortTerm from '../components/InsuranceDurationShortTerm';
import InsuredInfo from '../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import ProposalConfirm from '../components/ProposalConfirm';
import ChooseRelationship from '../components/ChooseRelationship';
import '../../../i18n/project';
import '../../../i18n/input';
import '../../../i18n/planSelection';
import '../../../i18n/insuredInfoEntryHealthSub';
export default {
  components: {
    HolderInfo,
    InsuranceDurationShortTerm,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirm,
    ChooseRelationship
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      policy: {
        holderInfo: {
        // name: "王小明",
        // certificateId: "10000",
        // certificateNum: "65300119520705283x",
        // birthdate: "2000-01-01",
        // mobileNum: "18398768724",
        // email: "wangxm@outlook.com"
      },
      insuredInfo: {
        relationToHolder: '1'
        // name: "王小明",
        // certificateId: "10000",
        // certificateNum: "65300119520705283x",
        // birthdate: "2000-01-01",
        // mobileNum: "18398768724",
        // email: "wangxm@outlook.com"
      },
      dubsidiaryInsuranceInfo: {
        relationToHolder: '1',
        relationToMainInsured: '1'
        // name: "王小明",
        // certificateId: "10000",
        // certificateNum: "65300119520705283x",
        // birthdate: "2000-01-01",
        // mobileNum: "18398768724",
        // email: "wangxm@outlook.com"
      },
      policyData: {
        // effectiveDate: "",
        // expireDate: ""
      }
      },

      amount: '100',
      buttonName: 'proposalConfirm.immediatelyInsure',
      required: true,
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
        // this.$router.push("/project/proposal/ah/InsuredInfoConfirmNormal");
        this.$router.push({
          path: '/bind/' + route.route3,
          query: this.$route.query
        });
      } else {
        this.pageModel.toastShow = true;
      }
    },
    clickHome: function() {
    }
    // onClickInsured: function(data) {
    //   console.log(data);
    // }
  },
  create: function() {
  },
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style>
.addInsured {
  margin-bottom: 5px;
}
</style>
