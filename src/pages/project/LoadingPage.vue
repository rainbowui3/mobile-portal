<template>
  
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 读配置表
    next(vm => {
      switch (vm.$route.query.proposalTemplate) {
        case '1':
          // vm.typeList = ["normal", "normal", "normal", "normal"];
          vm.routeType = {
            productCode: 'PV1',
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
            productCode: 'PV1',
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
            productCode: 'PV1',
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
            productCode: 'PV1',
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
            productCode: 'PV1',
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
            productCode: 'PV1',
            route1: 'health',
            route2: 'health',
            route3: 'health',
            route4: 'normal'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
          case '7':
            // vm.typeList = ["health", "health", "health", "normal"];
            vm.routeType = {
              productCode: 'PV1',
              route1: 'health',
              route2: 'healthSub',
              route3: 'healthSub',
              route4: 'normal'
            };
            sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
            break;
          case '8':
          vm.routeType = {
            productCode: 'PV1',
            route1: 'yellow',
            route2: 'yellow',
            route3: 'yellow',
            route4: 'yellow'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
          case '9':
          vm.routeType = {
            productCode: 'PV1',
            route1: 'auto2c',
            route2: 'auto2c',
            route3: 'auto2c',
            route4: 'auto2c'
          };
          sessionStorage.setItem('ROUTE_TYPE', JSON.stringify(vm.routeType));
          break;
          default:
          vm.routeType = {
            productCode: 'PV1',
            route1: 'normal',
            route2: 'normal',
            route3: 'normal',
            route4: 'normal'
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
            path: '/proposal' + '/' + this.routeType.route1,
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
