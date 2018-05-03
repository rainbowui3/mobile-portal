<template>  
  <div>
    <r-selector  :title="$t('insuranceDurationCurrency.poi')" :options="durationOptions" :model="duration" value="durationId" :onChange="onChange" ></r-selector>   
  </div>
</template>

<script>
import '../i18n/insuranceDurationCurrency';
export default {
  data() {
    return {
      durationOptions: [{'key': '10000', 'value': '一年'}, {'key': '10001', 'value': '两年'}, {'key': '10002', 'value': '三年'}],
      duration: {
        'durationId': '10000'
     }
    };
  },
  methods: {
    onChange: function(val) {
      this.duration.effortDate = val;
    }
  }
};
</script>

<style>

</style>
<i18n>
	"DurationOfInsurance":
  en: Duration Of Insurance
  zh：保险期间
</i18n>

