<template>
  <page>
       <top :title="$t('pay.payment')" :showBack="true"/>
       <r-body>
           <card>
               <Pay />
           </card>
       </r-body>  
       <bottom :index="2"/>
  </page>
</template>
<script>
import { Page, Card, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import Pay from '../project/components/pay/Pay';
import i18n from '../../i18n/pay';

export default {
 components: {
    Bottom,
    Top,
    Page,
    Card,
    Pay,
    RBody
  }
};
</script>