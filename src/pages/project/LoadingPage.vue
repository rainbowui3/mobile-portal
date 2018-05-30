<template>
  <r-page>
    <r-toast :model="tips" value="show" :text="toastText" :onHide="onHide"></r-toast>
  </r-page>
</template>

<script>
import { UrlUtil } from 'rainbow-foundation-tools';
import {SessionContext} from 'rainbow-foundation-cache';
export default {
  beforeRouteEnter(to, from, next) {
    // 读配置表
    next(vm => {
      // 拿到前一个页面传过来的productCode & productVersion
      let productCode = vm.$route.query.productCode;
      let productVersion = vm.$route.query.productVersion;

      let url = UrlUtil.getConfigUrl(
        'API_GATEWAY_PROXY',
        'ROUTE_INFO',
        'GET_ROUTE'
      );
      let param = {
        productCode: productCode,
        version: productVersion
      };
      AjaxUtil.call(url, param, { method: 'POST' }).then(data => {
        if (data[0]) {
          data[0].productCode = productCode;
          data[0].productVersion = productVersion;
          vm.routeType = {
            productCode: data[0].productCode,
            productVersion: data[0].productVersion,
            route1: data[0].route1,
            route2: data[0].route2,
            route3: data[0].route3,
            route4: data[0].route4
          };
          SessionContext.put('ROUTE_TYPE', JSON.stringify(vm.routeType), true);
        } else {
          this.tips.show1 = true;
        }
      });
      // switch (vm.$route.query.proposalTemplate) {
      //   case '1':
      //     // vm.typeList = ["normal", "normal", "normal", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'normal',
      //       route2: 'normal',
      //       route3: 'normal',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //   case '2':
      //     // vm.typeList = ["shortTerm", "shortTerm", "normal", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'shortTerm',
      //       route2: 'shortTerm',
      //       route3: 'normal',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //   case '3':
      //     // vm.typeList = ["shortTerm", "risk", "risk", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'shortTerm',
      //       route2: 'accident',
      //       route3: 'accident',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //   case '4':
      //     // vm.typeList = ["normal", "passenger", "passenger", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'normal',
      //       route2: 'passenger',
      //       route3: 'passenger',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //   case '5':
      //     // vm.typeList = ["normal", "studyRisk", "studyRisk", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'normal',
      //       route2: 'studyRisk',
      //       route3: 'studyRisk',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //   case '6':
      //     // vm.typeList = ["health", "health", "health", "normal"];
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'health',
      //       route2: 'health',
      //       route3: 'health',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //     case '7':
      //       // vm.typeList = ["health", "health", "health", "normal"];
      //       vm.routeType = {
      //         productCode: 'PV1',
      //         route1: 'health',
      //         route2: 'healthSub',
      //         route3: 'healthSub',
      //         route4: 'normal'
      //       };
      //       sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //       break;
      //     case '8':
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'yellow',
      //       route2: 'yellow',
      //       route3: 'yellow',
      //       route4: 'yellow'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //     case '9':
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'auto2c',
      //       route2: 'auto2c',
      //       route3: 'auto2c',
      //       route4: 'auto2c'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      //     break;
      //     default:
      //     vm.routeType = {
      //       productCode: 'PV1',
      //       route1: 'normal',
      //       route2: 'normal',
      //       route3: 'normal',
      //       route4: 'normal'
      //     };
      //     sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      // }
    });
  },
  created: function() {
    let loadingPageFlag = SessionContext.get('LOADING_PAGE_FLAG');
    if (loadingPageFlag) {
      SessionContext.remove('LOADING_PAGE_FLAG');
      this.$router.go(-1);
    } else {
      SessionContext.put('LOADING_PAGE_FLAG', 'loadingPage', true);
    }
  },
  mounted() {},
  data() {
    return {
      tips: {
        show1: false
      },
      toastText: this.$t('common.success'),
      routeType: {}
    };
  },
  methods: {
    onHide: function() {
      this.$router.push({
        path: 'demo'
      });
    }
  },
  watch: {
    routeType: {
      handler: function() {
        if (
          this.routeType &&
          this.routeType.route1 &&
          this.routeType.route1 != ''
        ) {
          this.$router.push({
            path: '/rate' + '/' + this.routeType.route1,
            query: this.$route.query
          });
        }
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
