<template>  
  <div>
    <r-number :title="$t('proposalCopies.insuredNum')" :model="model" styleClass="round" :min="copyMin" :max="copyMax" value="NumberOfCopies"/>
  </div>
</template>

<script>
import '../i18n/proposalCopies';
import {RNumber} from 'rainbow-mobile-number';
export default {
  components: {
    RNumber
  },
  props: {
    model: Object,
    showPlanList: Array,
    copyMax: Number,
    copyMin: Number
  },
  created() {
    if (this.model.NumberOfCopies) {
      if (this.model.NumberOfCopies < this.copyMin) {
        this.model.NumberOfCopies = this.copyMin;
      } else if (this.model.NumberOfCopies > this.copyMax) {
        this.model.NumberOfCopies = this.copyMax;
      }
    } else {
      this.model.NumberOfCopies = this.copyMin;
    }
  }
};
</script>

<style>

</style>

