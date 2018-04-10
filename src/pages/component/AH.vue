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
import Female from '../../assets/female.jpg';
import Ly from '../../assets/ly.jpg';
import Ycx from '../../assets/ycx.jpg';
import Ywx from '../../assets/ywx.jpg';
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
          {class:"product",src:Ly,onClick:this.goto,param:{path:"/project/proposal/ah/ProductInfoEntryHealth",name:"ProductInfoEntryHealth",flag:"1"}},
          {class:"product",src:Female,onClick:this.goto,param:{paht:"/project/proposal/ah/ProductInfoEntryHealth",name:"ProductInfoEntryHealth",flag:"2"}},
          {"class":"product","src":Ycx,'onClick':this.goto,'param':'/project/ly'},
          {"class":"product","src":Ywx,'onClick':this.goto,'param':'/project/ly'},
        ]
      }
  },
  methods:{
      goto(param){
        sessionStorage.setItem("ROUTE_FLAG", param.flag);
        this.$router.push({
          path:param.path,
          name:param.name,
          params:{
            flag:param.flag
          }
        })
        // window.location.hash=param;
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
        { 'selected':false,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('demo.auto'),"onClick":this.go},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('demo.gi'),"onClick":this.go},
        { 'selected':true, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('demo.ah'),"onClick":this.go },
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

