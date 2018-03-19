<template>
  <page>
       <top :title="$t('business.proposalCopies')" :showBack="true"/>
       <r-body>
          <card>
       <proposal-confirm />
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProposalConfirm from '../project/components/ProposalConfirm';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProposalConfirm,
    RBody
  },
 
};
</script>

<style lang="less">

</style>

