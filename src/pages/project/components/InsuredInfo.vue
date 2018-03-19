<template>
    <div>
        <!-- <selector  :title="$t('与投保人关系:')" :options="options1" :model="insuredInfo" value="relationToHolder" :onChange="onChange" :readonly="readonly"></selector> -->
        <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="insuredInfo" value="name" :readonly="readonly" />
        <selector :title="$t('holderInfo.certificateType')" :options="options" :model="insuredInfo" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
        <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="insuredInfo" value="certificateNum" :validator="validateNumInput" :validate="isValidateNum" :readonly="readonly" />
        <date-time :title="$t('holderInfo.birthday')" :model="insuredInfo" value="birthdate" :required="true" :onChange="onChange" :readonly="readonly"></date-time>
        <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="insuredInfo" value="mobileNum" :isPhone="true" :validate="false" :readonly="readonly" />
        <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="insuredInfo" value="email" :isEmail="true" :validate="false" :readonly="readonly" />
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
import i18n from "../../../i18n/holderInfo";
export default {
  components: {
    Card,
    RInput,
    Selector,
    DateTime
  },
  props: ["readonly", "insuredInfo"],
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
      this.certificate.effortDate = val;
    },
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && !this.isValidateNum) {
        this.insuredInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    }
  },
  computed: {
    onChangeCertiType: function() {
      if (
        this.insuredInfo.certificateId &&
        this.insuredInfo.certificateId === "10000"
      ) {
        this.isValidateNum = false;
        this.validateNumInput(this.insuredInfo.certificateNum);
      } else {
        this.isValidateNum = true;
      }
    }
  }
};
</script>
<style>
</style>
