<template>
  <r-page>
       <top :title="$t('business.proposalClauseConfirm')" :showBack="true"/>
       <r-body>
          <r-card>
       <proposal-clause-confirm />
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import ProposalClauseConfirm from '../project/components/ProposalClauseConfirm';
import '../../i18n/business';

export default {
  components: {
    ProposalClauseConfirm
  }
};
</script>

<style lang="less">

</style>

