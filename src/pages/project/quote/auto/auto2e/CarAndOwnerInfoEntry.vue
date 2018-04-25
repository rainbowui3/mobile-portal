<template>
  <r-page>
    <top :title="$t('carAndOwnerInfoEntry.carAndOwnerInfo')" :showBack="true" />
    <r-body>
      <r-card :title="$t('carInfo.carInfo')">
        <car-info :model="model" :required="true" :novalidate="false" />
        <r-switch :title="$t('carAndOwnerInfoEntry.isTransferVehicle')" :model="model" value="isTransferVehicle" />
        <r-date-time :title="$t('carAndOwnerInfoEntry.vehicleTransferRegDate')" :model="model" value="vehicleTransferRegDate" :required="true" :novalidate="false" />
      </r-card>
      <r-card :title="$t('carAndOwnerInfoEntry.carOwnerInfo')">
        <r-selector :title="$t('carOwner.customerType')" :options="options_cusType" :model="model" value="customerType" :required="true" :novalidate="false" />
        <car-owner :model="model" :required="true" :novalidate="false" />
      </r-card>
      <div class="linka" @click="onMoreInfoClick()">
        <a href="javascript:void(0);">{{$t('carAndOwnerInfoEntry.moreCarInfo')}}</a>
      </div>
      <r-button type="primary" :onClick="nextClick">{{$t('common.next')}}</r-button>
    </r-body>
  </r-page>
</template>

<script>
import CarInfo from '../../../components/CarInfo';
import CarOwner from '../../../components/CarOwner';
import '../../../../../i18n/carInfo';
import '../../../../../i18n/carAndOwnerInfoEntry';
export default {
  components: {
    CarInfo,
    CarOwner
  },
  data() {
    return {
      model: {
        isTransferVehicle: false
      },
      options_cusType: [
        { key: '1', value: '个人' },
        { key: '2', value: '机关' },
        { key: '3', value: '企业' }
      ]
    };
  },
  methods: {
    onMoreInfoClick: function() {
      // 跳转暂时根据过户车标志来判断：false:跳转到机动车更多车辆信息页面，true:跳转到摩托车页面
      if (this.model.isTransferVehicle) {
        this.$router.push({
          path: '/project/proposal/auto2e/CarDetailsMotor',
          name: 'CarDetailsMotor',
          params: {}
        });
      } else {
        this.$router.push({
          path: '/project/proposal/auto2e/CarDetails',
          name: 'CarDetails',
          params: {}
        });
      }
    },
    nextClick() {
       this.$router.push('/project/proposal/auto2e/AutoPlan');
    }
  }
};
</script>

<style>
.link {
  font-size: 14px;
}
.linka {
  text-align: center;
}
</style>