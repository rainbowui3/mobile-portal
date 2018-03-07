<template>
  <page>
       <top :title="$t('business.proposalSubmitPay')" :showBack="true"/>
       <r-body>
       <proposal-submitPay />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProposalSubmitPay from '../project/components/ProposalSubmitPay';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProposalSubmitPay,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

