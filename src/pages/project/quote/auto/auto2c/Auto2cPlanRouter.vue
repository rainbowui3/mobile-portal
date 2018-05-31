// 意健险标的页面路由
<template>
  <div>
      <auto2c-plan @showPackage="ifShowPackage" v-if="showPackage"></auto2c-plan>
      <auto2c-custom-plan @showPackage="ifShowPackage" v-else></auto2c-custom-plan>
  </div>
</template>

<script>
import {SessionContext} from 'rainbow-foundation-cache';
import Auto2cPlan from './Auto2cPlan';
import Auto2cCustomPlan from './Auto2cCustomPlan';
export default {
  components: {
      Auto2cPlan,
      Auto2cCustomPlan
  },
  data() {
    return {
        showPackage: true
    };
  },
  created: function() {
      const planType = SessionContext.get('PLAN_TYPE');
      if (planType && planType == 'custom') {
          this.showPackage = false;
      } else {
          this.showPackage = true;
      }
  },
  methods: {
      ifShowPackage(showPackage) {
          this.showPackage = showPackage;
      }

  }
};
</script>

<style>

</style>
