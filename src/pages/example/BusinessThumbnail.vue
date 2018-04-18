<template>
  <r-page>
       <top :title="$t('BusinessThumbnail.home')" :showBack="true"/>
       <r-body>
         <r-card>
         </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import { Page, Card, RBody } from 'rainbow-mobile-core';
import Top from '../../components/Top';
import Bottom from '../../components/Bottom';
import '../../i18n/businessThumbnail';
export default {
  components: {
    Top,
    Bottom,
    Page,
    RBody,
    Card
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
</style>