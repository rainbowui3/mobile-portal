<template>
  <page>
    <top :title="$t('project.studyRisk')" :showBack="true" />
    <r-body>
      <card>
        <insurance-duration-short-term :model="policy" effectiveDate="effectiveDate" expireDate="expireDate" />
      </card>
      <card>
        <r-input :title="$t('insuredInfoStudyRisk.babyName')" :placeholder="$t('insuredInfoStudyRisk.inputBabyName')" :model="babyInfo" value="name" />
        <selector :title="$t('insuredInfoStudyRisk.babyCertificateType')" :options="options" :model="babyInfo" value="certificateId" :onChange="onChangeCertiType.bind(this,'baby')"></selector>
        <r-input v-if="isValidateNumBaby == false" :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="babyInfo" value="certificateNum" :validator="validateNumInputBaby" :novalidate="false" />
        <r-input v-else-if="isValidateNumBaby == true" :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="babyInfo" value="certificateNum" />
        <date-time :title="$t('insuredInfoStudyRisk.babyBirth')" :model="babyInfo" value="birthdate" :required="true"></date-time>
        <r-input :title="$t('insuredInfoStudyRisk.babySchool')" :placeholder="$t('insuredInfoStudyRisk.inputSchool')" :model="babyInfo" value="school" />
        <r-input :title="$t('insuredInfoStudyRisk.babyClass')" :placeholder="$t('insuredInfoStudyRisk.inputClass')" :model="babyInfo" value="class" />
        <selector :title="$t('insuredInfoStudyRisk.relationShip')" :options="options1" :model="babyInfo" value="relationToHolder"></selector>

      </card>
      <card>
        <r-input :title="$t('insuredInfoStudyRisk.name')" :placeholder="$t('insuredInfoStudyRisk.inputName')" :model="holderInfo" value="name" />
        <selector :title="$t('insuredInfoStudyRisk.certificateType')" :options="options" :model="holderInfo" value="certificateId" :onChange="onChangeCertiType.bind(this, 'parent')"></selector>
        <r-input v-if="isValidateNumParent == false" :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="holderInfo" value="certificateNum" :validator="validateNumInputParent" :novalidate="false" />
        <r-input v-else-if="isValidateNumParent == true" :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="holderInfo" value="certificateNum"/>
        <date-time :title="$t('insuredInfoStudyRisk.birth')" :model="holderInfo" value="birthdate" :required="true"></date-time>
        <r-input :title="$t('insuredInfoStudyRisk.phoneNum')" :placeholder="$t('insuredInfoStudyRisk.inputPhoneNum')" :model="holderInfo" value="mobileNum" :isPhone="true" :novalidate="false" />
        <r-input :title="$t('insuredInfoStudyRisk.email')" :placeholder="$t('insuredInfoStudyRisk.inputEmail')" :model="holderInfo" value="email" :isEmail="true" :novalidate="false" />
      </card>

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
  DateTime
} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import Validate from "../../utils/Valitate";
import Getbirthday from "../../utils/Getbirthday";
import "../../../../i18n/insuredInfoStudyRisk";
import "../../../../i18n/input";
import "../../../../i18n/project";
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
    Selector
  },
  data() {
    return {
      holderInfo: {
        name: "王小明",
        certificateId: "10000",
        certificateNum: "",
        birthdate: "2000-01-01",
        mobileNum: "18398768724",
        email: "wangxm@outlook.com"
      },
      babyInfo: {
        relationToHolder: "10000",
        name: "王小明",
        certificateId: "10000",
        certificateNum: "",
        birthdate: "2000-01-01",
        email: "wangxm@outlook.com",
        school: "",
        class: ""
      },
      buttonName: "proposalConfirm.immediatelyInsure",
      amount: "100",
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      isValidateNumBaby: false,
      isValidateNumParent: false,
      options1: [
        { key: "10000", value: "父母" },
        { key: "10001", value: "祖父母" }
      ],
      policy: {
        effectiveDate: "",
        expireDate: ""
      }
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/ah/InsuredInfoConfirmStudyRisk");
    },
    validateNumInputBaby(value) {
      debugger;
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && this.babyInfo.certificateId == "10000") {
        this.babyInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    },
    validateNumInputParent(value) {
      debugger;
      var isCertification = Validate.validateIdNo(value);
      if(isCertification && this.holderInfo.certificateId == "10000"){
        this.holderInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    },
    onChangeCertiType: function(value1, value2) {
      switch (value1) {
        case "baby":
          {
            if (
              this.babyInfo.certificateId &&
              this.babyInfo.certificateId === "10000"
            ) {
              this.isValidateNumBaby = false;
              this.validateNumInput(this.babyInfo.certificateNum);
            } else {
              this.isValidateNumBaby = true;
            }
          }
          break;
        case "parent":
          {
            if (
              this.holderInfo.certificateId &&
              this.holderInfo.certificateId === "10000"
            ) {
              this.isValidateNumParent = false;
              this.validateNumInput(this.holderInfo.certificateNum);
            } else {
              this.isValidateNumParent = true;
            }
          }
          break;
      }
    }
  },
  computed: {}
};
</script>


<style>

</style>

