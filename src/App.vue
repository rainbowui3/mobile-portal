<template>
  <div id="app">
    <loading :show="isLoading" :text="loading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'rainbow-mobile-core';
import { mapState } from 'vuex';
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading
    }),
    loading() {
      return this.$t('common.loading');
    }
  }
};
</script>

<style lang="less">
@import '~rainbow-mobile-core/src/styles/default.less';  
@import './style/app.css';
body {
  background-color: #fbf9fe;
}
</style>
