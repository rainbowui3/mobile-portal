<template>
  <page>
       <top :title="$t('component.selector')" :showBack="true"/>
       <r-body>
            <card :title="$t('component.basic')">
                <selector  :title="$t('selector.sum')" :options="options" :model="policy" value="index" :onChange="onChange"></selector>
            </card>
            <card :title="$t('component.pleaseSelect')">
                <selector  :title="$t('selector.sum')" :options="options" :model="policy" value="nullDate" :onChange="onChange"></selector>
            </card>
            <card :title="$t('selector.header')">
                <selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" :onChange="onChange"></selector>
            </card>
            <card :title="$t('component.readonly')">
                <selector :readonly="true"  :title="$t('selector.sum')" :options="options" :model="policy" value="index2" :onChange="onChange"></selector>
            </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page, Card, Selector, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import config from 'config';
import '../../i18n/component';
import '../../i18n/selector';
export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Selector,
    RBody
  },
  data() {
    return {
        options: [{'key': '100000', 'value': '10万'}, {'key': '1000000', 'value': '100万'}, {'key': '10000000', 'value': '1000万'}],
        policy: {
          'nullDate': null,
          'index': '1000000',
          'index1': '100000',
          'index2': '10000000'
        }
    };
  },
  methods: {
    onChange(val) {
      this.policy.effortDate = val;
    }
  }
};
</script>



