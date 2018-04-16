// 意健险产品页面路由
<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      typeList: []
    };
  },
  created: function() {
    // console.log(this.$route);
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>

<style>

</style>
