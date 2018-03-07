<template>
  <page>
       <top :title="$t('business.productTop')" :showBack="true"/>
       <r-body>
       <product-top />
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RTable ,RBody} from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import ProductTop from "../project/components/ProductTop";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProductTop,
    RBody
  }
};
</script>

<style lang="less">

</style>

