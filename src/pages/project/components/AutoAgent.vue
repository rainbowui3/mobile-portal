<template>
    <div>
        <row :title="$t('autoAgent.belongToHandler')" :model="policy" value="" :onClick="goto" :isLink="true"></row>
        <!--<row :title="$t('autoAgent.agent')" :model="policy" value="" :onClick="goto" :isLink="true"></row>-->
        <picker :title="$t('autoAgent.agent')" :options="list1" :model="policy" value="value1" :onChange="onChange"></picker>     
        <picker :title="$t('autoAgent.agreementNo')" :options="list1" :model="policy" value="value1" :onChange="onChange"></picker>
        
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
            value1:[],
        },
        list1: [["其他归属经办人1","其他归属经办人2","其他归属经办人3","其他归属经办人4"]]
    };
  },
  methods: {
      onChange(){

      },
      goto(event){
          window.location.hash='/project/proposal/auto2e/ChooseHandler';       
      }
  },
  props: {
  }
};
</script>
<style>
</style>
