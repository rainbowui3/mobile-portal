<template>
  <page>
       <top :title="$t('component.switch')" :showBack="true"/>
            <card :title="$t('component.basic')">
                <r-switch  :title="$t('component.required')"  :model="policy" value="status1" ></r-switch>
            </card>
            <card :title="$t('common.disable')">
                <r-switch  :title="$t('component.required')"  :model="policy" value="status2" :disabled="true"></r-switch>
            </card>
            <card :title="$t('common.event')">
                <r-switch  :title="$t('preview.click')"  :model="policy" value="status4" :onClick="onClick"></r-switch>

            </card>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RSwitch} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
export default {
  components: {
    Bottom,
    Top,
    Page,
    RSwitch,
    Card,
  },
  data(){
      return {
           policy:{
               status2:true,
               status4:false
           },
          }
  },
  methods:{
      onClick(value){
          console.log(this.policy.status4)
      },
  }
};
</script>

