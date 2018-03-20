<template>
   <page>
       <top  :title="$t('chooseHandler.belongAgent')" :showBack="true"/>
       <r-body>
           <card :title="$t('chooseHandler.usualBelongAgent')">     
               <checker  :max="1" :model="policy" value="value4" :data='commonlyList'  type="list"/>
            </card> 
           <card :title="$t('chooseHandler.otherBelongAgent')">     
               <checker  :max="1" :model="policy" value="value4" :data='otherList'  type="list"/>
            </card>

       </r-body>
       <tab-bar>
           <cell type="row" >
               <cell><r-button type="primary" class="button-background">{{$t('common.cancel')}}</r-button></cell>
                <cell><r-button type="primary" >{{$t('common.confirm')}}</r-button></cell>
           </cell> 
       </tab-bar>

   </page>
  
</template>
<script>
import {Page,RBody,Card,Cell,Checker,TabBar,RButton} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/chooseHandler";

export default {
    components:{
        Page,
        RBody,
        Card,
        Top,
        Cell,
        Checker,
        TabBar,
        RButton
        
    },
    data(){
        return{
          row:'row',
          padding:'0px',
          policy:{
            value2:"fad",
            value4:null
          }
        }

    },
    methods:{
        onChange(){

        }

    },
    props:{
        model:Object,


    },
    computed:{    
      commonlyList(){
          return [{"key":"10003","value":"常用归属经办人1",'disabled':true},{"key":"100004","value":"常用归属经办人2"},{"key":"1000005","value":"常用归属经办人3"},{"key":"10000006","value":"常用归属经办人3"}]
      },      
      otherList(){
          return [{"key":"10006","value":"其他归属经办人1",'disabled':true},{"key":"100007","value":"其他归属经办人2"},{"key":"1000008","value":"其他归属经办人3"},{"key":"10000009","value":"其他归属经办人3"}]
      }
    }
  
}
</script>

<style>
 .button-background{background-color: white}
</style>

