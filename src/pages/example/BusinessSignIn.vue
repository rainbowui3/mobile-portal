<template>
  <page>
       <top :title="$t('businessSignIn.SignIn')" :showBack="true"/>
       <r-body>
         <div class="sign">
             <sign-in />
         </div>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RBody } from "rainbow-mobile-core";
import Top from "../../components/Top";
import Bottom from "../../components/Bottom";
import SignIn from "../project/business/SignIn";
import "../../i18n/businessSignIn";
export default {
  components: {
    Top,
    Bottom,
    Page,
    RBody,
    Card,
    SignIn
  },
  data(){
    return{}
  }
};
</script>

<style >

</style>