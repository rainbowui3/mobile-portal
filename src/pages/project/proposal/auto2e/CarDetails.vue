<template>
    <r-page>
        <top :title="$t('carDetails.MoreInfo')" :showBack="true" />
        <r-body>
            <r-card>
                <!-- 核定载客数 -->
                <r-input :title="$t('carDetails.approvalSeatNumber')" :model="model" value="approvalSeatNumber" />
                <!-- 核定载质量 -->
                <r-input :title="$t('carDetails.approvalQuality')" :model="model" value="approvalQuality" />
                <!-- 整备质量 -->
                <r-input :title="$t('carDetails.vehicleQuality')" :model="model" value="vehicleQuality" />
                <!-- 排量 -->
                <r-input :title="$t('carDetails.engineDesc')" :model="model" value="engineDesc" />
                <!-- 功率 -->
                <r-input :title="$t('carDetails.power')" :model="model" value="power" />
            </r-card>
            <r-card>
                <!-- 车辆使用性质 -->
                <r-selector :title="$t('carDetails.vehicleUseNatureCode')" :model="model" value="vehicleUseNatureCode" :options="vehicleUseNatureCodeList" />
                <!-- 车辆种类 -->
                <r-selector :title="$t('carDetails.vehicleKindCode')" :model="model" value="vehicleKindCode" :options="vehicleKindCodeList" />
                <!-- 交管车辆种类 -->
                <r-selector :title="$t('carDetails.vehicleKindTCCode')" :model="model" value="vehicleKindTCCode" :options="vehicleKindTCCodeList" />
                <!-- 号牌种类 -->
                <r-selector :title="$t('carDetails.licenseType')" :model="model" value="licenseType" :options="licenseTypeList" />
                <!-- 使用年限 -->
                <r-input :title="$t('carDetails.useSeniority')" :model="model" value="useSeniority" />
                <!-- 车贷投保多年标志(车贷车标志) -->
                <r-switch :title="$t('carDetails.isLoanVehicle')" :model="model" value="isLoadVehicle" />
                <!-- 特殊车投保标志 -->
                <r-selector :title="$t('carDetails.specialApplicationCode')" :model="model" value="specialApplicationCode" :options="specialApplicationCodeList" />
                <r-button type="primary">{{$t('common.confirm')}}</r-button>
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import '../../../../i18n/carDetails';
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
      licenseTypeList: [
        { key: '01', value: '01-大型汽车号牌' },
        { key: '02', value: '02-小型汽车号牌' },
        { key: '03', value: '03-使馆汽车号牌' },
        { key: '04', value: '04-领馆汽车号牌' },
        { key: '05', value: '05-境外汽车号牌' },
        { key: '06', value: '06-外籍汽车号牌' },
        { key: '07', value: '07-挂车号牌' },
        { key: '08', value: '08-教练汽车号牌' },
        { key: '09', value: '09-实验汽车号牌' }
      ],
      specialApplicationCodeList: [
        { key: '1', value: '非特殊车' },
        { key: '2', value: '车辆所有权转移重新投保' },
        { key: '3', value: '临时入境的外籍机动车' },
        { key: '4', value: '临时上路行驶的机动车' },
        { key: '5', value: '距报废期限不足一年的机动车' },
        { key: '6', value: '其他保监会规定允许投保短期单的车' }
      ]
    };
  },
  methods: {}
};
</script>

<style>

</style>
