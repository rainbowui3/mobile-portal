<template>
   <page>
       <r-body>
           <card>
               <list :title="$t('preview.title')" :value="value" :data="list"/>
           </card>
           <div>

           </div>
       </r-body>
   </page>
</template>

<script>
import { Page, List, Card, RBody } from "rainbow-mobile-core";
import Bottom from "../../../componrnts/Bottom";
import Top from "../../../components/Top";
import "../../../i18n/homeShowOne";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    Pay,
    RBody
  },
   computed:{
    value(){
      return `${this.$t('homeShowOne.title')}`;
    },
    list(){
       return [{
        label(){
            return[{
                a:`${this.$t('homeShowOne.content1')}`,
                b:`${this.$t('homeShowOne.content2')}`,
            }]
        },
        value: '3.29'
      }]
     }
  }
};
</script>
<style lang="less">

</style>
