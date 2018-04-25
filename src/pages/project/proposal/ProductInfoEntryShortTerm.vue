<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </r-card>
      <r-card>
        <r-checker type="icon" :text="$t('autoPlan.effectImmediately')" :model="policy.policyData" value="isEffectiveImmediately" class="isEffectiveImmediately" />
        <insurance-duration-shortTerm type="day" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" :readonlyEf="policy.policyData.isEffectiveImmediately"></insurance-duration-shortTerm>
      </r-card>
      <r-card>
        <plan-selection></plan-selection>
      </r-card>
      <r-card>
        <proposal-copies :model="policy"></proposal-copies>
      </r-card>
    </r-body>
    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>
  </r-page>

</template>

<script>
import ProductTop from '../components/ProductTop';
import InsuranceDurationShortTerm from '../components/InsuranceDurationShortTerm';
import PlanSelection from '../components/PlanSelection';
import ProposalCopies from '../components/ProposalCopies';
import ProposalConfirm from '../components/ProposalConfirm';
import '../../../i18n/autoPlan';
import Jtgj from '../../../assets/jtgj.jpg';
import '../../../i18n/project';

export default {
  components: {
    ProductTop,
    InsuranceDurationShortTerm,
    PlanSelection,
    ProposalCopies,
    ProposalConfirm
  },
  data() {
    return {
      linkInsuredInfoUrl: '/project/proposal/ah/insuredInfoEntryShortTerm',
      productImgSrc: Jtgj,
      productDes:
        '保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。',
      amount: '100',
      buttonName: 'proposalConfirm.confirmInsure',
      policy: {
        pageModel: {},
        policyData: {
          isEffectiveImmediately: false,
          effectiveDate: '',
          expireDate: ''
        },
        holderInfo: {},
        insuredInfo: {
          relationToHolder: '1'
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder: '1',
          relationToMainInsured: '1'
        },
        passengerInfo: {}
      },
      templateFlag: ''
    };
  },
  methods: {
    onClick: function() {
      this.templateFlag = sessionStorage.getItem('ROUTE_FLAG');
      sessionStorage.setItem('policy', JSON.stringify(this.policy));
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      if (route && route.route2 && route.route2 != '') {
        this.$router.push({
          path: '/quote/' + route.route2,
          query: this.$route.query
        });
      }
      // switch (this.templateFlag) {
      //   case "2":
      //     this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
      //     break;
      //   case "5":
      //     this.$router.push("/project/proposal/ah/InsuredInfoAccident");
      //     break;
      //   default:
      //     this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
      //     break;
      // }
      // this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
    }
  },
  created: function() {
    let templateFlag = this.$route.params.flag;
    this.templateFlag = templateFlag;
  }
  // ,
  // mounted:function(){

  //     console.log(this.policy)
  // }
};
</script>

<style>
.isEffectiveImmediately {
  float: right;
  padding-top: 8px;
  padding-right: 13px;
}
</style>
