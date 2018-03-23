<template>
  <!-- relationToMainInsured -->
  <div>
    <!-- <selector :title="$t('holderInfo.relationToHolder')" :options="options1" :model="dubsidiaryInsuranceInfo" value="relationToHolder" :onChange="onChange" :readonly="readonly"></selector>
    <selector :title="$t('holderInfo.relationToInsured')" :options="options1" :model="dubsidiaryInsuranceInfo" value="relationToMainInsured" :onChange="onChange" :readonly="readonly"></selector> -->
    <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="dubsidiaryInsuranceInfo" value="name" :readonly="readonly" />
    <selector :title="$t('holderInfo.certificateType')" :options="options" :model="dubsidiaryInsuranceInfo" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
    <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="dubsidiaryInsuranceInfo" value="certificateNum" :validator="validateNumInput" :novalidate="isValidateNum" :readonly="readonly" />
    <date-time :title="$t('holderInfo.birthday')" :model="dubsidiaryInsuranceInfo" value="birthdate" :required="true" :onChange="onChange" :readonly="readonly"></date-time>
    <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="dubsidiaryInsuranceInfo" value="mobileNum" :isPhone="true" :novalidate="false" :readonly="readonly" />
    <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="dubsidiaryInsuranceInfo" value="email" :isEmail="true" :readonly="readonly" :novalidate="false" />
  </div>
</template>

<script>
import {
  Page,
  Card,
  RInput,
  RButton,
  Selector,
  DateTime
} from "rainbow-mobile-core";
import Validate from "../utils/Valitate";
import Getbirthday from "../utils/Getbirthday";
import "../../../i18n/holderInfo";
export default {
  components: {
    Card,
    RInput,
    Selector,
    DateTime
  },
  data() {
    return {
      policy: {
        value2: ""
      },
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      options1: [
        { key: "10000", value: "本人" },
        { key: "10001", value: "配偶" },
        { key: "10002", value: "子女" }
      ],
      certificate: {
        certificateId: "10000"
      }
    };
  },
  methods: {
    onChange: function(val) {
      sessionStorage.setItem(
        "dubsidiaryInsuranceInfo-relationToHolder",
        this.dubsidiaryInsuranceInfo.relationToHolder
      );
      console.log(this.dubsidiaryInsuranceInfo.relationToHolder);
      this.dubsidiaryInsuranceInfo.relationToHolder = this.dubsidiaryInsuranceInfo.relationToHolder;
      this.certificate.effortDate = val;
    },
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && !this.isValidateNum) {
        this.dubsidiaryInsuranceInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    }
  },
  props: ["readonly", "dubsidiaryInsuranceInfo"],
  mounted: function() {
    console.log(this.dubsidiaryInsuranceInfo.relationToHolder);
  },
  created: function() {
    sessionStorage.setItem("dubsidiaryInsuranceInfo-relationToHolder", "本人");
  },
  computed: {
    onChangeCertiType: function() {
      if (
        this.dubsidiaryInsuranceInfo.certificateId &&
        this.dubsidiaryInsuranceInfo.certificateId === "10000"
      ) {
        this.isValidateNum = false;
        this.validateNumInput(this.dubsidiaryInsuranceInfo.certificateNum);
      } else {
        this.isValidateNum = true;
      }
    }
  }
};
</script>
<style>
</style>
