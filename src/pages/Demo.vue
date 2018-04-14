<template>
  <page>
    <top :title="$t('demo.example')" :showBack="true" />
    <r-body>
      <tab :tabItems="tabItems" />
      <r-image :list="products" />
    </r-body>
    <bottom :index="3" />
  </page>
</template>

<script>
import { Page, Tab, RImage, RBody } from "rainbow-mobile-core";
import Bottom from "../components/Bottom";
import Top from "../components/Top";
import Female from "../assets/female.jpg";
import Fire from "../assets/fire.png";
import Jcx from "../assets/jcx.jpg";
import Jtgj from "../assets/jtgj.jpg";
import Ly from "../assets/ly.jpg";
import Tthj from "../assets/tthj.jpg";
import Xpx from "../assets/xpx.jpg";
import Ycx from "../assets/ycx.jpg";
import Ywx from "../assets/ywx.jpg";
import Zrx from "../assets/zrx.jpg";
import "../i18n/demo";
import "../i18n/component";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Tab,
    RImage,
    RBody
  },
  data() {
    return {
      products: [
        {
          class: "product",
          src: Ly,
          onClick: this.goto,
          param:{
            name:"ProductInfoEntryNormal",
            url:"/proposal/LoadingPage/1/1",
            flag:"1"
          } 
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: "product",
          src: Jcx,
          onClick: this.goto,
          param:{
            name:"ProductInfoEntryShortTerm",
            url:"/project/proposal/ah/productInfoEntryShortTerm",
            flag:"2"
          } 
          
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: "product",
          src: Female,
          onClick: this.goto,
          param:{
            name:"ProductInfoEntryNormal",
            url:"/project/proposal/ah/productInfoEntryNormal",
            flag:"3"
          } 
          
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: "product",
          src: Fire,
          onClick: this.goto,
          param:{
            name:"ProductInfoEntryNormal",
            url:"/project/proposal/ah/productInfoEntryNormal",
            flag:"4"
          } 
          // param: "/project/proposal/ah/productInfoEntryNormal"
        },
        {
          class: "product",
          src: Jtgj,
          onClick: this.goto,
          param:{
            name:"ProductInfoEntryShortTerm",
            url:"/project/proposal/ah/productInfoEntryShortTerm",
            flag:"5"
          }
          // param: "/project/proposal/ah/InsuredInfoAccident"
        },
        {
          class: "product",
          src: Tthj,
          onClick: this.goto,
          param: {
            name:"ProductInfoEntryAuto",
            url:"/project/proposal/auto2e/ProductInfoEntryAuto",
            flag:"6"
          }
        },
        {
          class: "product",
          src: Xpx,
          onClick: this.goto,
          param: "/project/ly"
        },
        {
          class: "product",
          src: Ycx,
          onClick: this.goto,
          param: "/project/ly"
        },
        {
          class: "product",
          src: Ywx,
          onClick: this.goto,
          param: "/project/ly"
        },
        { class: "product", src: Zrx, onClick: this.goto, param: "/project/ly" }
      ]
    };
  },
  methods: {
    goto(param) { 
      // window.location.hash = param;
      sessionStorage.setItem("ROUTE_FLAG", param.flag);
    this.$router.push({
        path:param.url,
        params:{
            flag:param.flag
          }
    })
 },
    go(index) {
      switch (index) {
        case 0:
          window.location.hash = "/demo";
          break;
        case 1:
          window.location.hash = "/demo/auto";
          break;
        case 2:
          window.location.hash = "/demo/ah";
          break;
        case 3:
          window.location.hash = "/demo/ah";
          break;
        default:
          window.location.hash = "/demo";
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
          badge: "",
          text: this.$t('common.popular'),
          onClick: this.go
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("common.auto"),
          onClick: this.go
        },
        {
          selected: false,
          showdot: true,
          disabled: false,
          badge: "1",
          text: this.$t("common.gi"),
          onClick: this.go
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("common.ah"),
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

