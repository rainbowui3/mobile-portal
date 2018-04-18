<template>
  <r-page>
       <top :title="$t('component.divider')" :showBack="true"/>
       <r-body>
            <r-card>
                <r-divider>{{$t('divider.sogo')}}</r-divider>
            </r-card>
                <r-divider>{{$t('divider.sogo')}}</r-divider>
       </r-body> 
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../i18n/component';
import '../../i18n/divider';

export default {

};
</script>



