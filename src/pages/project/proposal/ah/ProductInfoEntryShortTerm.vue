<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </card>
      <card>
        <checker type="icon" :text="$t('autoPlan.effectImmediately')" :model="pageModel" value="isEffectiveImmediately" class="isEffectiveImmediately" />
        <insurance-duration-shortTerm type="day" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate" :readonlyEf="pageModel.isEffectiveImmediately"></insurance-duration-shortTerm>
      </card>
      <card>
        <plan-selection></plan-selection>
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
  RBody,
  Checker
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import PlanSelection from "../../components/PlanSelection";
import ProposalCopies from "../../components/ProposalCopies";
import ProposalConfirm from "../../components/ProposalConfirm";
import "../../../../i18n/autoPlan";
import Jtgj from "../../../../assets/jtgj.jpg";
import "../../../../i18n/project";

export default {
  components: {
    Page,
    Card,
    TabBar,
    Top,
    Bottom,
    ProductTop,
    InsuranceDurationShortTerm,
    PlanSelection,
    ProposalCopies,
    ProposalConfirm,
    RBody,
    Checker
  },
  data() {
    return {
      pageModel:{
        isEffectiveImmediately:false
      },
      linkInsuredInfoUrl: "/project/proposal/ah/insuredInfoEntryShortTerm",
      productImgSrc: Jtgj,
      productDes:
        "保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。",
      amount: "100",
      buttonName: "proposalConfirm.confirmInsure",
      policy: {
        effectiveDate: "",
        expireDate: ""
      },
      templateFlag: ""
    };
  },
  methods: {
    onClick: function() {
      this.templateFlag = sessionStorage.getItem("ROUTE_FLAG");
      switch (this.templateFlag) {
        case "2":
          this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
          break;
        case "5":
          this.$router.push("/project/proposal/ah/InsuredInfoAccident");
          break;
        default:
          this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
          break;
      }
      // this.$router.push("/project/proposal/ah/insuredInfoEntryShortTerm");
    }
  },
  created: function() {
    let templateFlag = this.$route.params.flag;
    this.templateFlag = templateFlag;
  }
  // ,
  // mounted:function(){

  //     console.log(this.policy)
  // }
};
</script>

<style>
.isEffectiveImmediately {
  float: right;
  padding-top: 8px;
  padding-right: 13px;
}
</style>
