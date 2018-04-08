<template>
    <div>
        <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="holderInfo" value="name" :readonly="readonly" />
        <selector :title="$t('holderInfo.certificateType')" :options="options" :model="holderInfo" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
        <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="holderInfo" value="certificateNum" :validator="validateNumInput" :novalidate="isValidateNum" :readonly="readonly" />
        <date-time :title="$t('holderInfo.birthday')" :model="holderInfo" value="birthdate" :required="true"  :readonly="readonly"></date-time>
        <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="holderInfo" value="mobileNum" :isPhone="true" :novalidate="false" :readonly="readonly" />
        <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="holderInfo" value="email" :isEmail="true" :readonly="readonly" :novalidate="false" />
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
      policy: {
        value2: ""
      },
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      isValidateNum:false
    };
  },
  methods: {
    validateNumInput(value){ 
      var isCertification = Validate.validateIdNo(value);
      if(isCertification && !this.isValidateNum){
          this.holderInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
        }
      return {
        valid:  isCertification===true,
        msg: this.$t("input.validate")
      };       
    }
  },
  props: {
    readonly: Boolean,
    holderInfo: Object
  },
  computed:{
    onChangeCertiType:function(){   
      if(this.holderInfo.certificateId && this.holderInfo.certificateId ==="10000" ){
        this.isValidateNum = false;
        this.validateNumInput(this.holderInfo.certificateNum);
      }else {
        this.isValidateNum = true;
      }
    }
  }
};
</script>
<style>
</style>
