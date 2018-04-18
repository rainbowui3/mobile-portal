<template>
  <r-page>
       <top :title="$t('businessPage.title')" :showBack="true"/>
       <r-body>
        <r-card>
          <Pay />
        </r-card>

       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import { Page, Card, RTable, RBody } from 'rainbow-mobile-core';
import Bottom from '../../../components/Bottom';
import Top from '../../../components/Top';
import Pay from '../components/pay/Pay';
import '../../../i18n/businessPage';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    Pay,
    RBody
  }
};
</script>

<style lang="less">

</style>

