<template>
  <page>
       <r-body>
         <div class="sign">
             <sign-in />
         </div>
       </r-body>
  </page>
</template>

<script>
import { Page, Card, RBody } from 'rainbow-mobile-core';
import Top from '../../../components/Top';
import SignIn from '../business/SignIn';

import '../../../i18n/businessSignIn';
export default {
  components: {
    Top,
    Page,
    RBody,
    Card,
    SignIn
  },
  data() {
    return {};
  }
};
</script>

<style >

</style>