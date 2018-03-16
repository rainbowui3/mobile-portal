<template>
  <page>
       <top :title="$t('common.component')" :showBack="true"/>
        <r-body>
            <tab :tabItems="tabItems"/>
            <grid :data="gridItems"/>
        </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Grid,Tab,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
export default {

  components: {
    Bottom,
    Top,
    Tab,
    Page,
    Grid,
    RBody
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
    },
  },
  computed :{
    tabItems(){
      return [
        { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('component.core'),"onClick":this.core},
        { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('component.advanced'),"onClick":this.advanced},
        { 'selected':false, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'),"onClick":this.business },
      ]
    },
    gridItems(){
      return [
        { 'icon':"fa fa-navicon ",'text': this.$t('component.actionsheet'),'link':'/component/example/actionsheet'},
        { 'icon':"fa fa-warning ",'text': this.$t('component.alert'),'link':'/component/example/alert' },
        { 'icon':"fa fa-circle-o ", 'text': this.$t('component.badge'),'link':'/component/example/badge'},
        { 'icon':"fa fa-square-o ",'text': this.$t('component.button'),'link':'/component/example/button' },
        { 'icon':"fa fa-window-maximize ",'text': this.$t('component.card'),'link':'/component/example/card'},
        { 'icon':"fa fa-server ",'text': this.$t('component.row'),'link':'/component/example/row' },
        { 'icon':"fa fa-th-list ",'text': this.$t('component.cell'),'link':'/component/example/cell' },
        { 'icon':"fa fa-check-square ",'text': this.$t('component.checker'),'link':'/component/example/checker' },
        { 'icon':"fa fa-info-circle ",'text': this.$t('component.confirm'),'link':'/component/example/confirm' },
        { 'icon':"fa fa-calendar ",'text': this.$t('component.datetime'),'link':'/component/example/datetime' },
        { 'icon':"fa fa-minus ",'text': this.$t('component.divider'),'link':'/component/example/divider' },
        { 'icon':"fa fa-comments",'text': this.$t('component.dialog'),'link':'/component/example/dialog' },
        { 'icon':"fa fa-th ",'text': this.$t('component.grid'),'link':'/component/example/grid'},
        { 'icon':"fa fa-header ",'text': this.$t('component.header'),'link':'/component/example/header' },
        { 'icon':"fa fa-flag ",'text': this.$t('component.icon'),'link':'/component/example/icon' },
        { 'icon':"fa fa-picture-o ",'text': this.$t('component.img'),'link':'/component/example/img' },
        { 'icon':"fa fa-text-width ",'text': this.$t('component.input'),'link':'/component/example/input'  },
        { 'icon':"fa fa-bars ",'text': this.$t('component.list'),'link':'/component/example/list' },
        { 'icon':"fa  fa-spinner fa-spin ",'text': this.$t('component.loading'),'link':'/component/example/loading' },
        { 'icon':"fa fa-angle-double-right ",'text': this.$t('component.marquee'),'link':'/component/example/marquee'  },
        { 'icon':"fa fa-outdent ",'text': this.$t('component.panel'),'link':'/component/example/panel' },
        { 'icon':"fa fa-chevron-down ",'text': this.$t('component.picker'),'link':'/component/example/picker'},
        { 'icon':"fa fa-clone ",'text': this.$t('component.popup'),'link':'/component/example/popup' },
        { 'icon':"fa fa-caret-square-o-down ",'text': this.$t('component.selector'),'link':'/component/example/selector' },
        { 'icon':"fa  fa-spinner fa-spin ",'text': this.$t('component.spinner'),'link':'/component/example/spinner' },
        { 'icon':"fa fa-sort-numeric-asc ",'text': this.$t('component.step'),'link':'/component/example/step' },
        { 'icon':"fa fa-picture-o ",'text': this.$t('component.swiper'),'link':'/component/example/swiper' },
        { 'icon':"fa fa-toggle-off ",'text': this.$t('component.switch'),'link':'/component/example/switch' },
        { 'icon':"fa fa-folder-o ",'text': this.$t('component.tab'),'link':'/component/example/tab'},
        { 'icon':"fa fa-table ",'text': this.$t('component.table'),'link':'/component/example/table' },
        { 'icon':"fa fa-sitemap ",'text': this.$t('component.tabbar'),'link':'/component/example/tabBar' },
        { 'icon':"fa fa-text-height ",'text': this.$t('component.textarea'),'link':'/component/example/texarea' },
        { 'icon':"fa fa-comment-o ",'text': this.$t('component.toast') ,'link':'/component/example/toast' },
        { 'icon':"fa fa-file ",'text': this.$t('component.page'),'link':'/component/example/page' },
      ]
    }
  }
};
</script>

<style lang="less">

</style>

