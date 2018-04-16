<template>
  <page>
    
       <top :title="$t('component.page')" :showBack="true"/>
       <r-body>
       <div class='page-example'>{{$t('page.info')}}</div>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/component';
import '../../i18n/page';

export default {
  components: {
    Bottom,
    Top,
    Page,
    RBody
  }
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
