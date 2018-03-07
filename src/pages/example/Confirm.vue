<template>
  <page>
       <top :title="$t('component.confirm')" :showBack="true"/>
       <r-body>
            <card :title="$t('component.basic')">
              <r-switch :title="$t('dialog.show')" :model="policy" value="show1" :onClick="click"></r-switch>
              <r-switch :title="$t('component.input')" :model="policy" value="show2" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.android')" :model="policy" value="show3" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.autoClose')" :model="policy" value="show4" :onClick="click"></r-switch>
              <r-switch :title="$t('common.api')" :model="policy" value="show5" :onClick="clickApi"></r-switch>

              <confirm :model="policy" value="show1" :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</confirm>
              <confirm :model="policy" value="show2" :showInput="true" inputType="number" :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</confirm>
              <confirm :model="policy" value="show3" theme="android"  :title="$t('row.title')" :onHide="onHide" :onShow="onShow" :onCancel="onCancel" :onConfirm="onConfirm"> {{ $t('divider.sogo') }}</confirm>
              <confirm :model="policy" value="show4" :closeOnConfirm="false"  :title="$t('row.title')" :onHide="onHide"  :onConfirm="onConfirm2"> {{ $t('divider.sogo') }}</confirm>

            </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RSwitch,Confirm,LoadingApi,ConfirmApi,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RSwitch,
    Confirm,
    RBody
  },
  data(){
    return {
      policy: {},
    }
  },
  methods:{
    click(){
       console.log(this.policy)
    },
    clickApi(val){
      const self = this;
      ConfirmApi.show(this,{
        title: this.$t('row.title'),
        content: this.$t('divider.sogo'),
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        },
        onCancel () {
          console.log('plugin cancel')
          self.policy.show5 = false;
        },
        onConfirm () {
          console.log('plugin confirm')
           self.policy.show5 = false;
        }
      })
    },
    onHide(){
         this.show1 = false;
    },
    onShow(){
         console.log('show')
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm',msg)
    },
    onConfirm2 (msg) {
      const self = this;
      LoadingApi.show(this,{
        transition: '',
        text: this.$t('common.processing')
      })
      setTimeout(() => {
        LoadingApi.hide(this)
        self.policy.show4 = false
      }, 2000)
    },
  }
};
</script>



