//添加更多被保险人组件
<template>
  <card>
      <box :padding="padding">
          <r-button type="primary" :onClick="addInsured">{{$t('添加更多被保险人')}}</r-button>
      </box>
  </card>
</template>
<script>
import {Box, Card, RButton} from 'rainbow-mobile-core';
export default {
    components:{
        Box,
        Card,
        RButton
    },
    data:function(){
        return{
            padding:"10px 10px",
        }
    },
    methods:{
        addInsured:function(){
            console.log("addInsured");
        }
    },
    computed:{

    },
    mounted:function(){

    }
}
</script>
<style>

</style>
<i18n>

</i18n>