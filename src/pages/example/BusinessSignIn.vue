<template>
  <r-page>
       <top :title="$t('businessSignIn.SignIn')" :showBack="true"/>
       <r-body>
         <div class="sign">
             <sign-in />
         </div>
       </r-body>
  </r-page>
</template>

<script>
import SignIn from '../project/business/SignIn';
import '../../i18n/businessSignIn';
export default {
  components: {
    SignIn
  },
  data() {
    return {};
  }
};
</script>

<style >

</style>