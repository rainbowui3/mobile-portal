<template>  
  <div>
   <picker  :title="$t('proposalCopies.insuredNum')" :options="options" :model="insurancNum" value="number1"  ></picker> 
  </div>
</template>

<script>
import {Picker} from 'rainbow-mobile-core';
import "../../../i18n/proposalCopies";
export default {
  components: {   
    Picker
  },
  data(){
    return{
      options:[["1份","2份","3份","4份","5份","6份","7份","8份","9份","10份"]],
      insurancNum:{
      "number1":["1份"],
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

