<template>
  <page>
       <top :title="$t('component.img')" :showBack="true"/>
       <r-body>
                            <r-image :list="images"/>
       <bottom :index="2"/>
       </r-body>
  </page>
</template>

<script>
import {Page, RImage, Card, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import Female from '../../assets/female.jpg';
import Fire from '../../assets/fire.png';
import Jcx from '../../assets/jcx.jpg';
import Jtgj from '../../assets/jtgj.jpg';
import Ly from '../../assets/ly.jpg';
import Tthj from '../../assets/tthj.jpg';
import Xpx from '../../assets/xpx.jpg';
import Ycx from '../../assets/ycx.jpg';
import Ywx from '../../assets/ywx.jpg';
import Zrx from '../../assets/zrx.jpg';
import '../../i18n/component';
export default {
  components: {
    Bottom,
    Top,
    Page,
    RImage,
    Card,
    RBody
  },
  data() {
      return {
        images: [
          {'class': 'image', 'src': Ly, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Jcx, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Female, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Fire, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Jtgj, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Tthj, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Xpx, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Ycx, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Ywx, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'image', 'src': Zrx, 'onClick': this.goto, 'param': '/project/ly'}
        ]
      };
  },
  methods: {
      goto(param) {
        window.location.hash = param;
      }
  }
};
</script>