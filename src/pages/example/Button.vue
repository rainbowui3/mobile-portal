<template>
  <page>
       <top :title="$t('component.button')" :showBack="true"/>
       <r-body>
             <card :title="$t('component.basic')">
               <box :padding="padding">
                    <r-button type="default">{{$t('button.submit')}}</r-button>
                    <r-button type="primary">{{$t('button.primary')}}</r-button>
                    <r-button type="danger">{{$t('button.danger')}}</r-button>               
              </box>
            </card>
            <card :title="$t('button.link')">
               <box :padding="padding">
                    <r-button type="primary" :link="homeUrl">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :link="backUrl">{{$t('common.back')}}</r-button>               
              </box>
            </card>
             <card :title="$t('common.event')">
               <box :padding="padding">
                    <r-button type="primary" :onClick="clickHome" >{{$t('common.home')}}</r-button>
              </box>
            </card>
             <card :title="$t('common.loading')">
               <box :padding="padding">
                    <r-button type="default" :loading="true">{{$t('button.submit')}}</r-button>
                    <r-button type="primary" :loading="true">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :loading="true">{{$t('common.back')}}</r-button>               
              </box>
            </card>
            <card :title="$t('button.mini')">
               <box :padding="padding">
                    <r-button :mini="true">{{$t('button.submit')}}</r-button>
                    <r-button type="primary" :mini="true">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :mini="true">{{$t('common.back')}}</r-button>
                    <r-button :mini="true" :plain="true">{{$t('button.submit')}}</r-button>
              </box>
            </card>
          
            <card :title="$t('common.disable')">
               <box :padding="padding">
                  <r-button type="default" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button type="primary" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button type="danger" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" type="primary" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" type="danger" :disabled="true">{{$t('button.submit')}}</r-button>
              </box>
            </card>
            <card :title="$t('component.cell')">
               <cell :type="row">
                  <cell>
                      <r-button type="primary">{{$t('common.home')}}</r-button>
                  </cell>
                   <cell>
                       <r-button type="danger">{{$t('common.back')}}</r-button>
                   </cell>
              </cell>
            </card>
       </r-body>
       <bottom :index="3"/>
  </page>
</template>

<script>
import {Page,Box,RButton,Card,Cell,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/component";
import "../../i18n/button";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Box,
    RButton,
    Card,
    Cell,
    RBody
  },
  data(){
    return {
       padding:"10px 10px",
       homeUrl:"/#/",
       backUrl:"BACK",
       row:"row"
    }
  },
  methods:{
    clickHome(event){
      console.log(event)
    }
  }
};
</script>
<style lang="less">
.custom-primary-red {
  border-radius: 99px!important;
  border-color: #CE3C39!important;
  color: #CE3C39!important;
  &:active {
    border-color: rgba(206, 60, 57, 0.6)!important;
    color: rgba(206, 60, 57, 0.6)!important;
    background-color: transparent;
  }
}
</style>