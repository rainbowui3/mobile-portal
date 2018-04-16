<template>
          <page>
            <top :title="$t('common.home')" :showBack="false"/>
            <r-body>
              <swiper :data="list" :auto="true" :showDots="true" height="200px"></swiper>
              <card :title="$t('common.component')" :list="cardList"/>
            </r-body>

            <bottom :index="1"/>
          </page>
</template>

<script>
import { Page, Card, RImage, Swiper, RBody } from 'rainbow-mobile-core';
import Bottom from '../components/Bottom';
import Top from '../components/Top';
import Jcx from '../assets/jcx.jpg';
import Jtgj from '../assets/jtgj.jpg';
import Ly from '../assets/ly.jpg';
import '../i18n/home';

export default {
  components: {Top, Card, Bottom, Page, RImage, Swiper, RBody},
  data() {
    return {
      path: 'http://placeholder.qiniudn.com/640x300',
      logo: [
        {
          class: 'logo',
          src: 'http://knowledge.ebaotech.com/rainbow/images/logo.png'
        }
      ],
      list: [
        {
          url: 'javascript:',
          img: Jtgj,
          title: '交通工具意外险'
        },
        {
          url: 'javascript:',
          img: Ly,
          title: '境内旅游意外险'
        },
        {
          url: 'javascript:',
          img: Jcx,
          title: '家庭财产险',
          fallbackImg: Jtgj
        }
      ]
    };
  },
  computed: {
    cardList() {
      return [
        {
          link: '/component/core',
          number: '34',
          text: this.$t('home.core')
        },
        {
          link: '/component/advanced',
          number: '20',
          text: this.$t('home.advanced')
        },
        {
          link: '/component/business',
          number: '1',
          text: this.$t('home.business')
        },
        {
          link: '/component/business',
          number: '1',
          text: this.$t('home.project')
        }
      ];
    }
  }
};
</script>

<style>
.logo {
  padding-top: 15px;
  text-align: center;
}

.logo > img {
  width: 50% !important;
}
</style>

