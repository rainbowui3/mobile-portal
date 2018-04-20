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

import ProposalConfirm from '../project/components/ProposalConfirm';
import '../../i18n/business';

export default {
  components: {
    ProposalConfirm
  }

};
</script>

<style lang="less">

</style>

