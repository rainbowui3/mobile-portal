<template>
  <page>
       <top :title="$t('component.page')" :showBack="true"/>
       <div class='page-example'>{{$t('page.info')}}</div>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page
  },
};
</script>
<style>
.page-example{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
