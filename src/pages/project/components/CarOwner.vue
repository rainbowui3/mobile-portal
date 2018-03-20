<template>
    <div>
        <selector :title="$t('carOwner.customerType')" :options="options_cusType" :model="model" value="customerType"/>
        <r-input :title="$t('holderInfo.name')" :model="model" value="name" :placeholder="$t('holderInfo.placeholderName')"/>
        <selector :title="$t('holderInfo.certificateType')" :options="options_certType" :model="model" value="indiIdType"/>
        <r-input :title="$t('holderInfo.ID')" :placeholder="$t('holderInfo.placeholderID')" :model="model" value="idNo"/>
        <r-input :title="$t('holderInfo.mobile')" :placeholder="$t('holderInfo.placeholderMobile')" :model="model" value="tel"/>
        <r-input :title="$t('carOwner.address')" :placeholder="$t('carOwner.inputAddr')" :model="model" value="address"/>
        <r-input :title="$t('holderInfo.email')" :placeholder="$t('holderInfo.placeholderEmail')" :model="model" value="email"/>
    </div>
</template>

<script>
import { Selector,RInput } from "rainbow-mobile-core";
import "../../../i18n/carOwner";
import "../../../i18n/holderInfo";
export default {
  components: {
    Selector,RInput
  },
  props: {},
  data() {
    return {
      model: {},
      options_cusType:[{"key":"1","value":"个人"},{"key":"2","value":"机关"},{"key":"3","value":"企业"}],
      options_certType:[{"key":"1","value":"身份证"},{"key":"2","value":"护照"}],
    };
  },
  methods: {}
};
</script>

<style>

</style>
