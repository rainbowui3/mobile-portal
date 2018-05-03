<template>
  <r-page>
       <top :title="$t('business.planSelection')" :showBack="true"/>
       <r-body>
          <r-card>
       <plan-selection />
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import PlanSelection from '../../../components/PlanSelection';
import '../../../i18n/business';

export default {
  components: {
    PlanSelection
  }

};
</script>

<style lang="less">

</style>

