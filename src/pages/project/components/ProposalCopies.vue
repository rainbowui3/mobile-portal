<template>  
    <selector  :title="$t('InsuranceNumber')" :options="options" :model="insurancNum" value="nullDate" :onChange="onChange"></selector>   
</template>

<script>
import {Selector} from 'rainbow-mobile-core';
export default {
  components: {   
    Selector
  },
  data(){
    return{
      options:[{"key":"10000","value":"1"},{"key":"10001","value":"2"},{"key":"10002","value":"3"}],
      insurancNum:{
      "nullDate":null
     }
    };
  },
  method:{
    onChange:function(val) {
      this.insurancNum.effortDate=val;
      
    }
  }
};
</script>

<style>

</style>
<i18n>
	"InsuranceNumber":
  en: Insurance number
  zh：投保份数
</i18n>

