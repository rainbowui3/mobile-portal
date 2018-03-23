<template>
  <page>
    <top :title="$t('productInfoEntryNormal.vehicleAccidentInsurance')" :showBack="true" />
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
import "../../../../i18n/productInfoEntryNormal";
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
      buttonName: "proposalConfirm.confirmInsure",
      templateFlag:""
    };
  },
  methods: {
    onClick: function() {
      this.templateFlag = sessionStorage.getItem("ROUTE_FLAG");
      switch(this.templateFlag) {
        case"1":
         this.$router.push("/project/proposal/ah/insuredInfoEntryNormal");
        break;
        case"3":
          this.$router.push("/project/proposal/ah/InsuredInfoStudyRisk");
        break;
        case"4":
         this.$router.push("/project/proposal/ah/InsuredInfoEntryPassenger");
        break;
        default: 
          this.$router.push("/project/proposal/ah/insuredInfoEntryNormal");
          break;
      }
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
    let templateFlag = this.$route.params.flag
    this.policy = policy;
    this.productInfo = productInfo;
    this.templateFlag = templateFlag;
    sessionStorage.setItem("POLICY", JSON.stringify(this.policy));
    
    // console.log(this.$route.params.flag);
  }
};
</script>

<style>

</style>
