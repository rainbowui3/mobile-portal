<template>
    <r-page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <r-card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </r-card>
            <r-card>
                <r-switch :title="$t('productInfoEntryAuto.agentBiz')" :model="policy" value="isAgent" />
                <auto-agent v-show="policy.isAgent"></auto-agent>
            </r-card>
            <r-card>
                <r-picker :title="$t('productInfoEntryAuto.riskCat')" :model="policy" value="riskCat" :options="riskCatOptions"></r-picker>
                <r-picker :title="$t('productInfoEntryAuto.bizCode')" :model="policy" value="bizCode" :options="bizCodeOptions"></r-picker>
                <r-picker v-if="productCodeData" :title="$t('productInfoEntryAuto.productCode')" :model="policy" value="proCode" :options="proCodeOptions"></r-picker>
                <r-input v-else :title="$t('productInfoEntryAuto.productCode')" :placeholder="$t('productInfoEntryAuto.chooseBizCodeFirst')" :model="policy" value="proCode" :readonly="true"></r-input>
            </r-card>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('common.next')}}</r-button>          
        </r-tab-bar>

    </r-page>

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
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import Jtgj from '../../../../assets/jtgj.jpg';
import ProductTop from '../../components/ProductTop';
import AutoAgent from '../../components/AutoAgent';
import '../../../../i18n/productInfoEntryAuto';
import '../../../../i18n/autoAgent';

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
      productDes: '车险',
      row: 'row',
      policy: {
        isAgent: true,
        value1: '12',
        proCode: '',
        riskCat: [],
        bizCode: []

      },
      proCodeOptions: [],
      riskCatOptions: [],
      bizCodeOptions: [],
      productCodeData: null
    };
  },
  methods: {
    nextOnClick() {
        this.$router.push('/project/proposal/auto2e/CarAndOwnerInfoEntry');
        // this.$router.push("");
    }

  },
  computed: {

  }
};
</script>

<style>

</style>

