<template>
  <r-page>
       <top :title="$t('component.swiper')" :showBack="true"/>
       <r-body>
         <r-card :title="$t('component.basic')">
              <r-swiper :data="list"   :auto="true" :showDots="true"></r-swiper>
         </r-card>
         <r-card :title="$t('swiper.notauto')">
              <r-swiper :data="list" :model="value" :showDots="true"></r-swiper>
           <r-box padding="10px 10px">
                <r-button :onClick="goto" param="0">goto 0</r-button>
                <r-button :onClick="goto" param="1">goto 1</r-button>
                <r-button :onClick="goto" param="2">goto 2</r-button>
           </r-box>
         </r-card>
         <r-card :title="$t('common.height')">
              <r-swiper  height="100px" :auto="true">
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">谁人没试过犹豫</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">达到理想不太易</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">即使有信心</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">斗志却抑止</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">只想靠两手向理想挥手</h2></div></r-swiper-item>
                    <r-swiper-item ><div class="black"><h2 class="title fadeInUp animated">自信打不死的心态活到老</h2></div></r-swiper-item>
              </r-swiper>
         </r-card>
         <r-card :title="$t('common.vertical')">
              <r-swiper  height="35px" :auto="true" direction="vertical">
                    <r-swiper-item><p>谁人没试过犹豫</p></r-swiper-item>
                    <r-swiper-item><p>达到理想不太易</p></r-swiper-item>
                    <r-swiper-item><p>即使有信心</p></r-swiper-item>
                    <r-swiper-item><p>斗志却抑止</p></r-swiper-item>
                    <r-swiper-item><p>只想靠两手向理想挥手</p></r-swiper-item>
                    <r-swiper-item><p>自信打不死的心态活到老</p></r-swiper-item>
              </r-swiper>
         </r-card>

       </r-body>    
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../i18n/component';
import '../../i18n/swiper';

export default {

  data() {
      return {
          list: [{
                url: 'javascript:',
                    img: 'https://static.vux.li/demo/1.jpg',
                    title: '送你一朵fua'
                }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/2.jpg',
                    title: '送你一辆车'
                }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/3.jpg',
                    title: '送你一次旅行',
                    fallbackImg: 'https://static.vux.li/demo/3.jpg'
           }],
           value: null
          };
  },
  methods: {
      onIndexChange() {

      },
      goto(event) {
          this.value = Number(event.srcElement.dataset.param);
      },
      onItemChange() {

      }
  }
};
</script>
<style>

.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}

</style>
