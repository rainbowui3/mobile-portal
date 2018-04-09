<template>
    <page>
        <top :title="$t('insuredInfoEntryHealthSub.title')" :showBack="true" />
        <r-body>
            <!-- 保险期限选择 -->
            <card>
                <insurance-duration-short-term type="day" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate" :readonly="true" />
            </card>
            <!-- 投保人信息 -->
            <card :title="$t('common.holderInfo')">
                <holder-info :model="policy.holderInfo" :readonly="true" />
            </card>
            <!-- 被保人信息 -->
            <card :title="$t('common.insuredInfo')">
                <choose-relationship :datas="datas1" :model="policy.insuredInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" :readonly="true" />
                <insured-info v-if="policy.insuredInfo.relationToHolder != '1'" :model="policy.insuredInfo" :readonly="true" />
                <row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
            </card>
            <!-- 附属被保险人信息 -->
            <card :title="$t('common.subsidiaryInsuredInfo')">
                <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToHolder" :title="$t('holderInfo.relationToHolder')" :readonly="true" />
                <choose-relationship :datas="datas1" :model="policy.subsidiaryInfo" value="relationToMainInsured" :title="$t('holderInfo.relationToInsured')" :readonly="true" />
                <subsidiary-insured-info v-if="policy.subsidiaryInfo.relationToHolder != '1'" :model="policy.subsidiaryInfo" :readonly="true" />
                <row :model="pageModel" :title="$t('insuredInfoEntryHealthSub.healthInfo')" :isLink="true" :onClick="gotoHealthInfo" />
            </card>
        </r-body>
        <tab-bar>
            <proposal-confirm amount="50" :buttonName="'proposalConfirm.submitPay'" :onClick="goto" />
        </tab-bar>
    </page>
</template>

<script>
import {
  Page,
  Card,
  TabBar,
  RBody,
  RButton,
  Cell,
  Selector,
  RInput,
  Row,
  Toast
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import ChooseRelationship from "../../components/ChooseRelationship";
import ProposalConfirm from "../../components/ProposalConfirm";
import HolderInfo from "../../components/HolderInfo";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import "../../../../i18n/insuredInfoEntryHealthSub";
import "../../../../i18n/proposalConfirm";
import "../../../../i18n/holderInfo";

export default {
  components: {
    Page,
    Card,
    TabBar,
    RBody,
    RButton,
    Cell,
    Selector,
    RInput,
    Row,
    Top,
    ChooseRelationship,
    ProposalConfirm,
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    InsuranceDurationShortTerm,
    Toast
  },
  data() {
    return {
      policy: {
        holderInfo: {},
        insuredInfo: {
          relationToHolder: "1"
        },
        subsidiaryInfo: {
          relationToHolder: "1"
        }
      },
      pageModel: {
        clauseConfirmed: false,
        toastShow: false
      },
      datas1: [
        {
          key: "1",
          value: "本人",
          active: true
          // onClick: this.onClickInsured
        },
        {
          key: "2",
          value: "配偶",
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: "3",
          value: "子女",
          active: false
          // onClick: this.onClickInsured
        },
        {
          key: "4",
          value: "父母",
          active: false
          // onClick: this.onClickInsured
        }
      ]
    };
  },
  methods: {
    goto: function() {
      //Todo:跳转到下一个页面,去支付
      console.log("gotoPay");
    },
    gotoHealthInfo: function() {
      // console.log("gotoHealthInfo");
      this.$router.push({
        path:"/project/proposal/ah/HealthInformConfirm",
        name:"HealthInformConfirm"
      });
    }
  },
  watch: {},
  computed: {},
  created: function() {
    if (this.$route.params.policy) {
      this.policy = this.$route.params.policy;
    }
  }
};
</script>

<style>

</style>
