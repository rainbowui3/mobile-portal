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
import {Page, Card, RTable, RBody} from 'rainbow-mobile-core';

import PlanSelection from '../project/components/PlanSelection';
import '../../i18n/business';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    PlanSelection,
    RBody
  }

};
</script>

<style lang="less">

</style>

