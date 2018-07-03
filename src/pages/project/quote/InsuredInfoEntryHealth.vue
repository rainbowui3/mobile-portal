<template>
  <r-page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <r-card>
        <poi type="day" :model="policy" :readonlyEx="true" />
      </r-card>
      <r-card :title="$t('common.holder')" v-if='policyHoder'>
        <holder-info :model="policyHoder" :required="required"/>
      </r-card>
      <div>
        <r-card :title="$t('common.insured')">
          <div v-for="(personInsured,BusinessObjectId) in personInsuredList" :key="personInsured.BusinessObjectId">
            <choose-relationship :data="datas1" :title="'holderInfo.relationToHolder'" :model="personInsured" />
            <insured-info v-if="personInsured.PolHolderInsuredRelaCode && personInsured.PolHolderInsuredRelaCode != '' && personInsured.PolHolderInsuredRelaCode != '00'" :model="personInsured" :required="required"/>
          </div>
        </r-card>
        <!--<r-card v-if='personInsuredList && personInsuredList.length > 1' :title="$t('common.insured')">
          <div v-for="(personInsured,BusinessObjectId) in personInsuredList" :key="personInsured.BusinessObjectId">
            <choose-relationship :data="datas1" :title="'holderInfo.relationToHolder'" :model="personInsured" />
            <insured-info v-if="personInsured.PolHolderInsuredRelaCode && personInsured.PolHolderInsuredRelaCode != '' && personInsured.PolHolderInsuredRelaCode != '00'" :model="personInsured" :required="required"/>
            
        <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToMainInsured" :title="$t('holderInfo.relationToInsured')" />
            <subsidiary-insured-info v-if="policy.subsidiaryInfo.relationToHolder != '1' && policy.insuredInfo.relationToHolder != '1'" :model="policy.subsidiaryInfo" :required="required"/>
          </div>
        </r-card>-->
      </div>
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
import HolderInfo from '../../../components/HolderInfo';
import Poi from '../../../components/Poi';
import InsuredInfo from '../../../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../../../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../../../components/ProposalClauseConfirm';
import ProposalConfirm from '../../../components/ProposalConfirm';
import ChooseRelationship from '../../../components/ChooseRelationship';
import '../../../i18n/project';
import '../../../i18n/input';
import '../../../i18n/planSelection';
import '../../../i18n/insuredInfoEntryHealthSub';
import {SessionContext} from 'rainbow-foundation-cache';
import {LoadingApi} from 'rainbow-mobile-core';
import {PolicyStore} from 'rainbow-foundation-sdk';
import AhUtil from '../../../components/utils/AhUtil';
import {Util} from 'rainbow-foundation-tools';
export default {
  components: {
    HolderInfo,
    Poi,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirm,
    ChooseRelationship
  },
  data() {
    return {
      policy: undefined,
      policyHoder: undefined,
      personInsuredList: undefined,
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      amount: '100',
      buttonName: 'proposalConfirm.immediatelyInsure',
      datas1: [
        {
          key: '00',
          value: '本人',
          active: true
          // onClick: this.onClickInsured
        },
        {
          key: '01',
          value: '配偶',
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: '03',
          value: '子女',
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: '02',
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
        console.log(JSON.stringify(this.policy));
        let insuredOwer = _.find(this.personInsuredList, (personInsured) => {
          return personInsured['SequenceNumber'] == 1;
        });
        if (insuredOwer.PolHolderInsuredRelaCode == '00') {
          insuredOwer['CustomerName'] = this.HolderInfo['CustomerName'];
          insuredOwer['IdType'] = this.HolderInfo['IdType'];
          insuredOwer['IdNo'] = this.HolderInfo['IdNo'];
          insuredOwer['DateOfBirth'] = this.HolderInfo['DateOfBirth'];
          insuredOwer['IndiMobile'] = this.HolderInfo['IndiMobile'];
          insuredOwer['Email'] = this.HolderInfo['Email'];
        }
        let route = JSON.parse(SessionContext.get('ROUTE_TYPE'));
        this.$router.push({
          path: '/bind/' + route.route3,
          query: this.$route.query
        });
      } else {
        this.pageModel.toastShow = true;
      }
    },
    clickHome: function() {
    },
    goto() {
      this.$router.push({
        path: '/project/proposal/ah/HealthInform',
        name: 'HealthInform',
        params: {}
      });
    }
  },
  async created() {
    LoadingApi.show(this, {
        text: this.$t('common.processing')
    });
    let policy = PolicyStore.getPolicy();
    this.policy = policy;
    // const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
    // const policyCustomers = PolicyStore.getChild(policyCustomerParam, policy);
    this.policyHoder = _.find(policy.PolicyCustomerList, (customer) => {
        return customer['CustomerRoleCode'] == '1';
    });
    const riskParam = AhUtil.getRiskParam(policy);
    const personInsuredData = PolicyStore.getChild(riskParam, policy);
    if (Util.isArray(personInsuredData)) {
      this.personInsuredList = personInsuredData;
    } else {
      let personInsuredList = [];
      personInsuredList.push(personInsuredData);
      this.personInsuredList = personInsuredList;
    }
    LoadingApi.hide(this);
  }
};
</script>

<style>
.addInsured {
  margin-bottom: 5px;
}
</style>
