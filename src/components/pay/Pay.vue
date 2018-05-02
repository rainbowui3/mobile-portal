<template>
<div>
    <r-previewer :title="$t('pay.total')" :value="`¥1024`" :data="list"  :buttons="buttons1"/>
</div>
</template>

<script>
import { RPreviewer } from 'rainbow-mobile-previewer';
import '../../i18n/pay';

export default {
  components: {
    RPreviewer
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
    list() {
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
      return [{ icon: 'fa fa-address-card' }];
    },
    buttons1() {
      return [
        {
          style: 'primary',
          text: this.$t('pay.weChat')
        },
        {
          style: 'primary',
          text: this.$t('pay.alipay')
          // link: "/"
        }

      ];
    }
  }
};
</script>

<style lang="less">

</style>



