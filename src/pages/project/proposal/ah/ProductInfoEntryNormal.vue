<template>
  <r-page>
    <top :title="$t('productInfoEntryNormal.vehicleAccidentInsurance')" :showBack="true" />
    <r-body>
      <r-card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </r-card>
      <r-card>
        <plan-selection></plan-selection>
      </r-card>
      <r-card>
        <insurance-duration-currency></insurance-duration-currency>
      </r-card>
      <r-card>
        <proposal-copies></proposal-copies>
      </r-card>
    </r-body>
    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>

  </r-page>

</template>

<script>
import ProductTop from '../../components/ProductTop';
import InsuranceDurationCurrency from '../../components/InsuranceDurationCurrency';
import PlanSelection from '../../components/PlanSelection';
import ProposalCopies from '../../components/ProposalCopies';
import ProposalConfirm from '../../components/ProposalConfirm';
import Jtgj from '../../../../assets/jtgj.jpg';
import '../../../../i18n/productInfoEntryNormal';
export default {
  components: {
    ProductTop,
    InsuranceDurationCurrency,
    PlanSelection,
    ProposalCopies,
    ProposalConfirm
  },
  data() {
    return {
      productInfo: {},
      policy: {},
      productImgSrc: Jtgj,
      productDes:
        '保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。',
      amount: '100',
      buttonName: 'proposalConfirm.confirmInsure',
      templateFlag: ''
    };
  },
  methods: {
    onClick: function() {
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      if (route && route.route2 && route.route2 != '') {
        this.$router.push({
          path: '/proposal/ah/AHRouterEntry/' + this.$route.params.productCode + '/' + this.$route.params.agentCode + '/' + route.route2
        });
      }
    }
  },
  created: function() {
    let productInfo = {
      planConfigFlag: '个人', // 方案配置分类:个人、家庭
      subsidiaryInsuredFlag: false, // 附属被保险人标识:是、否
      productName: 'xxxxx险',
      productImagePath: '../../../assets/jtgj.jpg',
      productDescription: '这是一个XXXX类型的产品',
      InsuranceTerm: [
        { key: 'oneYear', value: '一年' },
        { key: 'twoYear', value: '两年' },
        { key: 'threeYear', value: '三年' }
      ],
      Plans: [],
      copies: 1
    };
    let policy = {
      premium: 100,
      HolderInfo: {
        name: '',
        certificateId: '',
        certificateNum: '',
        birthdate: '',
        mobileNum: '',
        email: ''
      },
      InsuredInfo: [
        {
          name: '',
          certificateId: '',
          certificateNum: '',
          birthdate: '',
          mobileNum: '',
          email: '',
          relationToHolder: ''
        }
      ],
      SubsidiaryInsuredInfo: [
        {
          name: '',
          certificateId: '',
          certificateNum: '',
          birthdate: '',
          mobileNum: '',
          email: '',
          relationToHolder: '',
          relationToMainInsured: '1'
        }
      ],
      effectiveDate: '',
      expireDate: '',
      insuranceTerm: '',
      Plan: {},
      productCode: '',
      productName: ''
    };
    let templateFlag = this.$route.params.flag;
    this.policy = policy;
    this.productInfo = productInfo;
    this.templateFlag = templateFlag;
    sessionStorage.setItem('POLICY', JSON.stringify(this.policy));

    // console.log(this.$route.params.flag);
  }
};
</script>

<style>

</style>
