<template>
  <page>
       <top :title="$t('component.toast')" :showBack="true"/>
       <r-body>
            <card :title="$t('component.basic')">
              <r-switch :title="$t('component.basic')" :model="policy" value="show1" :onClick="clickSwitch"></r-switch>
              <r-switch :title="$t('datetime.time')" :model="policy" value="show9" :onClick="clickSwitch"></r-switch>
            </card>
            <card :title="$t('common.position')">
              <r-switch :title="$t('common.top')" :model="policy" value="show2" :onClick="clickSwitch" ></r-switch>
              <r-switch :title="$t('common.middle')" :model="policy" value="show3" :onClick="clickSwitch"></r-switch>
              <r-switch :title="$t('common.bottom')" :model="policy" value="show4" :onClick="clickSwitch"></r-switch>
            </card>
            <card :title="$t('common.type')">
              <r-switch :title="$t('common.text')" :model="policy" value="show5" :onClick="clickSwitch" ></r-switch>
              <r-switch :title="$t('common.warn')" :model="policy" value="show6" :onClick="clickSwitch" ></r-switch>
              <r-switch :title="$t('common.success')" :model="policy" value="show7" :onClick="clickSwitch"></r-switch>
              <r-switch :title="$t('common.cancel')" :model="policy" value="show8" :onClick="clickSwitch"></r-switch>
            </card>
            <toast :model="policy" value="show1" :text="toastText" :onHide="onHide"/>
            <toast :model="policy" value="show2" :text="toastText" :onHide="onHide" position='top'/>
            <toast :model="policy" value="show3" :text="toastText" :onHide="onHide" position='middle'/>
            <toast :model="policy" value="show4" :text="toastText" :onHide="onHide" position='bottom'/>
            <toast :model="policy" value="show5" :text="toastText" :onHide="onHide" type='text'/>
            <toast :model="policy" value="show6" :text="$t('common.warn')" :onHide="onHide" type='warn'/>
            <toast :model="policy" value="show7" :text="$t('common.success')" :onHide="onHide" type='success'/>
            <toast :model="policy" value="show8" :text="$t('common.cancel')" :onHide="onHide" type='cancel'/>
            <toast :model="policy" value="show9" :text="$t('datetime.time')" :onHide="onHide" :time='1000'/>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RSwitch,Actionsheet,Toast,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RSwitch,
    Toast,
    Actionsheet,
    RBody
  },
  data(){
    return {
      policy: {},
      showToast: false,
      autoClose:false,
      toastText:this.$t('common.success'),
    }
  },
  methods:{
    onHide(){
      console.log("onHide")
    },
    clickSwitch(){
       console.log("click")
    },
  }
};
</script>


