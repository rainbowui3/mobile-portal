<template>
  <div>
    <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="model" value="name" :readonly="readonly" />
    <selector :title="$t('holderInfo.certificateType')" :options="options" :model="model" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
    <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="certificateNum" :validator="validateNumInput" :novalidate="isValidateNum" :readonly="readonly" />
    <date-time :title="$t('holderInfo.birthday')" :model="model" value="birthdate" :required="true" :readonly="readonly"></date-time>
    <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="model" value="mobileNum" :isPhone="true" :novalidate="false" :readonly="readonly" />
    <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="model" value="email" :isEmail="true" :readonly="readonly" :novalidate="false" />
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
import "../../../i18n/input";
export default {
  components: {
    Card,
    RInput,
    Selector,
    DateTime
  },
  data() {
    return {
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      isValidateNum: false
    };
  },
  methods: {
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && !this.isValidateNum) {
        this.model.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    }
  },
  props: {
    readonly: Boolean,
    model: Object
  },
  computed: {
    onChangeCertiType: function() {
      if (this.model.certificateId && this.model.certificateId === "10000") {
        this.isValidateNum = false;
        this.validateNumInput(this.model.certificateNum);
      } else {
        this.isValidateNum = true;
      }
    }
  }
};
</script>
<style>

</style>
