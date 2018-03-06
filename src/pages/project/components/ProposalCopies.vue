<template>  
  <div>
   <picker  :title="$t('投保份数')" :options="options" :model="insurancNum" value="number1"  ></picker> 
  </div>
</template>

<script>
import {Picker} from 'rainbow-mobile-core';
export default {
  components: {   
    Picker
  },
  data(){
    return{
      options:[["1","2","3","4","5","6","7","8","9","10"]],
      insurancNum:{
      "number1":["1"],
      }
    };
  },
  methods:{
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

