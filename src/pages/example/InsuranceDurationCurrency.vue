<template>
  <page>
       <top :title="$t('business.insuranceDurationCurrency')" :showBack="true"/>
       <r-body>
       <insurance-duration-currency  />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import InsuranceDurationCurrency from '../project/components/InsuranceDurationCurrency';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    InsuranceDurationCurrency,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

