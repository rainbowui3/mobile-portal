<template>
  <div>
    <r-input :title="$t('holderInfo.name')" :model="model" value="name" :placeholder="$t('holderInfo.placeholderName')" :required="required" :novalidate="novalidate" />
    <r-selector :title="$t('holderInfo.certificateType')" :options="options_certType" :model="model" value="indiIdType" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="idNo" :required="required" :validator="validateInput" :novalidate="novalidate" />
    <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="model" value="tel" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('carOwner.address')" :placeholder="$t('carOwner.inputAddr')" :model="model" value="address" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="model" value="email"/>
  </div>
</template>

<script>
import '../../../i18n/carOwner';
import '../../../i18n/holderInfo';
import Validate from '../../../components/utils/Valitate';
export default {
  props: {
    required: {
      type: Boolean,
      default: false
    },
    novalidate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      model: {},
      options_certType: [
        { key: '1', value: '身份证' },
        { key: '2', value: '护照' }
      ]
    };
  },
  methods: {
    validateInput: function(value) {
      if (this.model.indiIdType == '1') {
        let result = Validate.validateIdNo(value);
        return {
          valid: result === true,
          msg: this.$t('carOwner.validateId')
        };
      } else {
        return {
          valid: true
        };
      }
    }
  }
};
</script>

<style>

</style>
