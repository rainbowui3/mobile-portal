<template>
  <page>
       <top :title="$t('component.checker')" :showBack="true"/>
       <r-body>
            <card :title="$t('input.iconType')">
                <checker :model="policy" value="value2" :text="`${$t('common.agree')}?`" :onChange="onChange" type="icon"/>
                <checker :model="policy" value="value3" :text="`${$t('common.agree')}?`"  :onChange="onChange" type="icon" :plain="true"/>
            </card>
            <card :title="$t('component.list')">
                <checker :model="policy" value="value4" :data='list' :onChange="onChange" type="list"/>
            </card>
            <card :title="$t('component.list')">
                <checker :disabled="true" :model="policy" value="value5" :data='list' :onChange="onChange" type="list" labelPosition="left"/>
            </card>
            <card :title="$t('input.max')">
                <checker :max="2" :model="policy" value="value5" :data='list' :onChange="onChange" type="list"/>
            </card>
            <card :title="$t('component.radio')">
                <checker :max="1" :model="policy" value="value6" :data='list' :onChange="onChange" type="list"/>
            </card>
             <card :title="$t('common.description')">
                <checker :max="1" :model="policy" value="value7" :data='inlineDescList' :onChange="onChange" type="list"/>
            </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Checker,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/component";
import "../../i18n/input";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Checker,
    RBody
  },
  data(){
      return {
          policy:{
                value:null,
                value1:'1000000',
                value2:false,
                value3:true,
                value4:null,
                value5:[ '10000', '100000' ],
          },
          items1: [{
                key: '1',
                value: 'A'
            }, {
                key: '2',
                value: 'B'
            }, {
                key: '3',
                value: 'C'
        }],
      }
  },
  computed:{
      list(){
          return [{"key":"10000","value":"1万",'disabled':true},{"key":"100000","value":"10万"},{"key":"1000000","value":"100万"},{"key":"10000000","value":"1000万"}]
      },
      inlineDescList(){
          return [
                {key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain'},
                {key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods'},
                {key: '3', value: 'Camel is best, no inline-desc'}
          ]
      } ,
  },
  methods:{
      onChange(value){
            console.log(value)
      }
  }
};
</script>
<style>
</style>
