<template>
  <r-page>
       <top :title="$t('business.productTop')" :showBack="true"/>
       <r-body>
       <r-card>
       <product-top :productImgSrc="productImgSrc"
                     :productDes="productDes"/>
       </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import { Page, Card, RTable, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import ProductTop from '../project/components/ProductTop';
import Jtgj from '../../assets/jtgj.jpg';
import '../../i18n/business';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    ProductTop,
    RBody
  },
  data() {
    return {
      productInfo: {},
      policy: {},
      productImgSrc: Jtgj,
      productDes: '保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。'
    };
  },
  created: function() {
    let productInfo = {
      planConfigFlag: '个人', // 方案配置分类:个人、家庭
      subsidiaryInsuredFlag: false, // 附属被保险人标识:是、否
      productName: 'xxxxx险',
      productImagePath: '../../../assets/jtgj.jpg',
      productDescription: '这是一个XXXX类型的产品',
      InsuranceTerm: [
        { key: 'oneYear', value: '一年' },
        { key: 'twoYear', value: '两年' },
        { key: 'threeYear', value: '三年' }
      ],
      Plans: [],
      copies: 1
    };
    let policy = {
      premium: 100,
      HolderInfo: {},
      InsuredInfo: [],
      SubsidiaryInsuredInfo: [],
      effectiveDate: '',
      expireDate: '',
      insuranceTerm: '',
      Plan: {},
      productCode: '',
      productName: ''
    };
    this.policy = policy;
    this.productInfo = productInfo;
  }
};
</script>

<style lang="less">

</style>

