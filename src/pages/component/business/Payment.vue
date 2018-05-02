<template>
  <r-page>
       <top :title="$t('pay.payment')" :showBack="true"/>
       <r-body>
           <r-card>
               <Pay />
           </r-card>
       </r-body>  
       <bottom :index="2"/>
  </r-page>
</template>
<script>
import Pay from '../../../components/pay/Pay';

export default {
 components: {
    Pay
  }
};
</script>