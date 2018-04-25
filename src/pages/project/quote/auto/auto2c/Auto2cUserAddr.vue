<template>
    <r-page>
        <top :showBack="true" :title="$t('auto2cUserAddr.title')" />
        <r-body>
            <r-input :title="$t('auto2cUserAddr.receiver')" :model="model" value="receiver"/>
            <r-input :title="$t('auto2cUserAddr.mobileNo')" :model="model" value="mobile"/>
            <r-row :title="$t('auto2cUserAddr.area')" :model="pageModel" :isLink="true" :onClick="gotoChooseArea.bind(this)"/>
            <r-textarea :title="$t('auto2cUserAddr.address')" :model="model" value="address" />
        </r-body>
        <r-tab-bar>
            <r-button type="primary">{{$t('common.save')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../../i18n/auto2cUserAddr';
export default {
  data() {
      return {
          pageModel: {},
          model: {}
      };
  },
  methods: {
      gotoChooseArea: function() {
        // Todo:跳转到选择地区页面
      }
  }
};
</script>

<style>

</style>
