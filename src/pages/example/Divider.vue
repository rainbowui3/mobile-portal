<template>
  <page>
       <top :title="$t('component.divider')" :showBack="true"/>
       <r-body>
            <card>
                <divider>{{$t('divider.sogo')}}</divider>
            </card>
                <divider>{{$t('divider.sogo')}}</divider>
       </r-body> 
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Divider,Page,Card,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/component";
import "../../i18n/divider";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Divider,
    Card,
    RBody
  },
};
</script>



