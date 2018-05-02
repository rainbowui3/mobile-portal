<template>
    <r-page>
        <top :title="$t('insuredInfoEntryHealthSub.title')" :showBack="true" />
        <r-body>
            <!-- 保险期限选择 -->
            <r-card>
                <poi type="day" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate" :readonly="true" />
            </r-card>
            <!-- 投保人信息 -->
            <r-card :title="$t('common.holderInfo')">
                <holder-info :model="policy.holderInfo" :readonly="true" />
            </r-card>
            <!-- 被保人信息 -->
            <r-card :title="$t('common.insuredInfo')">
                <choose-relationship :datas="datas1" :model="policy.insuredInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" :readonly="true" />
                <insured-info v-if="policy.insuredInfo.relationToHolder != '1'" :model="policy.insuredInfo" :readonly="true" />
                <r-row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
            </r-card>
            <!-- 附属被保险人信息 -->
            <r-card :title="$t('common.subsidiaryInsuredInfo')">
                <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" :readonly="true" />
                <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToMainInsured" :title="$t('holderInfo.relationToInsured')" :readonly="true" />
                <subsidiary-insured-info v-if="policy.subsidiaryInfo.relationToHolder != '1'" :model="policy.subsidiaryInfo" :readonly="true" />
                <r-row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
            </r-card>
        </r-body>
        <r-tab-bar>
            <proposal-confirm amount="50" :buttonName="'proposalConfirm.submitPay'" :onClick="goto" />
        </r-tab-bar>
    </r-page>
</template>

<script>
import ChooseRelationship from '../components/ChooseRelationship';
import ProposalConfirm from '../components/ProposalConfirm';
import HolderInfo from '../../../components/HolderInfo';
import InsuredInfo from '../components/InsuredInfo';
import SubsidiaryInsuredInfo from '../components/SubsidiaryInsuredInfo';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
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
      policy: {},
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
      readonly: false
    };
  },
  methods: {
    goto: function() {
      sessionStorage.removeItem('policy');
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      if (route && route.route4 && route.route4 != '') {
        this.$router.push({
            path: '/issue/' + route.route4,
            query: this.$route.query
        });
      }
      // Todo:跳转到下一个页面,去支付
    },
    gotoHealthInfo: function() {
      // console.log("gotoHealthInfo");
      this.$router.push({
        path: '/project/proposal/ah/HealthInformConfirm',
        name: 'HealthInformConfirm'
      });
    }
  },
  watch: {},
  computed: {},
  created: function() {
    this.policy = JSON.parse(sessionStorage.getItem('policy'));
  }
};
</script>

<style>

</style>
