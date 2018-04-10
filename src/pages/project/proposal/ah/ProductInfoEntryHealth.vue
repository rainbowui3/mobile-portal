<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card>
        <product-top :productImgSrc="productImgSrc" :productDes="productDes">
        </product-top>
      </card>
      <card>
        <plan-selection></plan-selection>
      </card>
      <card>
        <r-input :title="$t('productInfoEntryHealth.poi')" :model="policy" value="poi"  :readonly="true"></r-input>
        <date-time :title="$t('productInfoEntryHealth.birthday')" :model="policy" value="birthday" :format="timeFormat" :required="true"></date-time>
        <!--<card>-->
          <cell :type="row">
            <cell :span="6">
              <div class="margin_gender">{{$t('productInfoEntryHealth.gender')}}</div>
            </cell>
            <cell class="checker_list_row">
              <checker :max="1" :model="policy" value="value6" :data='list' :onChange="onChange" type="list" :required="true"/>
            </cell>
          </cell>

        <!--</card>-->
        <r-switch  :title="$t('productInfoEntryHealth.social')"  :model="policy" value="social" :required="true"></r-switch>
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
  RInput,
  Checker,
  Row
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import PlanSelection from "../../components/PlanSelection";
import ProposalCopies from "../../components/ProposalCopies";
import ProposalConfirm from "../../components/ProposalConfirm";
import Jtgj from "../../../../assets/jtgj.jpg";
import "../../../../i18n/ProductInfoEntryHealth";
import config from "config";

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
    RInput,
    Checker,
    Cell,
    DateTime,
    RSwitch,
    Row
  },
  data() {
    return {
      pageModel:{},
      row:"row",
      timeFormat:config.DEFAULT_DATE_FORMATER,
      linkInsuredInfoUrl: "/project/proposal/ah/insuredInfoEntryShortTerm",
      productImgSrc: Jtgj,
      productDes:
        "保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。",
      amount: "100",
      buttonName: "proposalConfirm.confirmInsure",
      policy: {
        poi:"1年",
        gender:"01",
        social:false,
        birthday:"",
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
        case "1":
          this.$router.push("/project/proposal/ah/InsuredInfoEntryHealth");
          break;
        case "2":
          this.$router.push("/project/proposal/ah/InsuredInfoEntryHealthSub");
          break;
        default:
          this.$router.push("/project/proposal/ah/InsuredInfoEntryHealth");
          break;
      }
    },
    onChange(){

    }  
  },
  created: function() {
    let templateFlag = this.$route.params.flag;
    this.templateFlag = templateFlag;
  },
  computed:{
      list(){
          return [{"key":"01","value":"男",'disabled':true},{"key":"02","value":"女"}]
      },
  }
};
</script>

<style>
.checker_list_row > div > div > .weui-cells_checkbox > label{
float: left;
}
.margin_gender{
  margin-left: 16px;
 }


</style>
