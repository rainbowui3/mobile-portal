<template>
  <page>
       <top :title="$t('component.icon')" :showBack="true"/>
       <r-body>
        <card>
                                  <grid  :data="gridItems3"/>
        </card>
        <card>
            <previewer :title="$t('icon.aoshen')" value="479" :data="list" :buttons="buttons2"/>
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Grid,RBody} from 'rainbow-mobile-core';
import {Previewer} from 'rainbow-mobile-previewer';

import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Previewer,
    Grid,
    RBody
  },
  computed:{
    gridItems3(){
      return [
        { 'icon':"fa fa-bicycle fa-2x",'text': 'fa-bicycle'},
        { 'icon':"fa fa-bus fa-2x",'text': 'fa-bus'},
        { 'icon':"fa fa-cloud fa-2x",'text': 'fa-cloud'},
        { 'icon':"fa fa-coffee fa-2x",'text': 'fa-coffee'},
      ]
    },
    list(){
      return [{
        label: 'javascript',
        value: this.$t('icon.nojs')
      }, {
        label: 'css',
        value: this.$t('icon.css')
      }]
    },
    buttons2(){
      return [{
        style: 'primary',
        text: this.$t('common.more'),
        onButtonClick: (param) => {
          window.location.href='https://www.thinkcmf.com/font/font_awesome/icons.html'
        }
    }]}
  }
};
</script>
