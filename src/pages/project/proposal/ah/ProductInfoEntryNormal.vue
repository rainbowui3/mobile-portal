<template>
  <page>
    <top :title="$t('交通工具意外险')" :showBack="true" />
    <r-body>
      <card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </card>
      <card>
        <plan-selection></plan-selection>
      </card>
      <card>
        <insurance-duration-currency></insurance-duration-currency>
      </card>
      <card>
        <proposal-copies></proposal-copies>
      </card>
    </r-body>
    <tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
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
import Jtgj from "../../../../assets/jtgj.jpg";
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
      policy: {},
      productImgSrc: Jtgj,
      productDes:
        "保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。",
      amount: "100",
      buttonName: "确定投保"
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
      HolderInfo: {
        name: "",
        certificateId: "",
        certificateNum: "",
        birthdate: "",
        mobileNum: "",
        email: ""
      },
      InsuredInfo: [
        {
          name: "",
          certificateId: "",
          certificateNum: "",
          birthdate: "",
          mobileNum: "",
          email: "",
          relationToHolder: ""
        }
      ],
      SubsidiaryInsuredInfo: [
        {
          name: "",
          certificateId: "",
          certificateNum: "",
          birthdate: "",
          mobileNum: "",
          email: "",
          relationToHolder: "",
          relationToMainInsured: ""
        }
      ],
      effectiveDate: "",
      expireDate: "",
      insuranceTerm: "",
      Plan: {},
      productCode: "",
      productName: ""
    };
    this.policy = policy;
    this.productInfo = productInfo;
    sessionStorage.setItem("POLICY", JSON.stringify(this.policy));
  }
};
</script>

<style>

</style>
