<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card>
        <insurance-duration-short-term type="day" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </r-card>
      <r-card :title="$t('common.holder')">
        <holder-info :model="policy.holderInfo" :required="required"/>
      </r-card>
      <r-card :title="$t('common.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '1'" :model="policy.insuredInfo" :required="required"/>
      </r-card>
      <r-card>
        <r-row :title="$t('insuredInfoEntryHealthSub.healthInfo')" :model="policy" :onClick="goto" :isLink="true"></r-row>
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
import HolderInfo from '../../components/HolderInfo';
import InsuranceDurationShortTerm from '../../components/InsuranceDurationShortTerm';
import InsuredInfo from '../../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../../components/ProposalClauseConfirm';
import ProposalConfirm from '../../components/ProposalConfirm';
import ChooseRelationship from '../../components/ChooseRelationship';
import '../../../../i18n/project';
import '../../../../i18n/input';
import '../../../../i18n/planSelection';
import '../../../../i18n/insuredInfoEntryHealthSub';
// import {SessionContext} from 'rainbow-foundation-cache';
export default {
  components: {
    HolderInfo,
    InsuranceDurationShortTerm,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirm,
    ChooseRelationship,
  },
  data() {
    return {
      policy: {
        policyData: {
          // effectiveDate: "",
          // expireDate: ""
        },
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
          // relationToHolder: "本人",
          // relationToMainInsured: "本人",
          // name: "王小明",
          // certificateId: "10000",
          // certificateNum: "65300119520705283x",
          // birthdate: "2000-01-01",
          // mobileNum: "18398768724",
          // email: "wangxm@outlook.com"
        }
      },
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      amount: '100',
      buttonName: 'proposalConfirm.immediatelyInsure',
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
      ],
      required: true
    };
  },
  methods: {
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.setItem('policy', JSON.stringify(this.policy));
        let route = JSON.parse('ROUTE_TYPE');
        debugger;
        this.$router.push({
          path: '/proposal/ah/AHRouterConfirm/' + this.$route.params.productCode + '/' + this.$route.params.agentCode + '/' + route.route3
        });
      } else {
        this.pageModel.toastShow = true;
      }
    },
    clickHome: function() {
      console.log('lalalalala');
    },
    goto() {
      this.$router.push({
        path: '/project/proposal/ah/HealthInform',
        name: 'HealthInform',
        params: {}
      });
    }
  },
  //   created: function() {
  //     this.policy = JSON.parse(sessionStorage.getItem("POLICY"));
  //     console.log("policy", this.policy);
  //   },
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style>
.addInsured {
  margin-bottom: 5px;
}
</style>
