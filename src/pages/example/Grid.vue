<template>
  <r-page>
       <top :title="$t('component.grid')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('grid.col2')">
                       <r-grid :cols="2" :data="gridItems"/>
            </r-card>
            <r-card :title="$t('grid.col3')">
                       <r-grid :cols="3" :data="gridItems2"/>
            </r-card>
            <r-card :title="$t('grid.col4')">
                       <r-grid  :data="gridItems3"/>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Grid, Card, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/component';
import '../../i18n/grid';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Grid,
    Card,
    RBody
  },
  computed: {
    gridItems() {
      return [
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')}
      ];
    },
    gridItems2() {
      return [
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')}
      ];
    },
    gridItems3() {
      return [
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')},
        { 'icon': 'fa fa-address-card', 'text': this.$t('component.address')}
      ];
    }
  }
};
</script>

<style lang="less">

</style>

