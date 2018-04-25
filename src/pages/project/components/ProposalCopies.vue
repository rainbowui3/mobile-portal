<template>  
  <div>
    <r-number :title="$t('proposalCopies.insuredNum')" :model="model" styleClass="round" :min="0" :max="10" value="insuredNum"/>
  </div>
</template>

<script>
import '../../../i18n/proposalCopies';
import {RNumber} from 'rainbow-mobile-number';
export default {
  components: {
    RNumber
  },
  props: {
    model: Object
  }
};
</script>

<style>

</style>

