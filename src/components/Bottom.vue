<template>
         <tab-bar :tabItems="tabItems" type="icon"/>
</template>

<script>
import {TabBar} from 'rainbow-mobile-core';
import i18n from '../i18n/index';
export default {
  components: {
    TabBar
  },
  props: {
    index: Number,
  },
  data() {
    return {
      
    };
  },
  methods:{
    
  },
  computed: {
    tabItems(){
      return [
        { 'icon': 'fa fa-home', 'selected':this.index==1?true:false,'showdot':false, 'link': '/', 'badge': '','text': this.$t('common.home') },
        { 'icon': 'fa fa-gears', 'selected':this.index==2?true:false, 'showdot':true, 'link': '/component/core', 'badge': '','text': this.$t('common.component')},
        { 'icon': 'fa fa-automobile', 'selected':this.index==3?true:false, 'showdot':false, 'link': '/demo', 'badge': '2', 'text': this.$t('common.exapmle') },
        { 'icon': 'fa fa-heart', 'selected':this.index==4?true:false, 'showdot':false, 'link': '/donate', 'badge': '','text': this.$t('common.donate') },
      ]
    }
  }
};
</script>

<style lang="less">


</style>

