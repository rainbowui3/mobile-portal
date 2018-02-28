<template>  
    <selector  :title="$t('DurationOfInsurance')" :options="durationOptions" :model="duration" value="durationId" :onChange="onChange"></selector>   
</template>

<script>
import {Selector} from 'rainbow-mobile-core';
export default {
  components: {   
    Selector
  },
  data(){
    return{
      durationOptions:[{"key":"10000","value":"一年"},{"key":"10001","value":"两年"},{"key":"10002","value":"三年"}],
      duration:{
        "durationId":"10000",
     }
    };
  },
  method:{
    onChange:function(val) {
      this.duration.effortDate=val;
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

