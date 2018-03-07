<template>
  <page>
       <top :title="$t('business.insuranceDurationShortTerm')" :showBack="true"/>
       <r-body>
       <insurance-duration-short-term  />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import InsuranceDurationShortTerm from '../project/components/InsuranceDurationShortTerm';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    InsuranceDurationShortTerm,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

