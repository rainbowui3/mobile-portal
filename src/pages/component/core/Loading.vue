<template>
  <r-page>
       <top :title="$t('component.loading')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
              <r-switch :title="$t('dialog.show')" :model="policy" value="status1" :onClick="clickSwitch1"></r-switch>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {LoadingApi} from 'rainbow-mobile-core';
import dialog from '../../../assets/dialog.jpg';
import '../../../i18n/component';
import '../../../i18n/dialog';

export default {
  data() {
    return {
      dialogImage: dialog,
      policy: {},
      sheetShow1: false,
      sheetShow2: false,
      sheetShow3: false,
      sheetShow4: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },
  methods: {
    clickSwitch1() {
      LoadingApi.show(this, {
        transition: '',
        text: this.$t('common.processing')
      });
      setTimeout(() => {
        LoadingApi.hide(this);
        this.policy.status1 = false;
      }, 2000);
    },
    clickSwitch2(val) {
     this.show2 = val;
    },
    clickSwitch3(val) {
        this.show3 = val;
    },
    clickSwitch4(val) {
        this.show4 = val;
    },
    onHide() {
         this.show1 = false;
    },
    onShow() {
      /* eslint-disable */
         console.log('show');
      /* eslint-disable */
    },
    onCancel () {
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    },
    onConfirm (msg) {
       this.show2 = false;
       this.show3 = false;
       this.show4 = false;
    },
    onConfirm2 (msg) {
      LoadingApi.show(this, {
        transition: '',
        text: this.$t('common.processing')
      });
      setTimeout(() => {
        LoadingApi.hide(this);
        this.show4 = false;
      }, 2000);
    }
  }
};
</script>



