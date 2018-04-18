<template>
  <r-page>
       <top :title="$t('component.scroller')" :showBack="true"/>
       <r-body>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Scroller, RBody} from 'rainbow-mobile-core';


import '../../i18n/component';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Scroller,
    RBody
  }
};
</script>

