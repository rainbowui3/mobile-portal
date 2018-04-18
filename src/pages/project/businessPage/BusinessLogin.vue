<template>
  <r-page>
       <r-body>
         <div class="sign">
             <sign-in />
         </div>
       </r-body>
  </r-page>
</template>

<script>
import SignIn from '../business/SignIn';
import '../../../i18n/businessSignIn';
export default {
  components: {
    SignIn
  },
  data() {
    return {};
  }
};
</script>

<style scoped="businessLogin">

</style>