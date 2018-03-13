<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <insurance-duration-short-term type="day" :model="policyData" :value="jsonParamIDS" />
      <card :title="$t('投保人信息')">
        <holder-info :holderInfo="holderInfo" />
      </card>
      <card :title="$t('被保险人信息')">
        <choose-relationship :datas="datas1" :title="'与投保人关系'" :model="policy.InsuredInfo[0]" value="relationToHolder"/>
        <insured-info v-if="policy.InsuredInfo[0].relationToHolder && policy.InsuredInfo[0].relationToHolder != '' && policy.InsuredInfo[0].relationToHolder != '本人'" :insuredInfo="insuredInfo" />
      </card>
      <card :title="$t('附属被保险人信息')">
        <choose-relationship :datas="datas1" :title="'与投保人关系'" :model="policy.SubsidiaryInsuredInfo[0]" value="relationToHolder"/>
        <choose-relationship :datas="datas1" :title="'与主被保险人关系'" :model="policy.SubsidiaryInsuredInfo[0]" value="relationToMainInsured"/>
        <subsidiary-insured-info v-if="policy.SubsidiaryInsuredInfo[0].relationToHolder && policy.SubsidiaryInsuredInfo[0].relationToHolder != '' && policy.SubsidiaryInsuredInfo[0].relationToHolder != '本人'" :dubsidiaryInsuranceInfo="dubsidiaryInsuranceInfo" />
      </card>
      <card class="addInsured">
        <r-button type="primary" :onClick="clickHome">{{$t('添加更多被保险人')}}</r-button>
      </card>
      <proposal-clause-confirm/>
    </r-body>
    <tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </tab-bar>
  </page>
</template>

<script>
import { Page, Card, TabBar, RButton, RBody } from "rainbow-mobile-core";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import ProposalConfirm from "../../components/ProposalConfirm";
import ChooseRelationship from "../../components/ChooseRelationship";
export default {
  components: {
    Top,
    Card,
    Bottom,
    Page,
    HolderInfo,
    InsuranceDurationShortTerm,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirm,
    TabBar,
    RButton,
    RBody,
    ChooseRelationship
  },
  data() {
    return {
      policy: {},
      holderInfo: {
        name: "王小明",
        certificateId: "10000",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      insuredInfo: {
        // relationToHolder: "本人",
        name: "王小明",
        certificateId: "10000",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      dubsidiaryInsuranceInfo: {
        relationToHolder: "10000",
        relationToMainInsured: "10000",
        name: "王小明",
        certificateId: "10000",
        certificateNum: "295792200001018271",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      amount: "100",
      buttonName: "立即投保",
      policyData: {
        // effectiveDate: "",
        // expireDate: ""
      },
      jsonParamIDS: [
        { bindField: "effectiveDate", required: true },
        { bindField: "expireDate", required: false }
      ],
      datas1: [
        {
          key: "1",
          value: "本人",
          active: true,
          // onClick: this.onClickInsured
        },
        {
          key: "2",
          value: "配偶",
          active: false,
          // onClick: this.onClickInsured
        },
        {
          key: "3",
          value: "子女",
          active: false,
          // onClick: this.onClickInsured
        },
        {
          key: "4",
          value: "父母",
          active: false,
          // onClick: this.onClickInsured
        }
      ],
      // datas2: [
      //   {
      //     key: "10000",
      //     value: "本人",
      //     active: true,
      //     onClick: this.onClickInsured2
      //   },
      //   {
      //     key: "10001",
      //     value: "配偶",
      //     active: false,
      //     onClick: this.onClickInsured2
      //   },
      //   {
      //     key: "10002",
      //     value: "子女",
      //     active: false,
      //     onClick: this.onClickInsured2
      //   },
      //   {
      //     key: "10003",
      //     value: "父母",
      //     active: false,
      //     onClick: this.onClickInsured2
      //   }
      // ],
      // datas3: [
      //   {
      //     key: "10000",
      //     value: "本人",
      //     active: true,
      //     onClick: this.onClickInsured3
      //   },
      //   {
      //     key: "10001",
      //     value: "配偶",
      //     active: false,
      //     onClick: this.onClickInsured3
      //   },
      //   {
      //     key: "10002",
      //     value: "子女",
      //     active: false,
      //     onClick: this.onClickInsured3
      //   },
      //   {
      //     key: "10003",
      //     value: "父母",
      //     active: false,
      //     onClick: this.onClickInsured3
      //   }
      // ]
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/gi/InsuredInfoConfirmNormal");
    },
    clickHome: function() {
      console.log("lalalalala");
    },
    // onClickInsured: function(data) {
    //   console.log(data);
    // }
  },
  created: function() {
    this.policy = JSON.parse(sessionStorage.getItem("POLICY"));
    console.log("policy", this.policy);
  },
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style>
.addInsured {
  margin-bottom: 5px;
}
</style>
