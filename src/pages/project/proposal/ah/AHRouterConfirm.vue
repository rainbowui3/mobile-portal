// 意健险标的确认页面路由
<template>
  <div>
    <div>loading.........</div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { Page, RBody } from "rainbow-mobile-core";
export default {
  components: { Page, RBody },
  data() {
    return {};
  },
  created: function() {
    //console.log(this.$route);
  },
  mounted: function() {},
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>

</style>
