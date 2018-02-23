<template>
  <page>
       <top :title="$t('component.card')" :showBack="true"/>
            <card :imgSrc="path">
                <div class="card-padding">
                    <p style="font-size:14px;line-height:2.2;">{{$t('card.example3Text')}}</p>
                    <p style="color:#999;font-size:12px;">{{$t('card.example3Date')}}</p>
                </div>
            </card>   
            <card :title="$t('card.example1Title')" :list="cardList"/>
            <card :title="$t('card.example2Title')" :footerText="$t('common.more')" :footerLink="footerLink">
                <p >{{ $t('common.custom') }}</p>
            </card> 
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Divider,Card} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Divider,
    Card
  },
  data(){
      return {
          footerLink:"/component/core",
          path:"http://placeholder.qiniudn.com/640x300",

      }
  },
  computed :{
    cardList(){
      return [
        { 'link': '/home', 'number': '40','text': this.$t('component.core') },
        { 'link': '/component', 'number': '16','text': this.$t('component.advanced') },
        { 'link': '/example', 'number': '1','text': this.$t('component.business') },
        { 'link': '/donate', 'number': '1','text': this.$t('component.project') },
      ]
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

