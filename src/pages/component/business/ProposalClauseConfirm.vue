<template>
  <r-page>
       <top :title="$t('business.proposalClauseConfirm')" :showBack="true"/>
       <r-body>
          <r-card>
       <proposal-clause-confirm :model="pageModel" />
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import ProposalClauseConfirm from '../../../components/ProposalClauseConfirm';
import '../../../i18n/business';

export default {
  components: {
    ProposalClauseConfirm
  },
   data() {
        return {
            pageModel: {
                clauseConfirm: false,
                toastShow: false
            }
        };
    }
};
</script>

<style lang="less">

</style>

