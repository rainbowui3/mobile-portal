<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card :title="$t('insuredInfoEntryShortTerm.holder')">
        <holder-info v-bind:readonly="readonly" v-bind:model="policy.holderInfo"></holder-info>
      </card>
      <card :title="$t('insuredInfoEntryShortTerm.insured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.insuredInfo" value="relationToHolder" />
        <insured-info v-if="policy.insuredInfo.relationToHolder && policy.insuredInfo.relationToHolder != '' && policy.insuredInfo.relationToHolder != '本人'" v-bind:readonly="readonly" v-bind:model="policy.insuredInfo"></insured-info>

      </card>

      <card :title="$t('insuredInfoEntryShortTerm.subsidiaryInsured')">
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToHolder'" :model="policy.dubsidiaryInsuranceInfo" value="relationToHolder" />
        <choose-relationship :datas="datas1" :title="'holderInfo.relationToInsured'" :model="policy.dubsidiaryInsuranceInfo" value="relationToMainInsured" />
        <subsidiary-insured-info v-if="policy.dubsidiaryInsuranceInfo.relationToHolder && policy.dubsidiaryInsuranceInfo.relationToHolder != '' && policy.dubsidiaryInsuranceInfo.relationToHolder != '本人'" v-bind:readonly="readonly" v-bind:model="policy.dubsidiaryInsuranceInfo"></subsidiary-insured-info>
      </card>
      <card class="addInsuredButton">
        <r-button type="primary" :onClick="clickHome">{{$t('insuredInfoEntryShortTerm.addMore')}}</r-button>
      </card>
      <proposal-clause-confirm/>
    </r-body>

    <tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </tab-bar>

  </page>

</template>

<script>
import {
  Page,
  RBody,
  Card,
  RImage,
  RButton,
  Swiper,
  RSwitch,
  DateTime,
  Tab,
  RTable,
  List,
  Selector,
  TabBar,
  Cell
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import ProposalConfirm from "../../components/ProposalConfirm";
import ChooseRelationship from "../../components/ChooseRelationship";
import "../../../../i18n/insuredInfoEntryShortTerm";
import "../../../../i18n/input";
import "../../../../i18n/project";

export default {
  components: {
    Page,
    Card,
    RButton,
    TabBar,
    Top,
    Bottom,
    HolderInfo,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalConfirm,
    ProposalClauseConfirm,
    RBody,
    ChooseRelationship
  },
  methods: {
    clickHom() {}
  },
  data() {
    return {
      readonly: false,
      linkInsuredConfirmUrl: "/project/proposal/ah/InsuredInfoConfirmNormal",
      policy: {
        holderInfo: {
          name: "王小明",
          certificateId: "10000",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        insuredInfo: {
          relationToHolder: "本人",
          name: "王小明",
          certificateId: "10000",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder: "本人",
          relationToMainInsured: "本人",
          name: "王小明",
          certificateId: "10000",
          certificateNum: "65300119520705283x",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      },
      amount: "100",
      buttonName: "proposalConfirm.confirmInsure",
      relationToHolder: [
        { key: "10000", value: "本人" },
        { key: "10001", value: "配偶" },
        { key: "10002", value: "子女" }
      ],
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
    onClick: function() {
      this.$router.push("/project/proposal/ah/InsuredInfoConfirmNormal");
    },
    clickHome: function() {}
  }
  // ,
  // watch:{
  //     policy:{
  //         handler:function(policy){
  //             localStorage.save(policy)
  //         },
  //         deep:true
  //     }
  // },
  // mounted:function(){
  //     console.log(this.policy)
  // }
};
</script>
<style>
.addInsuredButton {
  margin-bottom: 5px;
}
</style>
