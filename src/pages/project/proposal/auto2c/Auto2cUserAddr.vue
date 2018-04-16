<template>
    <page>
        <top :showBack="true" :title="$t('auto2cUserAddr.title')" />
        <r-body>
            <r-input :title="$t('auto2cUserAddr.receiver')" :model="model" value="receiver"/>
            <r-input :title="$t('auto2cUserAddr.mobileNo')" :model="model" value="mobile"/>
            <row :title="$t('auto2cUserAddr.area')" :model="pageModel" :isLink="true" :onClick="gotoChooseArea.bind(this)"/>
            <r-textarea :title="$t('auto2cUserAddr.address')" :model="model" value="address" />
        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('common.save')}}</r-button>
        </tab-bar>
    </page>
</template>

<script>
import {
  Page,
  RBody,
  Card,
  RInput,
  Row,
  TabBar,
  RButton,
  RTextarea
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import '../../../../i18n/auto2cUserAddr';
export default {
  components: {
    Page,
    RBody,
    Card,
    RInput,
    Row,
    TabBar,
    RButton,
    Top,
RTextarea
  },
  data() {
      return {
          pageModel: {},
          model: {}
      };
  },
  methods: {
      gotoChooseArea: function() {
        // Todo:跳转到选择地区页面
        console.log('gotoChooseArea');
      }
  }
};
</script>

<style>

</style>
