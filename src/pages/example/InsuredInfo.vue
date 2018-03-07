<template>
  <page>
       <top :title="$t('business.insuredInfo')" :showBack="true"/>
       <r-body>
       <insured-info  />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import InsuredInfo from '../project/components/InsuredInfo';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    InsuredInfo,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

