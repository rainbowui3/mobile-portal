// 意健险标的确认页面路由
<template>
  <div>
    <div>loading.........</div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { Page, RBody } from "rainbow-mobile-core";
export default {
  components: { Page, RBody },
  data() {
    return {};
  },
  created: function() {
    //console.log(this.$route);
  },
  mounted: function() {
    //读取配置表
    let value = "normal";
    switch (value) {
      case "normal":
        {
          this.$router.push({
            path:
              "/proposal/ah/AHRouterConfirm/" +
              this.$route.params.productCode +
              "/" +
              this.$route.params.agentCode,
            name: "AHRouterConfirmNormal",
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
        }
        break;
      case "health":
        {
        }
        break;
      default: {
        this.$router.push({
          path:
            "/proposal/ah/AHRouterConfirm/" +
            this.$route.params.productCode +
            "/" +
            this.$route.params.agentCode,
          name: "AHRouterConfirmNormal",
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
    console.log("beforeRouteEnter");
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    console.log(to);
    console.log(from);
    next();
  }
};
</script>

<style>

</style>
