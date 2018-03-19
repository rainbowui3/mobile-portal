<template>
  <page>
       <top :title="$t('component.scroller')" :showBack="true"/>
       <r-body>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Scroller,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/component";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Scroller,
    RBody
  },
};
</script>

