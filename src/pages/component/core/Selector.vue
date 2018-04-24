<template>
  <r-page>
       <top :title="$t('component.selector')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                <r-selector  :title="$t('selector.sum')" :options="options" :model="policy" value="index" :onChange="onChange"></r-selector>
            </r-card>
            <r-card :title="$t('component.pleaseSelect')">
                <r-selector  :title="$t('selector.sum')" :options="options" :model="policy" value="nullDate" :onChange="onChange"></r-selector>
            </r-card>
            <r-card :title="$t('selector.header')">
                <r-selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" :onChange="onChange"></r-selector>
            </r-card>
            <r-card :title="$t('component.readonly')">
                <r-selector :readonly="true"  :title="$t('selector.sum')" :options="options" :model="policy" value="index2" :onChange="onChange"></r-selector>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../../i18n/component';
import '../../../i18n/selector';
export default {
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
      /*eslint-disable */
      this.policy.effortDate = val;
     /*eslint-disable */
    }
  }
};
</script>



