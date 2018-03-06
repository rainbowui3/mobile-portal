<template>
  <page>
    <top :title="$t('安心意外保')" :showBack="true" />
    <r-body>
      <card>
        <product-top :productInfo="productInfo"></product-top>
      </card>
      <card>
        <insurance-duration-currency></insurance-duration-currency>
      </card>
      <card>
        <plan-selection></plan-selection>
      </card>
      <card>
        <proposal-copies></proposal-copies>
      </card>
    </r-body>
    <tab-bar>
      <proposal-confirm :onClick="onClick"></proposal-confirm>
    </tab-bar>

  </page>

</template>

<script>
import {
  Page,
  Card,
  RImage,
  RButton,
  Swiper,
  RSwitch,
  DateTime,
  Tab,
  SwiperItem,
  RTable,
  List,
  Selector,
  TabBar,
  Cell,
  RBody
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationCurrency from "../../components/InsuranceDurationCurrency";
import PlanSelection from "../../components/PlanSelection";
import ProposalCopies from "../../components/ProposalCopies";
import ProposalConfirm from "../../components/ProposalConfirm";
export default {
  components: {
    Page,
    Card,
    TabBar,
    Top,
    Bottom,
    ProductTop,
    InsuranceDurationCurrency,
    PlanSelection,
    ProposalCopies,
    ProposalConfirm,
    RBody
  },
  data() {
    return {
      productInfo: {},
      policy: {}
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/gi/insuredInfoEntryNormal");
    }
  },
  created: function() {
    let productInfo = {
      planConfigFlag: "个人", //方案配置分类:个人、家庭
      subsidiaryInsuredFlag: false, //附属被保险人标识:是、否
      productName: "xxxxx险",
      productImagePath: "../../../assets/jtgj.jpg",
      productDescription: "这是一个XXXX类型的产品",
      InsuranceTerm: [
        { key: "oneYear", value: "一年" },
        { key: "twoYear", value: "两年" },
        { key: "threeYear", value: "三年" }
      ],
      Plans: [],
      copies: 1
    };
    let policy = {
      premium: 100,
      HolderInfo: {},
      InsuredInfo: [],
      SubsidiaryInsuredInfo: [],
      effectiveDate: "",
      expireDate: "",
      insuranceTerm: "",
      Plan: {},
      productCode: "",
      productName: ""
    };
    this.policy = policy;
    this.productInfo = productInfo;
  }
};
</script>

<style>

</style>
