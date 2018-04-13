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
      value:""
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
            path: "/project/proposal/ah/productInfoEntryShortTerm",
            name: "ProductInfoEntryShortTerm",
            params: {
              productCode: this.$route.params.productCode,
              agentCode: this.$route.params.agentCode
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
    next((vm) => {
      console.log(vm.$route);
      switch(vm.$route.params.productCode){
        case '1':{
          vm.value="normal";
        }break;
        case '2':{}break;
        case '3':{}break;
        case '4':{}break;
        case '5':{}break;
        case '6':{}break;
        default:{}break;
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
