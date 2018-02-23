<template>
  <page>
       <top :title="$t('component.component')" :showBack="true"/>
         <tab :tabItems="tabItems"/>
         <grid :data="gridItems"/>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Grid} from 'rainbow-mobile-core';
import i18n from '../../i18n/index';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import {Tab} from 'rainbow-mobile-core';
export default {

  components: {
    Bottom,
    Top,
    Tab,
    Page,
    Grid
  },
  data() {
    return {}
  },
  computed: {
    tabItems(){
      return [
        { 'selected':false,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('component.core'),"onClick":this.core},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('component.advanced'),"onClick":this.advanced},
        { 'selected':true, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'),"onClick":this.business },
      ]
    },
    gridItems(){
      return [
        { 'icon':"fa fa-address-card ",'text': this.$t('component.address')},

      ]
    }
  },
  methods:{
    core(){
      window.location.hash="/component/core";
    },
    advanced(){
      window.location.hash="/component/advanced";
    },
    business(){
      window.location.hash="/component/business";
    }
  }
};
</script>

<style lang="less">

</style>

