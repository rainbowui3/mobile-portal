<template>
  <page>
       <top :title="$t('business.planSelection')" :showBack="true"/>
       <r-body>
          <card>
       <plan-selection />
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import PlanSelection from '../project/components/PlanSelection';
import "../../i18n/business";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    PlanSelection,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

