<template>
    <page>
        <top :title="$t('project.studyRisk')" :showBack="true" />
        <r-body>
            <card>
                <insurance-duration-short-term type="minute" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
            </card>
            <card>
                <r-input :title="$t('insuredInfoStudyRisk.babyName')" :placeholder="$t('insuredInfoStudyRisk.inputBabyName')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <selector :title="$t('insuredInfoStudyRisk.babyCertificateType')" :options="options" :model="policy.holderInfo" value="certificateId" :readonly="readonly"></selector>
                <r-input :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <date-time :title="$t('insuredInfoStudyRisk.babyBirth')" :model="policy.holderInfo" value="birthdate" :required="true" :readonly="readonly"></date-time>
                <r-input :title="$t('insuredInfoStudyRisk.babySchool')" :placeholder="$t('insuredInfoStudyRisk.inputSchool')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <r-input :title="$t('insuredInfoStudyRisk.babyClass')" :placeholder="$t('insuredInfoStudyRisk.inputClass')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <selector :title="$t('insuredInfoStudyRisk.relationShip')" :options="options1" :model="policy.babyInfo" value="relationToHolder" :readonly="readonly"></selector>

            </card>
            <card>
                <r-input :title="$t('insuredInfoStudyRisk.name')" :placeholder="$t('insuredInfoStudyRisk.inputName')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <selector :title="$t('insuredInfoStudyRisk.certificateType')" :options="options" :model="policy.holderInfo" value="certificateId" :readonly="readonly"></selector>
                <r-input :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <date-time :title="$t('insuredInfoStudyRisk.birth')" :model="policy.holderInfo" value="birthdate" :required="true" :readonly="readonly"></date-time>
                <r-input :title="$t('insuredInfoStudyRisk.phoneNum')" :placeholder="$t('insuredInfoStudyRisk.inputPhoneNum')" :model="policy.holderInfo" value="mobileNum" :isPhone="true" :readonly="readonly" />
                <r-input :title="$t('insuredInfoStudyRisk.email')" :placeholder="$t('insuredInfoStudyRisk.inputEmail')" :model="policy.holderInfo" value="email" :isEmail="false" :readonly="readonly" />
            </card>
            <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
            <!-- 未确认条款后弹出的提示框 -->
            <toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
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
  TabBar,
  Card,
  RInput,
  RSwitch,
  Selector,
  DateTime,
  Toast
} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import Validate from "../../utils/Valitate";
import Getbirthday from "../../utils/Getbirthday";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import "../../../../i18n/insuredInfoStudyRisk";
import "../../../../i18n/insuredInfoEntryHealthSub";
export default {
  components: {
    Page,
    Top,
    RBody,
    TabBar,
    Card,
    RInput,
    RSwitch,
    ProposalConfirm,
    InsuranceDurationShortTerm,
    DateTime,
    Selector,
    ProposalClauseConfirm,
    Toast
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      // holderInfo: {
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "295792200001018271",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // insuredInfo: {
      //   relationToHolder: "1",
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "295792200001018271",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      buttonName: "proposalConfirm.submitPay",
      amount: "100",
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      options1: [
        { key: "10000", value: "父母" },
        { key: "10001", value: "祖父母" }
      ],
      isValidateNum: false,
      readonly: true,
      policy: {
        // effectiveDate: "",
        // expireDate: ""
      }
    };
  },
  methods: {
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.removeItem("policy");
        this.$router.push("/project/proposal/payStatus");
      } else {
        this.pageModel.toastShow = true;
      }
    }
  },
  created: function() {
    this.policy  = JSON.parse(sessionStorage.getItem("policy"));
  }
};
</script>


<style>

</style>

