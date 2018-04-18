<template>
  <r-page>
       <top :title="$t('component.popup')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
              <r-switch :title="$t('common.default')" :model="policy" value="show1" :onClick="click"></r-switch>
              <r-switch :title="`${$t('common.disable')}${$t('component.masker')}`" :model="policy" value="show2" :onClick="click"></r-switch>
              <r-switch :title="$t('popup.fullpopup')" :model="policy" value="show9" :onClick="click"></r-switch>
              <r-switch :title="$t('component.masker')" :model="policy" value="show7" :onClick="click"></r-switch>
            </r-card>
            <r-card :title="$t('common.position')">
              <r-switch :title="$t('common.left')" :model="policy" value="show3" :onClick="click"></r-switch>
              <r-switch :title="$t('common.right')" :model="policy" value="show4" :onClick="click"></r-switch>
              <r-switch :title="$t('common.top')" :model="policy" value="show5" :onClick="click2"></r-switch>
              <r-switch :title="$t('common.bottom')" :model="policy" value="show6" :onClick="click3"></r-switch>
            </r-card>
             <r-popup :model="policy" value="show1" :onHide="onHide">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show1'}"/>
                    </r-card>
            </r-popup>
             <r-popup :model="policy" value="show2" :onHide="onHide" :disableMask="false">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show2'}"/>
                    </r-card>
            </r-popup>
             <r-popup :model="policy" value="show7" :onHide="onHide" :showMask="false">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show7'}"/>
                    </r-card>
            </r-popup>
            <r-popup :model="policy" value="show9" :onHide="onHide" height="100%">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show9'}"/>
                    </r-card>
            </r-popup>
             <r-popup :model="policy" value="show3" :onHide="onHide" position="left" width="80%">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show3'}"/>
                    </r-card>
            </r-popup>
            <r-popup :model="policy" value="show4" :onHide="onHide" position="right"  width="80%">
                    <r-card>
                        <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" :buttons='buttons2' :param="{'key':'show4'}"/>
                    </r-card>
            </r-popup>
            <r-popup :model="policy" value="show5" :onHide="onHide" position="top"  :showMask="false" >
                        <div class="position-vertical-demo">
                            {{$t('common.top')}}
                        </div>
            </r-popup>
            <r-popup :model="policy" value="show6" :onHide="onHide" position="bottom" >
                        <div class="position-vertical-demo">
                             {{$t('common.bottom')}}
                        </div>
            </r-popup>

       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, RSwitch, Actionsheet, Toast, Popup, RBody} from 'rainbow-mobile-core';
import {Previewer} from 'rainbow-mobile-previewer';

import '../../i18n/component';
import '../../i18n/preview';
import '../../i18n/popup';
export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RSwitch,
    Toast,
    Actionsheet,
    Popup,
    Previewer,
    RBody
  },
  data() {
    return {
      policy: {}
    };
  },
  computed: {
      list() {
      return [{
        label: this.$t('preview.goods'),
        value: this.$t('preview.machine')
      }, {
        label: this.$t('preview.title'),
        value: this.$t('preview.title')
      }, {
        label: this.$t('preview.name'),
        value: this.$t('preview.longName')
      }];
    },
    buttons2() {
      return [{
        style: 'primary',
        text: this.$t('common.close'),
        onButtonClick: (param) => {
          this.policy[param['key']] = false;
        }
    }];
}
  },
  methods: {
    onHide() {
      console.log('onHide');
    },
    click() {
      console.log(this.policy);
    },
    click2() {
        setTimeout(() => {
          this.policy.show5 = false;
        }, 2000);
    },
    click3() {
        setTimeout(() => {
          this.policy.show6 = false;
        }, 2000);
    }
  }
};
</script>
<style>
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
</style>


