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
import Jtgj from '../../assets/jtgj.jpg';

export default {
  data() {
      return {
        products: [{
          class: 'product',
          src: Jtgj,
          onClick: this.goto,
          param: {
            url: '/proposal/LoadingPage',
            productCode: 'DEA-DFA',
            productVersion: '1.0',
            proposalTemplate: '9'
          }}
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
        { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.popular'), 'onClick': this.go},
        { 'selected': true, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('demo.auto'), 'onClick': this.go},
        { 'selected': false, 'showdot': true, 'disabled': false, 'badge': '1', 'text': this.$t('demo.gi'), 'onClick': this.go},
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

