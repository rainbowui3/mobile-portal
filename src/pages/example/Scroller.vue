<template>
  <page>
       <top :title="$t('component.scroller')" :showBack="true"/>

       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Scroller} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Scroller
  },
};
</script>

