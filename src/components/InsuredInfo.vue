<template>
  <div>
    <!-- <r-selector  :title="$t('与投保人关系:')" :options="options1" :model="model" value="relationToHolder" :onChange="onChange" :readonly="readonly"></r-selector> -->
    <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="model" value="CustomerName" :readonly="readonly" :required="required" :novalidate="false" :validator="validateName"/>
    <r-selector :title="$t('holderInfo.certificateType')" :options="options" :model="model" value="IdType" :onChange="onChangeCertiType" :readonly="readonly" :required="required" :novalidate="false"></r-selector>
    <r-input v-if="isValidateNum == false" :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="IdNo" :validator="validateNumInput" :novalidate="false" :readonly="readonly" :required="required"/>
    <r-input v-else-if="isValidateNum == true" :placeholder="$t('holderInfo.placeholderID')" :title="$t('holderInfo.ID')" :model="model" value="IdNo" :readonly="readonly" :required="required" :novalidate="false"/>
    <r-date-time v-if="isValidateNum" :title="$t('holderInfo.birthday')" :model="model" value="DateOfBirth" :required="required" :readonly="readonly" :novalidate="false"></r-date-time>
    <r-date-time v-else :title="$t('holderInfo.birthday')" :model="model" value="DateOfBirth" :required="required" :readonly="true" :novalidate="false"></r-date-time>
    <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="model" value="IndiMobile" :isPhone="true" :novalidate="false" :readonly="readonly" />
    <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="model" value="Email" :isEmail="true" :readonly="readonly" :novalidate="false" />
  </div>
</template>

<script>
import Validate from './utils/Valitate';
import Getbirthday from './utils/Getbirthday';
import '../i18n/holderInfo';
export default {
  props: {
    readonly: Boolean,
    model: Object,
    required: Boolean
  },
  data() {
    return {
      isValidateNum: false,
      policy: {
        value2: ''
      },
      options: [
        { key: '111', value: '居民身份证' },
        { key: '414', value: '普通护照' }
      ]
    };
  },
  methods: {
    validateNumInput(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && !this.isValidateNum) {
        this.model.DateOfBirth = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t('holderInfo.rightID')
      };
    },
    validateName(value) {
      var validateName = Validate.CheckNameReg(value);
      return {
        valid: validateName === true,
        msg: this.$t('holderInfo.rightName')
      };
    }
  },
  computed: {
    onChangeCertiType: function() {
      if (this.model.IdType && this.model.IdType === '111') {
        this.isValidateNum = false;
        this.validateNumInput(this.model.IdNo);
      } else {
        this.isValidateNum = true;
      }
    }
  }
};
</script>
<style>

</style>
