<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </r-card>
      <r-card>
        <plan-selection></plan-selection>
      </r-card>
      <r-card>
        <r-input :title="$t('productInfoEntryHealth.poi')" :model="policy" value="poi"  :readonly="true"></r-input>
        <r-date-time :title="$t('productInfoEntryHealth.birthday')" :model="policy" value="birthday" :format="timeFormat" :required="true"></r-date-time>
        <!--<r-card>-->
          <r-cell :type="row">
            <r-cell :span="6">
              <div class="margin_sex">{{$t('productInfoEntryHealth.sex')}}</div>
            </r-cell>
            <r-cell class="checker_list_row">
              <r-checker :max="1" :model="policy" value="sex" :data='list' :onChange="onChange" type="list" :required="true"/>
            </r-cell>
          </r-cell>

        <!--</r-card>-->
        <r-switch  :title="$t('productInfoEntryHealth.social')"  :model="policy" value="social" :required="true"></r-switch>
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
import InsuranceDurationShortTerm from '../../components/InsuranceDurationShortTerm';
import PlanSelection from '../../components/PlanSelection';
import ProposalCopies from '../../components/ProposalCopies';
import ProposalConfirm from '../../components/ProposalConfirm';
import Jtgj from '../../../../assets/jtgj.jpg';
import '../../../../i18n/ProductInfoEntryHealth';
import config from 'config';

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
      pageModel: {},
      row: 'row',
      timeFormat: config.DEFAULT_DATE_FORMATER,
      linkInsuredInfoUrl: '/project/proposal/ah/insuredInfoEntryShortTerm',
      productImgSrc: Jtgj,
      productDes:
        '保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。',
      amount: '100',
      buttonName: 'proposalConfirm.confirmInsure',
      policy: {
        poi: '1年',
        sex: ['01'],
        social: false,
        birthday: '',
        effectiveDate: '',
        expireDate: ''
      },
      templateFlag: ''
    };
  },
  methods: {
    onClick: function() {
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      this.$router.push({
        path: '/quote/' + route.route2,
        query: this.$route.query
      });
      // switch (this.templateFlag) {
      //   case '1':
      //   this.$router.push({
      //     path: '/quote/' + route.route2,
      //     query: this.$route.query
      //   });
      //     // this.$router.push('/project/proposal/ah/InsuredInfoEntryHealth');
      //     break;
      //   case '2':
      //   this.$router.push({
      //     path: '/quote/' + route.route2,
      //     query: this.$route.query
      //   });
      //     // this.$router.push('/proposal/ah/AHRouterEntry/' + this.$route.params.productCode + '/' + this.$route.params.agentCode + '/' + route.route2);
      //     break;
      //   default:
      //   this.$router.push({
      //     path: '/bind/' + route.route3,
      //     query: this.$route.query
      //   });
      //     // this.$router.push('/project/proposal/ah/InsuredInfoEntryHealth');
      //     break;
      // }
    },
    onChange() {

    }
  },
  created: function() {
    let templateFlag = this.$route.params.flag;
    this.templateFlag = templateFlag;
  },
  computed: {
      list() {
          return [{'key': '01', 'value': '男', 'disabled': true}, {'key': '02', 'value': '女'}];
      }
  }
};
</script>

<style>
.checker_list_row > div > div > .weui-cells_checkbox > label{
float: left;
}
.margin_sex{
  margin-left: 16px;
 }


</style>
