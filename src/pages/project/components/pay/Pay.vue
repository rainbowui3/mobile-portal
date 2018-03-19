<template>
<div>
    <r-input :title="$t('pay.number')"  :model="policyNumber" value="value19"/>

    <selector  :title="$t('pay.name')" :options="options" :model="policy" value="index" @onChange="onChange"></selector>

    <r-input :title="$t('pay.total')"  :model="policy" value="value"/>
    
   <!-- <grid  :data="gridItems" /> -->
    <row :title="$t('pay.weChat')"  link='/component/example/preview' ></row>
    <row :title="$t('pay.alipay')"  link='/component/example/alipay' ></row>

</div>
</template>

<script>
import { Card, RInput, Selector ,Grid,Row} from "rainbow-mobile-core";
export default {
  components: {
    Card,
    RInput,
    Selector,
    Grid,
    Row
  },
  props: {},

  data() {
    return {
      policyNumber: {
        value19: "H000017008452494",
        value: ""
      },
      options: [
        { key: "A", value: "空中飞人" },
        { key: "B", value: "人身财产险" }
      ],
      policy: {
        nullDate: null,
        index: "空中飞人 航空意外险",
      }
      
    };
  },

  methods: {
    onChange(val) {
      this.policy.effortDate = val;
    }   
  },
  computed: {
    gridItems() {
      return [{ "icon": "fa fa-address-card" }]
    }
  },

};
</script>

<style lang="less">

</style>



