<template>
  <r-page>
       <top :title="$t('demo.example')" :showBack="true"/>
       <r-body>
            <r-tab :tabItems="tabItems"/>
            <r-image :list="products"/>
       </r-body>
       <bottom :index="3"/>
  </r-page>
</template>

<script>
import Fire from '../../assets/fire.png';
import Jcx from '../../assets/jcx.jpg';
import Tthj from '../../assets/tthj.jpg';
import Xpx from '../../assets/xpx.jpg';
import Zrx from '../../assets/zrx.jpg';
import '../../i18n/demo';
export default {
  data() {
      return {
        products: [
          {'class': 'product', 'src': Jcx, 'action': this.goto, 'param': ''},
          {'class': 'product', 'src': Fire, 'action': this.goto, 'param': ''},
          {'class': 'product', 'src': Tthj, 'action': this.goto, 'param': ''},
          {'class': 'product', 'src': Xpx, 'action': this.goto, 'param': ''},
          {'class': 'product', 'src': Zrx, 'action': this.goto, 'param': ''}

        ]
      };
  },
  methods: {
      goto(param) {
        window.location.hash = param;
      },
      go(index) {
        switch (index) {
          case 0:
            window.location.hash = '/demo';
            break;
          case 1:
            window.location.hash = '/demo/auto';
            break;
          case 2:
            window.location.hash = '/demo/gi';
            break;
          case 3:
            window.location.hash = '/demo/ah';
            break;
          default:
            window.location.hash = '/demo';
            break;
        }
      }
  },
  computed: {
     tabItems() {
      return [
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.popular'), 'onClick': this.go},
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.auto'), 'onClick': this.go},
        { 'selected': true, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('demo.gi'), 'onClick': this.go},
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.ah'), 'onClick': this.go }
      ];
    }
  }
};
</script>
<style>
.product{
  height: 220px;
}
</style>

