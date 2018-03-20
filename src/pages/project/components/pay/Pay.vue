<template>
<div>
    <previewer :title="$t('pay.total')" :value="`¥1024`" :data="list"  :buttons="buttons1"/>
</div>
</template>

<script>
import { Card, RInput, Selector, Grid, Row} from "rainbow-mobile-core";
import { Previewer } from "rainbow-mobile-previewer";
export default {
  components: {
    Card,
    RInput,
    Selector,
    Grid,
    Row,
    Previewer
  },
  props: {},

  data() {
    return {
      
    };
    
  },

  methods: {
    onChange(val) {
      this.policy.effortDate = val;
    }
  },
  computed: {
    list(){
      return [{
        label: this.$t('pay.number'),
        value: this.$t('H000017008452494')
      },
       {
        label: this.$t('pay.name'),
        value: this.$t('空中飞人 航空意外险')
      }];
    },
    gridItems() {
      return [{ icon: "fa fa-address-card" }];
    },
    buttons1() {
      return [
        {
          style: "primary",
          text: this.$t("pay.weChat")
        },
        {
          style: "primary",
          text: this.$t("pay.alipay")
          // link: "/"
        }
        
      ];
    }
  }
};
</script>

<style lang="less">

</style>



