<template>
    <r-page>
        <top :showBack="true" :title="$t('carDetailsMotor.carDetails')"/>
        <r-body>
            <r-card>
                <!-- 车辆使用性质 -->
                <r-selector :title="$t('carDetails.vehicleUseNatureCode')" :model="model" value="vehicleUseNatureCode" :options="vehicleUseNatureCodeList" />
                <!-- 车辆种类 -->
                <r-selector :title="$t('carDetails.vehicleKindCode')" :model="model" value="vehicleKindCode" :options="vehicleKindCodeList" />
                <!-- 排量/功率 -->
                <r-selector :title="$t('carDetailsMotor.dOrP')" :model="model" value="power" :options="motorPowerList" />
                <!-- 核定载客数 -->
                <r-input :title="$t('carDetails.approvalSeatNumber')" :model="model" value="approvalSeatNumber" />
                <!-- 使用年限 -->
                <r-input :title="$t('carDetails.useSeniority')" :model="model" value="useSeniority" />
                <r-button type="primary">{{$t('common.confirm')}}</r-button>
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import '../../../../../i18n/carDetails';
import '../../../../../i18n/carDetailsMotor';
export default {
  props: {},
  data() {
    return {
      model: {},
      // MOCK数据
      vehicleUseNatureCodeList: [
        { key: '1', value: '营业出租租赁' },
        { key: '2', value: '营业城市公交' },
        { key: '3', value: '营业公路货运' },
        { key: '4', value: '非营业货运' },
        { key: '5', value: '家庭自用' }
      ],
      vehicleKindCodeList: [
        { key: '1', value: '客车' },
        { key: '2', value: '货车' }
      ],
      vehicleKindTCCodeList: [
        { key: 'B11', value: 'B11-重型普通半挂车' },
        { key: 'B12', value: 'B12-重型厢式半挂车' },
        { key: 'B2A', value: 'B2A-中型专项作业半挂车' },
        { key: 'B21', value: 'B21-中型普通半挂车' },
        { key: 'K26', value: 'K25-中型轿车' }
      ],
      specialApplicationCodeList: [
        { key: '1', value: '非特殊车' },
        { key: '2', value: '车辆所有权转移重新投保' },
        { key: '3', value: '临时入境的外籍机动车' },
        { key: '4', value: '临时上路行驶的机动车' },
        { key: '5', value: '距报废期限不足一年的机动车' },
        { key: '6', value: '其他保监会规定允许投保短期单的车' }
      ],
      motorPowerList: [
        { key: '1', value: '50CC一下' },
        { key: '2', value: '50CC-250CC' },
        { key: '3', value: '250CC以上' },
        { key: '4', value: '14.7KW以下' },
        { key: '5', value: '14.7KW以上' }
      ]
    };
  },
  methods: {}
};
</script>

<style>

</style>
