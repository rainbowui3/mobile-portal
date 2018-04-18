<template>
  <r-page>
       <top :title="$t('component.header')" :showBack="true"/>
       <r-body>
       <div class='header'>
                   <r-header :title="$t('preview.title')" ></r-header>
       </div>
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" ></r-header>
       </div>       
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" :showMore="true" :onClickMore="onClickMore"></r-header>
       </div>
       <div class='header'>
                   <r-header title="long long long long long long long long long long" :showBack="true" :backText="this.$t('common.back')" :showMore="true" :onClickMore="onClickMore"></r-header>
       </div>
       <div class='header'>
                   <r-header :title="$t('preview.title')" :showBack="true" :backText="this.$t('common.back')" >
                       <a >Feedback</a>
                   </r-header>
       </div>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../i18n/component';
import '../../i18n/preview';

export default {
  methods: {
    onClickMore() {
    }
  }
};
</script>
<style>
.header .vux-header{
    position: relative!important;
    margin-top: 15px;
}
</style>
