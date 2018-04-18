<template>
  <r-page>
       <top :title="$t('component.card')" :showBack="true"/>
       <r-body>
            <r-card :imgSrc="path">
                <div class="card-padding">
                    <p style="font-size:14px;line-height:2.2;">{{$t('card.example3Text')}}</p>
                    <p style="color:#999;font-size:12px;">{{$t('card.example3Date')}}</p>
                </div>
            </r-card>
            <r-card :title="$t('card.example1Title')" :list="cardList"/>
            <r-card :title="$t('card.example2Title')" :footerText="$t('common.more')" :footerLink="footerLink">
                <p >{{ $t('common.custom') }}</p>
            </r-card> 
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../i18n/card';

export default {
  data() {
      return {
          footerLink: '/component/core',
          path: 'http://placeholder.qiniudn.com/640x300'

      };
  },
  computed: {
    cardList() {
      return [
        { 'link': '/home', 'number': '40', 'text': this.$t('component.core') },
        { 'link': '/component', 'number': '16', 'text': this.$t('component.advanced') },
        { 'link': '/example', 'number': '1', 'text': this.$t('component.business') },
        { 'link': '/donate', 'number': '1', 'text': this.$t('component.project') }
      ];
    }
  }
};
</script>

<style>
.card-padding {
  padding: 15px;
  text-align: left;
}
.card-padding p:last-of-type{
  text-align: right;
}
.weui-panel__hd {
    text-align: left;
}
</style>

