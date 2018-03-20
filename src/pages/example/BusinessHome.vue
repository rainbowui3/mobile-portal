<template>
  <page>
       <top :title="$t('businessHome.home')" :showBack="true"/>
       <r-body>
         <card>
         </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RBody } from "rainbow-mobile-core";
import Top from "../../components/Top";
import Bottom from "../../components/Bottom";
import "../../i18n/businessHome";
export default {
  components: {
    Top,
    Bottom,
    Page,
    RBody,
    Card
  },
  data(){
    return{}
  }
};
</script>

<style lang="less">
</style>