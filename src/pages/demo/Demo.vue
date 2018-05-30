<template>
  <r-page>
    <top :title="$t('demo.example')" :showBack="true" />
    <r-body>
      <r-tab :tabItems="tabItems" />
      <r-image :list="products" />
    </r-body>
    <bottom :index="3" />
  </r-page>
</template>

<script>
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
import '../../i18n/demo';
import '../../i18n/component';

export default {
  data() {
    return {
      products: [
        {
          class: 'product',
          src: Ly,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '1'
          }
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: 'product',
          src: Jcx,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '2'
          }

          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: 'product',
          src: Female,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '3'
          }

          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: 'product',
          src: Fire,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '4'
          }
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: 'product',
          src: Jtgj,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '5'
          }
          // param: "/project/proposal/ah/InsuredInfoAccident"
        },
        {
          class: 'product',
          src: Tthj,
          onClick: this.goto,
          param: {
            name: 'ProductInfoEntryAuto',
            url: '/project/proposal/auto2e/ProductInfoEntryAuto'
          }
        },
        {
          class: 'product',
          src: Xpx,
          onClick: this.goto,
          param: ''
        },
        {
          class: 'product',
          src: Ycx,
          onClick: this.goto,
          param: ''
        },
        {
          class: 'product',
          src: Ywx,
          onClick: this.goto,
          param: ''
        },
        { class: 'product', src: Zrx, onClick: this.goto, param: '' }
      ]
    };
  },
  methods: {
    goto(param) {
    this.$router.push({
        path: param.url,
        query: {
          productCode: param.productCode,
          productVersion: param.productVersion,
          proposalTemplate: param.proposalTemplate
        }
    });
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
        {
          selected: true,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('common.popular'),
          onClick: this.go
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('common.auto'),
          onClick: this.go
        },
        {
          selected: false,
          showdot: true,
          disabled: false,
          badge: '1',
          text: this.$t('common.gi'),
          onClick: this.go
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('common.ah'),
          onClick: this.go
        }
      ];
    }
  }
};
</script>
<style>
.product {
  height: 220px;
}
</style>

