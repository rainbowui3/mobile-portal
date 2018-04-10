<template>
  <div>
    <!-- <selector  :title="$t('与投保人关系:')" :options="options1" :model="model" value="relationToHolder" :onChange="onChange" :readonly="readonly"></selector> -->
    <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="model" value="name" :readonly="readonly" />
    <selector :title="$t('holderInfo.certificateType')" :options="options" :model="model" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
    <r-input v-if="isValidateNum == true" :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="certificateNum" :validator="validateNumInput" :novalidate="false" :readonly="readonly" />
    <r-input v-else-if="isValidateNum == false" :placeholder="$t('holderInfo.placeholderID')" :title="$t('holderInfo.ID')" :model="model" value="certificateNum" :readonly="readonly" />
    <date-time :title="$t('holderInfo.birthday')" :model="model" value="birthdate" :required="true" :onChange="onChange" :readonly="readonly"></date-time>
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
import "../../../i18n/holderInfo";
export default {
  components: {
    Card,
    RInput,
    Selector,
    DateTime
  },
  props: {
    readonly: Boolean,
    model: Object
  },
  data() {
    return {
      isValidateNum:true,
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
        this.model.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t("input.validate")
      };
    }
  },
  computed: {
    onChangeCertiType: function() {
      if (this.model.certificateId && this.model.certificateId === "10000") {
        this.isValidateNum = true;
        this.validateNumInput(this.model.certificateNum);
      } else {
        this.isValidateNum = false;
      }
    }
  }
};
</script>
<style>

</style>
