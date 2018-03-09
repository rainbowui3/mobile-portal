<template>
    <page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes">
                </product-top>
            </card>
            <card>
                <insurance-duration-shortTerm type="minute" :model="policy" :value="jsonParamIDS"></insurance-duration-shortTerm>
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
  RBody
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
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
    InsuranceDurationShortTerm,
    PlanSelection,
    ProposalCopies,
    ProposalConfirm,
    RBody
  },
  data() {
    return {
      linkInsuredInfoUrl: "/project/proposal/gi/insuredInfoEntryShortTerm",
      productImgSrc: Jtgj,
      productDes:
        "保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。",
      amount: "100",
      buttonName: "确定投保",
      policy: {
        effectiveDate: "",
        expireDate: ""
      },
      jsonParamIDS: [
        { bindField: "effectiveDate", required: true },
        { bindField: "expireDate", required: false }
      ]
    };
  },
  methods: {
    onClick: function() {
      this.$router.push("/project/proposal/gi/insuredInfoEntryShortTerm");
    }
  }
  // ,
  // mounted:function(){

  //     console.log(this.policy)
  // }
};
</script>

<style>

</style>
