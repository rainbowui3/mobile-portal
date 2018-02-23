<template>
  <page>
       <top :title="$t('component.step')" :showBack="true"/>
            <card>
                <step :step='step' :data='list1' />
            </card>
           <card>
                <step :step='step' :data='list1'  :vertical="true" styles='height:250px'/>
            </card>

          
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Step,RButton} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Step,
    RButton
  },
  methods:{
      add(){
          this.step++;
      },
      sub(){
          this.step--;
      }
  },
  data(){
      return {
          step:1
      }
  },
  computed:{
    list(){
      return [
        { 'title':this.$t('step.step1')},
        { 'title':this.$t('step.step2')},
        { 'title':this.$t('step.step3')},
      ]
    },
    list1(){
      return [
        { 'title':this.$t('step.step1'),'isDone':true,'lineSpan':15},
        { 'title':this.$t('step.step2'),'isDone':true,'lineSpan':30,'tip':this.$t('common.cancel'),'process':70},
        { 'title':this.$t('step.step3'),'isDone':false,'lineSpan':10},
      ]
    },
  },
};
</script>

