<template>
  <page>
       <top :title="$t('home.exapmle')" :showBack="true"/>
       <r-body>
            <tab :tabItems="tabItems"/>
            <r-image :list="products"/>
       </r-body>
       <bottom :index="3"/>
  </page>
</template>

<script>
import {Page,Tab,RImage,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import Jtgj from '../../assets/jtgj.jpg';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Tab,
    RImage,
    RBody
  },
  data(){
      return {
        products:[
          {class:"product",src:Jtgj,onClick:this.goto,param:'/project/proposal/auto2C/Auto2cUserInfo'},
        ]
      }
  },
  methods:{
      goto(param){
        window.location.hash=param;
      },
      go(index){
        switch (index) {
          case 0:
            window.location.hash="/demo";
            break;
          case 1:
            window.location.hash="/demo/auto";
            break;
          case 2:
            window.location.hash="/demo/gi";
            break;
          case 3:
            window.location.hash="/demo/ah";
            break;
          default:
            window.location.hash="/demo";
            break;
        }
      }
  },
  computed:{
     tabItems(){
      return [
        { 'selected':false,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('demo.popular'),"onClick":this.go},
        { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('demo.auto'),"onClick":this.go},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('demo.gi'),"onClick":this.go},
        { 'selected':false, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('demo.ah'),"onClick":this.go },
      ]
    },
  }
};
</script>
<style>
.product{
  height: 220px;
}
</style>

