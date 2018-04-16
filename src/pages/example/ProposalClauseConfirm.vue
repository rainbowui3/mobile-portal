<template>
  <page>
       <top :title="$t('business.proposalClauseConfirm')" :showBack="true"/>
       <r-body>
          <card>
       <proposal-clause-confirm />
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RTable, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProposalClauseConfirm from '../project/components/ProposalClauseConfirm';
import '../../i18n/business';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProposalClauseConfirm,
    RBody
  }
};
</script>

<style lang="less">

</style>

