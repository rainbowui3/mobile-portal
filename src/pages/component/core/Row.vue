<template>
  <r-page>
       <top :title="$t('component.row')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                      <r-row :title="$t('row.account')" :value="$t('row.protected')" :onClick="onClick"></r-row>
                      <r-row :title="$t('row.money')"  :isLoading="!money" :value="money"></r-row>
                      <r-row :title="$t('row.withdraw')"  :onClick="goto" :isLink="true"></r-row>
                      <r-row :title="$t('row.money')"  link='/component/example/preview' ></r-row>
                      <r-row :title="$t('row.withdraw')" :disabled="true" :onClick="goto"  :isLink="true"></r-row>
            </r-card>
            <r-card :title="$t('row.title')">
                      <r-row  :value="$t('row.protected')" :isLink="true">
                        <span style="color:#4D93E4;"><span style="vertical-align:middle;">{{ $t('row.withdraw') }}</span></span>
                      </r-row>
                      <r-row  :value="$t('row.protected')" :isLink="true">
                         <span class="fa fa-lock fa-2x"></span>
                      </r-row>
            </r-card>
             <r-card :title="$t('row.longValue')">
                   <r-row :title="$t('row.account')" primary="content"   value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></r-row>
            </r-card>
             <r-card :title="$t('row.collapse')">
                 <r-row :title="$t('row.account')" :isLink="true" :arrowFlag="flag" :onClick="open"></r-row>
                 <template v-if="flag">
                    <r-card :title="$t('card.example1Title')" :list="cardList"/>
                </template>
                <r-row :title="$t('row.account')" :isLink="true" :arrowFlag="flag1" :onClick="open1"></r-row>
                <template v-if="flag1">
                      <r-row :title="$t('row.account')" :value="$t('row.protected')" :onClick="onClick"></r-row>
                      <r-row :title="$t('row.money')"  :isLoading="!money" :value="money"></r-row>
                      <r-row :title="$t('row.withdraw')"  :onClick="goto" :isLink="true"></r-row>
                      <r-row :title="$t('row.withdraw')" :disabled="true" :onClick="goto"  :isLink="true"></r-row>
                </template>
                <r-row :title="$t('row.account')" :isLink="true" :arrowFlag="flag2" :onClick="open2"></r-row>
                 <template v-if="flag2">
                                 <r-previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" />
                </template>
            </r-card>
             <r-card :title="$t('common.custom')">
                   <r-row :title="$t('row.account')" >
                         <div>
                            <span style="color: red">{{`${this.$t('common.currency')} 1024`}}</span>
                        </div>
                   </r-row>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {RPreviewer} from 'rainbow-mobile-previewer';

import '../../../i18n/component';
import '../../../i18n/row';
import '../../../i18n/card';
export default {
  components: {
    RPreviewer
  },
  data() {
      return {
           money: null,
           flag: false,
           flag1: false,
           flag2: false
      };
  },
  methods: {
      onClick(event) {
          /* eslint-disable */
          console.log('===', event);
          /* eslint-disable */
      },
      goto(event) {
          window.location.hash = '/component/example/preview';
      },
      open() {
          this.flag = !this.flag;
      },
      open1() {
          this.flag1 = !this.flag1;
      },
      open2() {
          this.flag2 = !this.flag2;
      }
  },
  mounted () {
    setTimeout(() => {
      this.money = '-1024';
    }, 2000);
  },
  computed: {
    cardList() {
      return [
        { 'link': '/home', 'number': '40', 'text': this.$t('component.core') },
        { 'link': '/component', 'number': '16', 'text': this.$t('component.advanced') },
        { 'link': '/example', 'number': '1', 'text': this.$t('component.business') },
        { 'link': '/donate', 'number': '1', 'text': this.$t('component.project') }
      ];
    },
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
    }
  }
};
</script>

