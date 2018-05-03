<template>
  <r-page>
    <top :title="$t('insuredInfoEntryHealthSub.title')" :showBack="true" />
    <r-body>
      <!-- 保险期限选择 -->
      <r-card>
        <poi type="day" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </r-card>
      <!-- 投保人信息 -->
      <r-card :title="$t('common.holderInfo')">
        <holder-info :model="policy.holderInfo" :required="required"/>
      </r-card>
      <!-- 被保人信息 -->
      <r-card :title="$t('common.insuredInfo')">
        <choose-relationship :datas="datas1" :model="policy.insuredInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" />
        <insured-info v-if="policy.insuredInfo.relationToHolder != '1' && policy.insuredInfo.relationToHolder != '1'" :model="policy.insuredInfo" :required="required"/>
        <r-row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
      </r-card>
      <!-- 附属被保险人信息 -->
      <r-card :title="$t('common.subsidiaryInsuredInfo')">
        <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" />
        <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToMainInsured" :title="$t('holderInfo.relationToInsured')" />
        <subsidiary-insured-info v-if="policy.subsidiaryInfo.relationToHolder != '1' && policy.insuredInfo.relationToHolder != '1'" :model="policy.subsidiaryInfo" :required="required"/>
        <r-row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
      </r-card>
      <!-- 添加更多被保险人 -->
      <r-button type="primary">{{$t('common.addmore')}}</r-button>
      <!-- 保险条款确认 -->
      <proposal-clause-confirm :model="pageModel" value="clauseConfirmed" />
      <!-- 未确认条款后弹出的提示框 -->
      <r-toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
    </r-body>
    <r-tab-bar>
      <proposal-confirm amount="50" :buttonName="'proposalConfirm.immediatelyInsure'" :onClick="goto" />
    </r-tab-bar>
  </r-page>
</template>

<script>
import ChooseRelationship from '../../../components/ChooseRelationship';
import ProposalConfirm from '../../../components/ProposalConfirm';
import HolderInfo from '../../../components/HolderInfo';
import InsuredInfo from '../../../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../../../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../../../components/ProposalClauseConfirm';
import Poi from '../../../components/Poi';
import '../../../i18n/insuredInfoEntryHealthSub';
import '../../../i18n/proposalConfirm';
import '../../../i18n/holderInfo';

export default {
  components: {
    ChooseRelationship,
    ProposalConfirm,
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    Poi
  },
  data() {
    return {
      policy: {
        policyData: {},
        holderInfo: {},
        insuredInfo: {
          relationToHolder: '1'
        },
        subsidiaryInfo: {
          relationToHolder: '1'
        }
      },
      pageModel: {
        clauseConfirmed: false,
        toastShow: false
      },
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
    goto: function() {
      if (this.pageModel.clauseConfirmed) {
        // Todo:跳转到下一个页面,确认页面
        // console.log("goto");
        sessionStorage.setItem('policy', JSON.stringify(this.policy));
        let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
        this.$router.push({
          path: '/bind/' + route.route3,
          query: this.$route.query
        });
      } else {
        this.pageModel.toastShow = true;
      }
    },
    gotoHealthInfo: function() {
      // console.log("gotoHealthInfo");
      this.$router.push({
        path: '/project/proposal/ah/HealthInform',
        name: 'HealthInform'
      });
    }
  },
  watch: {
    'pageModel.clauseConfirmed': {
      handler: function() {
        // console.log(this.pageModel.clauseConfirmed);
      }
    },
    'policy.subsidiaryInfo.relationToHolder': {
      handler: function() {
      },
      deep: true
    }
  },
  computed: {}
};
</script>

<style>

</style>
