// 意健险产品页面路由
<template>
  <div>
    <div>loading.........</div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      typeList:[]
    };
  },
  created: function() {
    //console.log(this.$route);
  },
  mounted: function() {
    //读取配置表
    switch (this.value) {
      case "normal":
        {
          this.$router.push({
            path:
              "/proposal/ah/AHRouterProduct/" +
              this.$route.params.productCode +
              "/" +
              this.$route.params.agentCode +
              "/" +
              "normal",
            name: "AHRouterProductNormal",
            params: {
              productCode: this.$route.params.productCode,
              agentCode: this.$route.params.agentCode,
              typeList: ["normal", "normal", "normal", "normal"]
            }
          });
        }
        break;
      case "shortTerm":
        {
          this.$router.push({
            path:
              "/proposal/ah/AHRouterProduct/" +
              this.$route.params.productCode +
              "/" +
              this.$route.params.agentCode +
              "/" +
              "shortTerm",
            name: "AHRouterProductShortTerm",
            params: {

            }
          });
        }
        break;
      case "health":
        {
          this.$router.push({
            path: "/project/proposal/ah/productInfoEntryHealth",
            name: "ProductInfoEntryHealth",
            params: {
              productCode: this.$route.params.productCode,
              agentCode: this.$route.params.agentCode
            }
          });
        }
        break;
      default: {
        this.$router.push({
          path:
            "/proposal/ah/AHRouterProduct/" +
            this.$route.params.productCode +
            "/" +
            this.$route.params.agentCode +
            "/" +
            "normal",
          name: "AHRouterProductNormal",
          params: {
            productCode: this.$route.params.productCode,
            agentCode: this.$route.params.agentCode,
            typeList: ["normal", "normal", "normal", "normal"]
          }
        });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    //Todo:读配置表，获取路径等信息

    //mock:
    next(vm => {
      switch (vm.$route.params.productCode) {
        case "1":
          {
            vm.value = "normal";
            vm.typeList = ['normal','normal','normal','normal'];
          }
          break;
        case "2":
          {
            vm.value = "shortTerm";
            vm.typeList = ['shortTerm','shortTerm','normal','normal'];
          }
          break;
        case "3":
          {
            vm.value = "shortTerm";
            vm.typeList = ['shortTerm','risk','risk','normal'];
          }
          break;
        case "4":
          {
            vm.value = "normal";
            vm.typeList = ['normal','passenger','passenger','normal'];
          }
          break;
        case "5":
          {
            vm.value = "normal";
            vm.typeList = ['normal','studyRisk','studyRisk','normal'];
          }
          break;
        case "6":
          {
            vm.value = "health";
            vm.typeList = ['health','health','health','normal']
          }
          break;
        default:
          {
          }
          break;
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>

</style>
