<template>
  <page>
       <top :title="$t('component.marquee')" :showBack="true"/>
        <card :title="$t('component.basic')">
                    <marquee :data="list"/>
        </card>
        <card :title="$t('component.row')">
                   <row :title="$t('row.title')">
                        <marquee :data="list"/>
                   </row>    
        </card>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Marquee,Row} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Marquee,
    Row
  },
  data(){
      return {
          list:[{"text":"rainbow mobile 1","onClick":this.onClick},{"text":"rainbow mobile 2","onClick":this.onClick},{"text":"rainbow mobile 3","onClick":this.onClick}]
      }
  },
  methods:{
      onClick(item){
          console.log(item);
      }
  }
};
</script>

