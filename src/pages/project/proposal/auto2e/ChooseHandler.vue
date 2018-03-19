<template>
   <page>
       <top  :title="$t('归属经办人')" :showBack="true"/>
       <r-body>
           <card :title="$t('常用归属经办人')">     
               <checker  :max="1" :model="policy" value="value4" :data='commonlyList' :onChange="onChange" type="list"/>
            </card>
           <card :title="$t('其他归属经办人')">     
               <checker  :max="1" :model="policy" value="value4" :data='otherList' :onChange="onChange" type="list"/>
            </card>

       </r-body>
       <tab-bar>
           <cell type="row" >
               <cell><r-button type="primary" class="button-background">{{$t('取消')}}</r-button></cell>
                <cell><r-button type="primary" >{{$t('确定')}}</r-button></cell>
           </cell> 
       </tab-bar>

   </page>
  
</template>
<script>
import {Page,RBody,Card,Cell,Checker,TabBar,RButton} from "rainbow-mobile-core";
import Top from "../../../../components/Top";

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
            value4:""
          }
        }

    },
    props:{
        model:Object,


    },
    computed:{    
      commonlyList(){
          return [{"key":"10000","value":"常用归属经办人1",'disabled':true},{"key":"100000","value":"常用归属经办人2"},{"key":"1000000","value":"常用归属经办人3"},{"key":"10000000","value":"常用归属经办人3"}]
      },      
      otherList(){
          return [{"key":"10000","value":"其他归属经办人1",'disabled':true},{"key":"100000","value":"其他归属经办人2"},{"key":"1000000","value":"其他归属经办人3"},{"key":"10000000","value":"其他归属经办人3"}]
      }
    }
  
}
</script>

<style>
 .button-background{background-color: white}
</style>

