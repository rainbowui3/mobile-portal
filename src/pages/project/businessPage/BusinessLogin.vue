<template>

  <r-page>
       <r-body>
         <div class="sign">
             <sign-in :onClick='clickUrl' />
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
  },
  methods: {
       clickUrl() {
         window.location.hash = '/project/businessPage/BusinessHome';
       }
    }
};
</script>

<style scoped="businessLogin">

</style>