<template>
  <r-page>
    <top :showBack="true" :title="$t('chooseCar.model')" />
    <r-body>
      <r-card>
        <r-selector :header="$t('chooseCar.family')" :title="$t('chooseCar.family')" :options="familyNameList" :model="model" value="familyName" />
        <r-selector :header="$t('chooseCar.brand')" :title="$t('chooseCar.brand')" :options="brandNameList" :model="model" value="brandName" />
        <r-selector :header="$t('chooseCar.engineDesc')" :title="$t('chooseCar.engineDesc')" :options="engineDescList" :model="model" value="engineDesc" />
        <r-selector :header="$t('chooseCar.gearboxType')" :title="$t('chooseCar.gearboxType')" :options="gearboxTypeList" :model="model" value="gearboxType" />
        <r-checker :max="1" :model="model" value="value6" :data='lists' type="list" />
      </r-card>
    </r-body>
  </r-page>
</template>

<script>
import '../../../../../i18n/chooseCar';
export default {
  props: {},
  data() {
    return {
      model: {},
      familyNameList: [
        { key: '1', value: '宝马' },
        { key: '2', value: '华晨宝马' }
      ],
      brandNameList: [{ key: '1', value: 'x3' }, { key: '2', value: 'x5' }],
      gearboxTypeList: [
        { key: '1', value: '手动挡' },
        { key: '1', value: '自动挡' }
      ],
      engineDescList: [
        { key: '1', value: '1.0T' },
        { key: '2', value: '2.0T' },
        { key: '3', value: '3.0T' }
      ],
      lists: [
        {
          key: '1',
          value: '江淮HFC7161MV轿车',
          inlineDesc: ' 手动挡 201609 ￥69800.0'
        },
        {
          key: '2',
          value: '江淮HFC7161MV轿车',
          inlineDesc: ' 手动挡 201609 ￥64800.0'
        },
        {
          key: '3',
          value: '江淮HFC7161MV轿车',
          inlineDesc: ' 手动挡 201609 ￥76800.0'
        }
      ]
    };
  },
  methods: {},
  mounted: function() {

  }
};
</script>

<style>

</style>
