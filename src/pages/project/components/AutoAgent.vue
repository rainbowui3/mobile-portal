<template>
    <div>
        <row :title="$t('autoAgent.belongToHandler')" :onClick="goto" isLink="true"></row>
        <row :title="$t('autoAgent.agent')" :onClick="goto" isLink="true"></row>
        <picker :title="$t('autoAgent.agreementNo')" :options="list1" :model="policy" value="value1" :onChange="onChange" :readonly="true" ></picker>
        
    </div>
</template>

<script>
import {Row,Picker} from "rainbow-mobile-core";
import i18n from "../../../i18n/autoAgent";
export default {
  components: { 
    Row,
    Picker
  },
  data() {
    return {
        policy:{
            value1:""
        }
    };
  },
  methods: {
           
      list1(){
          return [{"key":"10000","value":"其他归属经办人1",'disabled':true},{"key":"100000","value":"其他归属经办人2"},{"key":"1000000","value":"其他归属经办人3"},{"key":"10000000","value":"其他归属经办人3"}]
      }
  },
  props: {
  }
};
</script>
<style>
</style>
