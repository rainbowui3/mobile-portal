<template>
  <page>
       <top :title="$t('component.tab')" :showBack="true"/>
       <r-body>
              <tab :tabItems="tabItems"/>
              <card :title="$t('component.tab')">
                  <tab :tabItems="swTabItems"/>
                   <swiper :model="index">
                    <swiper-item ><div class="black"><h2 class="title fadeInUp animated">谁人没试过犹豫</h2></div></swiper-item>
                    <swiper-item ><div class="black"><h2 class="title fadeInUp animated">达到理想不太易</h2></div></swiper-item>
                    <swiper-item ><div class="black"><h2 class="title fadeInUp animated">自信打不死的心态活到老</h2></div></swiper-item>
                  </swiper>
              </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Tab,Card,SwiperItem,Swiper,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Tab,
    Card,
    Swiper,
    SwiperItem,
    RBody
  },
  data(){
    return {
      index:0
    }
  },
  computed:{
    tabItems(){
      return [
        { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('component.core'),"onClick":this.core},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('component.advanced'),"onClick":this.advanced},
        { 'selected':false, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'),"onClick":this.business },
        { 'selected':false, 'showdot':false, 'disabled': true, 'badge': '','text': this.$t('component.project')},
      ]
    },
    swTabItems(){
      return [
        { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('component.core'),"onClick":this.goto},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('component.advanced'),"onClick":this.goto},
        { 'selected':false, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'),"onClick":this.goto },
      ]
    }
  },
  methods:{
    core(){
      window.location.hash="/component/example/tab";
    },
    advanced(){
      window.location.hash="/component/example/tab";
    },
    business(){
      window.location.hash="/component/example/tab";
    },
    goto(index){
      this.index=index;
    },
   
  }
};
</script>

<style lang="less">

</style>

