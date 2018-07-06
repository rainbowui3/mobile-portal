<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </r-card>
      <r-card v-if="showPlanList && insuredGroup" >
        <plan-selection :model="insuredGroup" :showPlanList="showPlanList"></plan-selection>
      </r-card>
      <r-card>
        <r-input :title="$t('productInfoEntryHealth.poi')" :model="this" value="poi"  :readonly="true"></r-input>
      </r-card>
      <r-card v-if="personInsured">
        <r-date-time :title="$t('productInfoEntryHealth.birthday')" :model="personInsured" value="DateOfBirth" :format="timeFormat" :required="true"></r-date-time>
        <!--<r-card>-->
          <r-cell :type="row">
            <r-cell :span="6">
              <div class="margin_sex">{{$t('productInfoEntryHealth.sex')}}</div>
            </r-cell>
            <r-cell class="checker_list_row">
              <r-checker :max="1" :model="this" value="indiGenderCode" :data='list' type="list" :required="true"/>
            </r-cell>
          </r-cell>
        <!--</r-card>-->
        <r-switch  :title="$t('productInfoEntryHealth.social')"  :model="personInsured" value="MedicalInsuranceCode" :valueMap="valueMap"></r-switch>
        <proposal-copies :model="insuredGroup" v-if='showPlanList && insuredGroup' :showPlanList="showPlanList" :copyMax="copyMax" :copyMin="copyMin"></proposal-copies>
      </r-card>
    </r-body>
    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>
  </r-page>

</template>

<script>
import ProductTop from '../../../components/ProductTop';
import Poi from '../../../components/Poi';
import PlanSelection from '../../../components/PlanSelection';
import ProposalCopies from '../../../components/ProposalCopies';
import ProposalConfirm from '../../../components/ProposalConfirm';
import Jtgj from '../../../assets/jtgj.jpg';
import '../../../i18n/ProductInfoEntryHealth';
import config from 'config';
import {SessionContext} from 'rainbow-foundation-cache';
import {ProductStore, PolicyStore} from 'rainbow-foundation-sdk';
import {UrlUtil, DateUtil, Util} from 'rainbow-foundation-tools';
import {LoadingApi} from 'rainbow-mobile-core';
import AhUtil from '../../../components/utils/AhUtil';

