<template>
  <r-page>
       <top :title="$t('component.tab')" :showBack="true"/>
       <r-body>
              <r-tab :tabItems="tabItems"/>
              <r-card :title="$t('component.tab')">
                  <r-tab :tabItems="swTabItems"/>
                   <r-swiper :model="index">
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">谁人没试过犹豫</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">达到理想不太易</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">自信打不死的心态活到老</h2></div></r-swiper-item>
                  </r-swiper>
              </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../../i18n/component';

export default {

  data() {
    return {
      index: 0
    };
  },
  computed: {
    tabItems() {
      return [
        { 'selected': true, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.core'), 'onClick': this.core},
        { 'selected': false, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('component.advanced'), 'onClick': this.advanced},
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'), 'onClick': this.business },
        { 'selected': false, 'showdot': false, 'disabled': true, 'badge': '', 'text': this.$t('component.project')}
      ];
    },
    swTabItems() {
      return [
        { 'selected': true, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.core'), 'onClick': this.goto},
        { 'selected': false, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('component.advanced'), 'onClick': this.goto},
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'), 'onClick': this.goto }
      ];
    }
  },
  methods: {
    core() {
      window.location.hash = '/component/example/tab';
    },
    advanced() {
      window.location.hash = '/component/example/tab';
    },
    business() {
      window.location.hash = '/component/example/tab';
    },
    goto(index) {
      this.index = index;
    }

  }
};
</script>

<style lang="less">

</style>

