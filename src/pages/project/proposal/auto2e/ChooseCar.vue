<template>
  <page>
    <top :showBack="true" :title="$t('chooseCar.model')" />
    <r-body>
      <card>
        <selector :header="$t('chooseCar.family')" :title="$t('chooseCar.family')" :options="familyNameList" :model="model" value="familyName" />
        <selector :header="$t('chooseCar.brand')" :title="$t('chooseCar.brand')" :options="brandNameList" :model="model" value="brandName" />
        <selector :header="$t('chooseCar.engineDesc')" :title="$t('chooseCar.engineDesc')" :options="engineDescList" :model="model" value="engineDesc" />
        <selector :header="$t('chooseCar.gearboxType')" :title="$t('chooseCar.gearboxType')" :options="gearboxTypeList" :model="model" value="gearboxType" />
        <checker :max="1" :model="model" value="value6" :data='lists' type="list" />
      </card>
    </r-body>
  </page>
</template>

<script>
import {
  Page,
  RBody,
  Selector,
  Cell,
  Card,
  Checker
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/chooseCar";
export default {
  components: {
    Page,
    RBody,
    Selector,
    Cell,
    Top,
    Card,
    Checker
  },
  props: {},
  data() {
    return {
      model: {},
      familyNameList: [
        { key: "1", value: "宝马" },
        { key: "2", value: "华晨宝马" }
      ],
      brandNameList: [{ key: "1", value: "x3" }, { key: "2", value: "x5" }],
      gearboxTypeList: [
        { key: "1", value: "手动挡" },
        { key: "1", value: "自动挡" }
      ],
      engineDescList: [
        { key: "1", value: "1.0T" },
        { key: "2", value: "2.0T" },
        { key: "3", value: "3.0T" }
      ],
      lists: [
        {
          key: "1",
          value: "江淮HFC7161MV轿车",
          inlineDesc: " 手动挡 201609 ￥69800.0"
        },
        {
          key: "2",
          value: "江淮HFC7161MV轿车",
          inlineDesc: " 手动挡 201609 ￥64800.0"
        },
        {
          key: "3",
          value: "江淮HFC7161MV轿车",
          inlineDesc: " 手动挡 201609 ￥76800.0"
        }
      ]
    };
  },
  methods: {},
  created:function(){
    console.log(this.$route.params.carModel);
  },
  mounted:function(){

  }
};
</script>

<style>

</style>
