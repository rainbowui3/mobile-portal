<template>
  <page>
       <top :title="$t('component.list')" :showBack="true"/>
       <r-body>
          <card>
            <list :title="$t('preview.title')" :value="value" :data="list"/>
          </card>
          <card>
            <list :data="list"/>
          </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page, List, Card, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/component';
import '../../i18n/preview';

export default {
  components: {
    Bottom,
    Top,
    Page,
    List,
    Card,
    RBody
  },
  computed: {
    value() {
      return `${this.$t('common.currency')} 1024`;
    },
    list() {
       return [{
        label: this.$t('common.apple'),
        value: '3.29'
      }, {
        label: this.$t('common.banana'),
        value: '1.04'
      }, {
        label: this.$t('common.fish'),
        value: '8.00'
      }];
     }
  }
};
</script>


