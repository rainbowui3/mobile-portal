<template>
  <page>
       <top :title="$t('home.exapmle')" :showBack="true"/>
            <tab :tabItems="tabItems"/>
            <r-image :list="products"/>
       <bottom :index="3"/>
  </page>
</template>

<script>
import {Page,Tab,RImage} from 'rainbow-mobile-core';
import Bottom from '../components/Bottom';
import Top from '../components/Top';
import Female from '../assets/female.jpg';
import Fire from '../assets/fire.png';
import Jcx from '../assets/jcx.jpg';
import Jtgj from '../assets/jtgj.jpg';
import Ly from '../assets/ly.jpg';
import Tthj from '../assets/tthj.jpg';
import Xpx from '../assets/xpx.jpg';
import Ycx from '../assets/ycx.jpg';
import Ywx from '../assets/ywx.jpg';
import Zrx from '../assets/zrx.jpg';
export default {
  components: {
    Bottom,
    Top,
    Page,
    Tab,
    RImage
  },
  data(){
      return {
        products:[
          {"class":"product","src":Ly,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Jcx,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Female,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Fire,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Jtgj,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Tthj,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Xpx,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Ycx,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Ywx,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Zrx,'onClick':this.goto,'param':'/project/ly'}
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
        { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('demo.popular'),"onClick":this.go},
        { 'selected':false,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('demo.auto'),"onClick":this.go},
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

