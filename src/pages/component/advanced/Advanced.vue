<template>
  <r-page>
       <top :title="$t('common.component')" :showBack="true"/>
       <r-body>
         <r-tab :tabItems="tabItems"/>
         <r-grid :data="gridItems"/>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
export default {
  data() {
    return {};
  },
  computed: {
    tabItems() {
      return [
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.core'), 'onClick': this.core},
        { 'selected': true, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('component.advanced'), 'onClick': this.advanced},
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'), 'onClick': this.business }
      ];
    },
    gridItems() {
      return [
        { 'icon': 'fa fa-mars-stroke-h ', 'text': this.$t('component.blur')},
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.clocker')},
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.badge')},
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.countdown') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.countup') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.drawer') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.flow') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.loading') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.masker') },
        { 'icon': 'fa fa-percent ', 'text': this.$t('component.number') },
        { 'icon': 'fa fa-eye ', 'text': this.$t('component.previewer'), 'link': '/component/example/preview' },
        { 'icon': 'fa fa-search ', 'text': this.$t('component.search'), 'link': '/component/example/search' },
        { 'icon': 'fa fa-commenting ', 'text': this.$t('component.msg'), 'link': '/component/example/msg' },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.qrcode') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.range') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.rater') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.sticky') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.swipeout') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.timeline') },
        { 'icon': 'fa fa-camera-retro ', 'text': this.$t('component.progress') }
      ];
    }
  },
  methods: {
    core() {
      window.location.hash = '/component/core';
    },
    advanced() {
      window.location.hash = '/component/advanced';
    },
    business() {
      window.location.hash = '/component/business';
    }
  }
};
</script>

<style lang="less">

</style>

