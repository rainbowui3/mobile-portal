<template>
  <r-page>
       <top :title="$t('component.form')" :showBack="true"/>
       <r-body>
       </r-body>
       
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, RForm, RBody} from 'rainbow-mobile-core';


import '../../i18n/component';

export default {
  components: {
    Bottom,
    Top,
    Page,
    RForm,
    RBody
  }
};
</script>

<style lang="less">

</style>

