<template>
  <page>
       <top :title="$t('business.subsidiaryInsuredInfo')" :showBack="true"/>
       <r-body>
       <subsidiary-insured-info />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import SubsidiaryInsuredInfo from '../project/components/SubsidiaryInsuredInfo';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    SubsidiaryInsuredInfo,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

