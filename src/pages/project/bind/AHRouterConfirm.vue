// 意健险标的确认页面路由
<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function() {
    // console.log(this.$route);
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
