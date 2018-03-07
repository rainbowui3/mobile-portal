<template>
  <page>
       <top :title="$t('component.component')" :showBack="true"/>
       <r-body>
         <tab :tabItems="tabItems"/>
         <grid :data="gridItems"/>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Grid, RBody } from "rainbow-mobile-core";
import i18n from "../../i18n/index";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import { Tab } from "rainbow-mobile-core";
export default {
  components: {
    Bottom,
    Top,
    Tab,
    Page,
    Grid,
    RBody
  },
  data() {
    return {};
  },
  computed: {
    tabItems() {
      return [
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("component.core"),
          onClick: this.core
        },
        {
          selected: false,
          showdot: true,
          disabled: false,
          badge: "1",
          text: this.$t("component.advanced"),
          onClick: this.advanced
        },
        {
          selected: true,
          showdot: false,
          disabled: false,
          badge: "",
          text: this.$t("component.business"),
          onClick: this.business
        }
      ];
    },
    gridItems() {
      return [
        { icon: "fa fa-address-card ", text: this.$t("component.address") },
        {
          icon: "fa fa-navicon ",
          text: this.$t("business.holderInfo"),
          link: "/component/example/holderInfo"
        },
        {
          icon: "fa fa-warning ",
          text: this.$t("business.insuranceDurationCurrency"),
          link: "/component/example/insuranceDurationCurrency"
        },
        {
          icon: "fa fa-circle-o ",
          text: this.$t("business.insuranceDurationShortTerm"),
          link: "/component/example/insuranceDurationShortTerm"
        },
        {
          icon: "fa fa-square-o ",
          text: this.$t("business.insuredInfo"),
          link: "/component/example/insuredInfo"
        },
        {
          icon: "fa fa-window-maximize ",
          text: this.$t("business.planSelection"),
          link: "/component/example/planSelection"
        },
        {
          icon: "fa fa-server ",
          text: this.$t("business.productTop"),
          link: "/component/example/productTop"
        },
        {
          icon: "fa fa-th-list ",
          text: this.$t("business.proposalClauseConfirm"),
          link: "/component/example/proposalClauseConfirm"
        },
        {
          icon: "fa fa-th-list ",
          text: this.$t("business.proposalClauseConfirm"),
          link: "/component/example/proposalConfirm"
        },
        {
          icon: "fa fa-check-square ",
          text: this.$t("business.proposalConfirmImme"),
          link: "/component/example/proposalConfirmImme"
        },
        {
          icon: "fa fa-info-circle ",
          text: this.$t("business.proposalCopies"),
          link: "/component/example/proposalCopies"
        },

        {
          icon: "fa fa-minus ",
          text: this.$t("business.proposalSubmitPay"),
          link: "/component/example/proposalSubmitPay"
        },
        {
          icon: "fa fa-comments",
          text: this.$t("business.subsidiaryInsuredInfo"),
          link: "/component/example/subsidiaryInsuredInfo"
        }
      ];
    }
  },
  methods: {
    core() {
      window.location.hash = "/component/core";
    },
    advanced() {
      window.location.hash = "/component/advanced";
    },
    business() {
      window.location.hash = "/component/business";
    }
  }
};
</script>

<style lang="less">

</style>

