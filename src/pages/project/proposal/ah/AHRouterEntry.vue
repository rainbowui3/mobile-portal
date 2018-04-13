// 意健险标的页面路由
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
              "/proposal/ah/AHRouterEntry/" +
              this.$route.params.productCode +
              "/" +
              this.$route.params.agentCode +
              "normal",
            name: "AHRouterEntryNormal",
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
            "/proposal/ah/AHRouterEntry/" +
            this.$route.params.productCode +
            "/" +
            this.$route.params.agentCode +
            "normal",
          name: "AHRouterEntryNormal",
          params: {
            productCode: this.$route.params.productCode,
            agentCode: this.$route.params.agentCode,
            typeList: ["normal", "normal", "normal", "normal"]
          }
        });
      }
    }
  }
};
</script>

<style>

</style>
