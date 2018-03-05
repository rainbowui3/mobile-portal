<template>
<div>
        <r-header :title="title" :showBack="showBack" :backText="this.$t('common.back')" :showMore="true" :onClickMore="onClickMore"></r-header>
        <actionsheet :model="showMenu" value="status" :menuList="menuList" :headerHtml="headerHtml" :onClick="onClickSheet"/>
</div>
</template>

<script>
import { RHeader,Actionsheet} from 'rainbow-mobile-core';
import i18n from '../i18n/index';
import Bottom from '../components/Bottom';
import Vue from 'vue';

export default {
  components: {
    RHeader,
    Actionsheet 
  },
  props: {
    title: String,
    showBack:Boolean
  },
  data() {
    return {
      showMenu:{},
      menuList:{
          "zh-CN": '中文',
          "en-US": 'English'
      }
    };
  },
  methods:{
    onClickMore(){
        this.showMenu.status=!this.showMenu.status;
    },
    onClickSheet(key){
      i18n.locale=key;
    }
  },
  computed: {
    headerHtml(){
        return `<h6>${this.$t('home.language')}</h6>`
    },
  }
};
</script>