<template>
  <r-page>
       <top :title="$t('component.switch')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                <r-switch  :title="$t('component.required')"  :model="policy" value="status1" ></r-switch>
            </r-card>
            <r-card :title="$t('common.disable')">
                <r-switch  :title="$t('component.required')"  :model="policy" value="status2" :disabled="true"></r-switch>
            </r-card>
            <r-card :title="$t('common.event')">
                <r-switch  :title="$t('preview.click')"  :model="policy" value="status4" :onClick="onClick"></r-switch>

            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, RSwitch, RBody} from 'rainbow-mobile-core';

import '../../i18n/component';
import '../../i18n/preview';
export default {
  components: {
    Bottom,
    Top,
    Page,
    RSwitch,
    Card,
    RBody
  },
  data() {
      return {
           policy: {
               status2: true,
               status4: false
           }
          };
  },
  methods: {
      onClick(value) {
          console.log(this.policy.status4);
      }
  }
};
</script>

