<template>
  <r-page>
    <top :title="$t('我是一个loading页面')" />
    <r-body>

    </r-body>
    <r-tab-bar></r-tab-bar>
  </r-page>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 读配置表
    next(vm => {
      switch (vm.$route.params.productCode) {
        case '1':
          // vm.typeList = ["normal", "normal", "normal", "normal"];
          vm.routeType = {
            productCode: '1',
            route1: 'normal',
            route2: 'normal',
            route3: 'normal',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
        case '2':
          // vm.typeList = ["shortTerm", "shortTerm", "normal", "normal"];
          vm.routeType = {
            productCode: '2',
            route1: 'shortTerm',
            route2: 'shortTerm',
            route3: 'normal',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
        case '3':
          // vm.typeList = ["shortTerm", "risk", "risk", "normal"];
          vm.routeType = {
            productCode: '3',
            route1: 'shortTerm',
            route2: 'accident',
            route3: 'accident',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
        case '4':
          // vm.typeList = ["normal", "passenger", "passenger", "normal"];
          vm.routeType = {
            productCode: '4',
            route1: 'normal',
            route2: 'passenger',
            route3: 'passenger',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
        case '5':
          // vm.typeList = ["normal", "studyRisk", "studyRisk", "normal"];
          vm.routeType = {
            productCode: '5',
            route1: 'normal',
            route2: 'studyRisk',
            route3: 'studyRisk',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
        case '6':
          // vm.typeList = ["health", "health", "health", "normal"];
          vm.routeType = {
            productCode: '6',
            route1: 'health',
            route2: 'health',
            route3: 'health',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
          case '7':
          vm.routeType = {
            productCode: '7',
            route1: 'v2/normal',
            route2: 'v2/normal',
            route3: 'v2/normal',
            route4: 'v2/normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
      }
    });
  },
  created: function() {
    let loadingPageFlag = sessionStorage.getItem('LOADING_PAGE_FLAG');
    if (loadingPageFlag) {
      sessionStorage.clear('LOADING_PAGE_FLAG');
      this.$router.push({
        path: '/demo'
      });
    } else {
      sessionStorage.setItem('LOADING_PAGE_FLAG', 'loadingPage');
    }
  },
  mounted() {},
  data() {
    return {
      routeType: {}
    };
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
            path:
              '/proposal/ah/AHRouterProduct/' +
              this.$route.params.productCode +
              '/' +
              this.$route.params.agentCode +
              '/' +
              this.routeType.route1
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
