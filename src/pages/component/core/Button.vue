<template>
  <r-page>
       <top :title="$t('component.button')" :showBack="true"/>
       <r-body>
             <r-card :title="$t('component.basic')">
               <r-box :padding="padding">
                    <r-button type="default">{{$t('button.submit')}}</r-button>
                    <r-button type="primary">{{$t('button.primary')}}</r-button>
                    <r-button type="danger">{{$t('button.danger')}}</r-button>               
              </r-box>
            </r-card>
            <r-card :title="$t('button.link')">
               <r-box :padding="padding">
                    <r-button type="primary" :link="homeUrl">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :link="backUrl">{{$t('common.back')}}</r-button>               
              </r-box>
            </r-card>
             <r-card :title="$t('common.event')">
               <r-box :padding="padding">
                    <r-button type="primary" :onClick="clickHome" >{{$t('common.home')}}</r-button>
              </r-box>
            </r-card>
             <r-card :title="$t('common.loading')">
               <r-box :padding="padding">
                    <r-button type="default" :loading="true">{{$t('button.submit')}}</r-button>
                    <r-button type="primary" :loading="true">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :loading="true">{{$t('common.back')}}</r-button>               
              </r-box>
            </r-card>
            <r-card :title="$t('button.mini')">
               <r-box :padding="padding">
                    <r-button :mini="true">{{$t('button.submit')}}</r-button>
                    <r-button type="primary" :mini="true">{{$t('common.home')}}</r-button>
                    <r-button type="danger" :mini="true">{{$t('common.back')}}</r-button>
                    <r-button :mini="true" :plain="true">{{$t('button.submit')}}</r-button>
              </r-box>
            </r-card>
          
            <r-card :title="$t('common.disable')">
               <r-box :padding="padding">
                  <r-button type="default" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button type="primary" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button type="danger" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" type="primary" :disabled="true">{{$t('button.submit')}}</r-button>
                  <r-button :mini="true" type="danger" :disabled="true">{{$t('button.submit')}}</r-button>
              </r-box>
            </r-card>
            <r-card :title="$t('component.cell')">
               <r-cell :type="row">
                  <r-cell>
                      <r-button type="primary">{{$t('common.home')}}</r-button>
                  </r-cell>
                   <r-cell>
                       <r-button type="danger">{{$t('common.back')}}</r-button>
                   </r-cell>
              </r-cell>
            </r-card>
       </r-body>
       <bottom :index="3"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/button';

export default {
  data() {
    return {
       padding: '10px 10px',
       homeUrl: '/#/',
       backUrl: 'BACK',
       row: 'row'
    };
  },
  methods: {
    clickHome(event) {
      /* eslint-disable */
      console.log(event);
      /* eslint-disable */
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