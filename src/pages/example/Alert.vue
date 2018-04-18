<template>
  <r-page>
       <top :title="$t('component.dialog')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
              <r-switch :title="$t('alert.show')" :model="policy" value="show1" :onClick="onClick"></r-switch>
              <r-switch :title="$t('common.api')" :model="policy" value="show2" :onClick="clickSwitchApi"></r-switch>
              <r-alert  :model="policy" value="show1" :title="$t('alert.title')" :onHide="onHide" :onShow="onShow" > {{ $t('alert.sogo') }}</r-alert>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import { Page, Card, RSwitch, Alert, AlertApi, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/alert';
import '../../i18n/component';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RSwitch,
    Alert,
    RBody
  },
  data() {
    return {
      policy: {}
    };
  },
  methods: {
    onClick() {
      console.log('click');
    },
    clickSwitchApi(val) {
      const self = this;
      AlertApi.show({
        title: this.$t('alert.title'),
        content: this.$t('alert.sogo'),
        onShow() {
          console.log("Module: I'm showing");
        },
        onHide() {
          self.policy.show2 = false;
          console.log("Module: I'm hiding now");
        }
      });
    },
    onHide() {
      console.log('Hide');
    },
    onShow() {
      console.log('show');
    }
  }
};
</script>



