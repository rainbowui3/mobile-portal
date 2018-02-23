<template>
  <page>
       <top :title="$t('component.form')" :showBack="true"/>
       
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,RForm} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    RForm
  },
};
</script>

<style lang="less">

</style>

