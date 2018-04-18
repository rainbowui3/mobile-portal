<template>
  <r-page>
       <top :title="$t('business.proposalCopies')" :showBack="true"/>
       <r-body>
          <r-card>
       <proposal-confirm />
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, RTable, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProposalConfirm from '../project/components/ProposalConfirm';
import '../../i18n/business';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProposalConfirm,
    RBody
  }

};
</script>

<style lang="less">

</style>

