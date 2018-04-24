<template>
  <r-page>
       <top :title="$t('component.confirm')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
              <r-switch :title="$t('dialog.show')" :model="policy" value="show1" :onClick="click"></r-switch>
              <r-switch :title="$t('component.input')" :model="policy" value="show2" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.android')" :model="policy" value="show3" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.autoClose')" :model="policy" value="show4" :onClick="click"></r-switch>
              <r-switch :title="$t('common.api')" :model="policy" value="show5" :onClick="clickApi"></r-switch>

              <r-confirm :model="policy" value="show1" :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</r-confirm>
              <r-confirm :model="policy" value="show2" :showInput="true" inputType="number" :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</r-confirm>
              <r-confirm :model="policy" value="show3" theme="android"  :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</r-confirm>
              <r-confirm :model="policy" value="show4" :closeOnConfirm="false"  :title="$t('row.title')" :onHide="onHide"  :onConfirm="onConfirm2"> {{ $t('divider.sogo') }}</r-confirm>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/dialog';
import '../../../i18n/actionSheet';
import '../../../i18n/row';
import '../../../i18n/divider';

export default {
  data() {
    return {
      policy: {}
    };
  },
  methods: {
    click() {
      /* eslint-disable */
       console.log(this.policy);
       /* eslint-disable */
    },
    clickApi(val) {
      const self = this;
      ConfirmApi.show(this, {
        title: this.$t('row.title'),
        content: this.$t('divider.sogo'),
        onShow () {
          /* eslint-disable */
          console.log('plugin show');
          /* eslint-disable */
        },
        onHide () {
          /* eslint-disable */
          console.log('plugin hide');
          /* eslint-disable */
        },
        onCancel () {
          /* eslint-disable */
          console.log('plugin cancel');
          /* eslint-disable */
          self.policy.show5 = false;
        },
        onConfirm () {
          /* eslint-disable */
          console.log('plugin confirm');
          /* eslint-disable */
           self.policy.show5 = false;
        }
      });
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
      /* eslint-disable */
      console.log('on cancel');
      /* eslint-disable */
    },
    onConfirm (msg) {
      /* eslint-disable */
      console.log('on confirm', msg);
      /* eslint-disable */
    },
    onConfirm2 (msg) {
      const self = this;
      RLoadingApi.show(this, {
        transition: '',
        text: this.$t('common.processing')
      });
      setTimeout(() => {
        RLoadingApi.hide(this);
        self.policy.show4 = false;
      }, 2000);
    }
  }
};
</script>



