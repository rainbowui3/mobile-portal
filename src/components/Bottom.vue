<template>
         <r-tab-bar :tabItems="tabItems" type="icon"/>
</template>

<script>
import {TabBar} from 'rainbow-mobile-core';
export default {
  components: {
    TabBar
  },
  props: {
    index: Number
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {
    tabItems() {
      return [
        { 'icon': 'fa fa-home', 'selected': this.index == 1, 'showdot': false, 'link': '/project/businessPage/BusinessHome', 'badge': '', 'text': this.$t('common.home') },
        { 'icon': 'fa fa-gears', 'selected': this.index == 2, 'showdot': true, 'link': '/component/core', 'badge': '', 'text': this.$t('common.component')},
        { 'icon': 'fa fa-automobile', 'selected': this.index == 3, 'showdot': false, 'link': '/demo', 'badge': '2', 'text': this.$t('common.exapmle') },
        { 'icon': 'fa fa-user-o', 'selected': this.index == 4, 'showdot': false, 'link': '/mine', 'badge': '', 'text': this.$t('common.mine') }
      ];
    }
  }
};
</script>

<style lang="less">


</style>

