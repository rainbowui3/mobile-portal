<template>
  <page>
       <top :title="$t('component.header')" :showBack="true"/>
       <div class='header'>
                   <r-header :title="$t('preview.title')" ></r-header>
       </div>
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" ></r-header>
       </div>       
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" :showMore="true" :onClickMore="onClickMore"></r-header>
       </div>
       <div class='header'>
                   <r-header title="long long long long long long long long long long" :showBack="true" :backText="this.$t('common.back')" :showMore="true" :onClickMore="onClickMore"></r-header>
       </div>
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" >
                       <a >Feedback</a>
                   </r-header>
       </div>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,RHeader} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    RHeader
  },
  methods:{
    onClickMore(){
        console.log(1111)
    },
  }
};
</script>
<style>
.header .vux-header{
    position: relative!important;
    margin-top: 15px;
}
</style>
