<template>
  <div>
    <!-- <r-selector  :title="$t('与投保人关系:')" :options="options1" :model="model" value="relationToHolder" :onChange="onChange" :readonly="readonly"></r-selector> -->
    <r-input :title="$t('holderInfo.name')" :placeholder="$t('holderInfo.placeholderName')" :model="model" value="name" :readonly="readonly" :required="required" :novalidate="false"/>
    <r-selector :title="$t('holderInfo.certificateType')" :options="options" :model="model" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly" :required="required" :novalidate="false"></r-selector>
    <r-input v-if="isValidateNum == false" :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="certificateNum" :validator="validateNumInput" :novalidate="false" :readonly="readonly" :required="required"/>
    <r-input v-else-if="isValidateNum == true" :placeholder="$t('holderInfo.placeholderID')" :title="$t('holderInfo.ID')" :model="model" value="certificateNum" :readonly="readonly" :required="required" :novalidate="false"/>
    <r-date-time v-if="isValidateNum" :title="$t('holderInfo.birthday')" :model="model" value="birthdate" :required="required" :onChange="onChange" :readonly="readonly" :novalidate="false"></r-date-time>
    <r-date-time v-else :title="$t('holderInfo.birthday')" :model="model" value="birthdate" :required="required" :onChange="onChange" :readonly="true" :novalidate="false"></r-date-time>
    <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="model" value="mobileNum" :isPhone="true" :novalidate="false" :readonly="readonly" />
    <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="model" value="email" :isEmail="true" :readonly="readonly" :novalidate="false" />
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
        { key: '10000', value: '身份证' },
        { key: '10002', value: '护照' }
      ],
      options1: [
        { key: '10000', value: '本人' },
        { key: '10001', value: '配偶' },
        { key: '10002', value: '子女' }
      ],
      certificate: {
        certificateId: '10000'
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
        msg: this.$t('input.validate')
      };
    }
  },
  computed: {
    onChangeCertiType: function() {
      if (this.model.certificateId && this.model.certificateId === '10000') {
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
