<template>
  <page>
       <top :title="$t('business.proposalClauseConfirm')" :showBack="true"/>
       <r-body>
       <proposal-clause-confirm />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProductTop from '../project/components/ProposalClauseConfirm';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProposalClauseConfirm,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

