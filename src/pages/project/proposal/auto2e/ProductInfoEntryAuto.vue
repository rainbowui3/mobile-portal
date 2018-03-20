<template>
    <page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </card>
            <card>
                <r-switch :title="$t('productInfoEntryAuto.agentBiz')" :model="policy" value="isAgent" :onClick="onClick" />
                <auto-agent v-show="policy.isAgent"></auto-agent>
            </card>
            <card>
                <picker :title="$t('productInfoEntryAuto.riskCat')" :model="policy" :value="value" :options="q"></picker>
                <picker :title="$t('productInfoEntryAuto.bizCode')" :model="policy" :value="value" :options="q"></picker>
                <r-input v-if="true" :title="$t('productInfoEntryAuto.productCode')" :placeholder="$t('productInfoEntryAuto.chooseBizCodeFirst')"></r-input>
                <picker :title="$t('productInfoEntryAuto.productCode')" :model="policy" :value="value" :options="q" v-else></picker>
            </card>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="_onClick">{{$t('common.next')}}</r-button>          
        </tab-bar>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Jtgj from "../../../../assets/jtgj.jpg";
import ProductTop from "../../components/ProductTop";
import AutoAgent from "../../components/AutoAgent";
import "../../../../i18n/productInfoEntryAuto";

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RSwitch,
    Picker,
    RInput,
    AutoAgent,
    ProductTop,
    TabBar,
    RButton
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: "车险",
      row: "row",
      policy: {
        isAgent: true,
        value1: "12"
      }
    };
  },
  methods: {
    onClick(value) {
      this.policy.isAgent = !value;
    }
  }
};
</script>

<style>

</style>

