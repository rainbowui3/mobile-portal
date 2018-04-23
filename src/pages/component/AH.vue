<template>
  <r-page>
       <top :title="$t('home.exapmle')" :showBack="true"/>
       <r-body>
            <r-tab :tabItems="tabItems"/>
            <r-image :list="products"/>
       </r-body>
       <bottom :index="3"/>
  </r-page>
</template>

<script>
import Female from '../../assets/female.jpg';
import Ly from '../../assets/ly.jpg';
import Ycx from '../../assets/ycx.jpg';
import Ywx from '../../assets/ywx.jpg';
export default {
  data() {
      return {
        products: [{
          class: 'product',
          src: Ly,
          onClick: this.goto,
          param: {
            path: '/proposal/LoadingPage',
            productCode: 'PV1',
            productVersion: '1.0',
            proposalTemplate: '6'
          }},
          {
            class: 'product',
            src: Female,
            onClick: this.goto,
            param: {
              path: '/proposal/LoadingPage',
              productCode: 'PV1',
              productVersion: '1.0',
              proposalTemplate: '7'
            }},
          {'class': 'product', 'src': Ycx, 'onClick': this.goto, 'param': '/project/ly'},
          {'class': 'product', 'src': Ywx, 'onClick': this.goto, 'param': '/project/ly'}
        ]
      };
  },
  methods: {
      goto(param) {
        this.$router.push({
          path: param.path,
          query: {
            productCode: param.productCode,
            productVersion: param.productVersion,
            proposalTemplate: param.proposalTemplate
          }
        });
        // window.location.hash=param;
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
        { 'selected': false, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('demo.gi'), 'onClick': this.go},
        { 'selected': true, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.ah'), 'onClick': this.go }
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