export default {
  components: {
    ProductTop,
    Poi,
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
      productDes: '',
      amount: '100',
      buttonName: 'proposalConfirm.confirmInsure',
      personInsured: undefined,
      indiGenderCode: undefined,
      valueMap: ['N', 'Y'],
      poi: '1年',
      policy: undefined,
      insuredGroup: undefined,
      // planList: undefined,
      showPlanList: undefined,
      planCode: '',
      copyMax: 0,
      copyMin: 0
    };
  },
  methods: {
    async onClick() {
      let policy = PolicyStore.getPolicy();
      this.personInsured['IndiGenderCode'] = this.indiGenderCode[0];
      PolicyStore.setPolicy(policy);
      let route = JSON.parse(SessionContext.get('ROUTE_TYPE'));
      this.$router.push({
        path: '/quote/' + route.route2,
        query: this.$route.query
      });
    },
    getShowPlanList(planList) {
      let showPlanList = [];
      _.each(planList, (planItem) => {
        let showPlanItem = {};
        showPlanItem['PlanName'] = planItem['PlanName'];
        showPlanItem['PlanCode'] = planItem['PlanCode'];
        showPlanItem['PlanDefId'] = planItem['PlanDefId'];
        showPlanItem['PlanCoverageList'] = planItem['PlanCoverageList'];
        showPlanItem['ProductPlanInfo'] = planItem['ProductPlanInfo'];

        let showChildPlanCoverageList = [];
        this.getChildPlanCoverageList(planItem.PlanCoverageList[0].ChildPlanCoverageList, showChildPlanCoverageList);
        showPlanItem['PlanCoverageList'][0]['ChildPlanCoverageList'] = showChildPlanCoverageList;
        showPlanList.push(showPlanItem);
      });
      return showPlanList;
    },
    getChildPlanCoverageList(childPlanCoverageList, showChildPlanCoverageList) {
      if (childPlanCoverageList && childPlanCoverageList.length > 0) {
        _.each(childPlanCoverageList, (childPlanCoverageItem) => {
          if (childPlanCoverageItem.childPlanCoverageList) {
            this.getChildPlanCoverageList(childPlanCoverageItem.childPlanCoverageList, showChildPlanCoverageList);
          } else {
            showChildPlanCoverageList.push(childPlanCoverageItem);
          }
        });
      }
    },
    copyMinAndMax(value) {
      const showPlanItem = _.find(this.showPlanList, (planItem) => {
        return planItem.PlanCode == value;
      });
      this.copyMax = showPlanItem.ProductPlanInfo.CopyMax;
      this.copyMin = showPlanItem.ProductPlanInfo.CopyMin;
    },
    initPolicy(urlObject, policy, newPolicy) {
      // 初始化policy
      const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
      const insuredGroupParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'InsuredGroup'};
      if (!newPolicy) {
          this.insuredGroup = PolicyStore.getChild(insuredGroupParam, policy);
          const riskParam = AhUtil.getRiskParam(policy);
          const personInsuredData = PolicyStore.getChild(riskParam, policy);
          if (Util.isArray(personInsuredData)) {
            this.personInsured = _.find(personInsuredData, (personInsuredItem) => {
              return personInsuredItem.SequenceNumber == 1;
            });
          } else {
            this.personInsured = personInsuredData;
          }
          if (this.personInsured.IndiGenderCode) {
            this.indiGenderCode = [
              this.personInsured.IndiGenderCode
            ];
          }
          // console.log(JSON.stringify(personInsuredData));
      } else {
          // 生效日期当前日期+1
          policy['EffectiveDate'] = DateUtil.add(policy['EffectiveDate'], 1, 'days');
          policy['ExpiryDate'] = DateUtil.add(policy['ExpiryDate'], 1, 'days');
          const policyCustomerHolder = PolicyStore.createChild(policyCustomerParam, policy);
          policyCustomerHolder['CustomerRoleCode'] = '1';
          // const policyCustomerContactComp = PolicyStore.createChild(policyCustomerParam, policy);
          // policyCustomerContactComp['CustomerRoleCode'] = '4';

          const policyLobParamComp = {'ModelName': 'PolicyLob', 'ObjectCode': 'WVA'};
          PolicyStore.createChild(policyLobParamComp, policy);
          // 创建risk
          const insuredGroup = PolicyStore.createChild(insuredGroupParam, policy);
          this.insuredGroup = insuredGroup;
          const riskParam = AhUtil.getRiskParam(policy);
          const personInsured = PolicyStore.createChild(riskParam, policy);
          personInsured['SequenceNumber'] = 1;
          personInsured['CustomerRoleCode'] = 2;
          personInsured['IndiGenderCode'] = '1';
          // 与被保险人与投保人的关系默认本人
          personInsured['PolHolderInsuredRelaCode'] = '00';
          this.indiGenderCode = [
            personInsured['IndiGenderCode']
          ];
          this.personInsured = personInsured;

          // PolicyStore.createChild(riskParam, policy);
          // console.log(JSON.stringify(policy));
          PolicyStore.setPolicy(policy);
      }
      this.policy = policy;
      LoadingApi.hide(this);
    }
  },
  async created() {
    LoadingApi.show(this, {
        text: this.$t('common.processing')
    });
    // const routerType = JSON.parse(SessionContext.get('ROUTE_TYPE'));
    // this.productImgSrc = routerType.imgSrc;

    const urlObject = UrlUtil.parseURL(window.location.href);
    const param = { 'ProductCode': urlObject.params.productCode, 'ProductVersion': urlObject.params.productVersion};
    let product = await ProductStore.getProductByCodeVersion(param);
    this.productDes = product.ProductElementName;

    let newPolicy = false;
    let policy = PolicyStore.getPolicy();
    if (!policy) {
      newPolicy = true;
      policy = await PolicyStore.initPolicy({'productCode': urlObject.params.productCode, 'productVersion': urlObject.params.productVersion, 'policyType': urlObject.params.productType });
    }
    // 请求方案
    let url = `${UrlUtil.getConfigUrl('UI_API_GATEWAY_PROXY', 'PRODUCT_API', 'PLAN_LIST_FOR_GENERALFORAH')}`;
    const planParam = { 'ProductCode': urlObject.params.productCode};
    AjaxUtil.call(url, planParam, { 'method': 'POST', 'header': {'X-ebao-user-name': 'ADMIN'} }).then((planList) => {
      // this.planList = planList;
      this.showPlanList = this.getShowPlanList(planList);
      this.initPolicy(urlObject, policy, newPolicy);
    });
  },
  computed: {
      list() {
          return [{'key': '1', 'value': '男', 'disabled': true}, {'key': '2', 'value': '女'}];
      }
  },
  watch: {
    'insuredGroup.PlanCode'(curVal, oldVal) {
      this.copyMinAndMax(curVal);
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
