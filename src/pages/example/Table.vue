<template>
  <page>
       <top :title="$t('component.table')" :showBack="true"/>
       <r-body>
       <card :title="$t('component.basic')">
                <r-table :data="data"/>
       </card>
       <card :title="$t('table.border')">
                <r-table :data="data" :border="true"/>
       </card> 
       <card :title="$t('table.merge')">
                <r-table :data="data1" :border="true"/>
       </card>
       <card :title="$t('table.ctrl')">
                <r-table :data="data2" :border="true"/>
       </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTable,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    RBody
  },
  data(){
    return {
      data:{
        "head":[
          [{'text':'Product'},{'text':'Price'},{'text':'Number'}]
        ],
        "body":[
          [{'text':'Apple'},{'text':'$1.2'},{'text':'1'}],
          [{'text':'Orange'},{'text':'$1.3'},{'text':'10'}]
        ]
      },
      data1:{
        "head":[
          [{'text':'Product'},{'text':'Price'},{'text':'Number'}]
        ],
        "body":[
          [{'text':'Apple','rowspan':'2'},{'text':'$1.2','colspan':'2'}],
          [{'text':'$1.3'},{'text':'10'}]
        ]
      },
      data2:{
        "head":[
          [{'text':'Product'},{'text':'Price'},{'text':'Number'}]
        ],
        "body":[
          [{'text':'Apple','link':'/component/example/card'},{'text':'$1.2'},{'text':'1'}],
          [{'text':'Orange','link':'/component/example/card'},{'text':'$1.3'},{'text':'10'}]
        ]
      },
    }
  },
  computed:{
    
  },
  methods:{
    
  }
};
</script>

<style lang="less">

</style>

