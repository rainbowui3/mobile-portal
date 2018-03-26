<template>
  <page>
    <top :title="$t('carAndOwnerInfoEntry.carAndOwnerInfo')" :showBack="true" />
    <r-body>
      <card :title="$t('carInfo.carInfo')">
        <car-info :model="model" :required="true" :novalidate="false" />
        <r-switch :title="$t('carAndOwnerInfoEntry.isTransferVehicle')" :model="model" value="isTransferVehicle" />
        <date-time :title="$t('carAndOwnerInfoEntry.vehicleTransferRegDate')" :model="model" value="vehicleTransferRegDate" :required="true" :novalidate="false" />
      </card>
      <card :title="$t('carAndOwnerInfoEntry.carOwnerInfo')">
        <selector :title="$t('carOwner.customerType')" :options="options_cusType" :model="model" value="customerType" :required="true" :novalidate="false" />
        <car-owner :model="model" :required="true" :novalidate="false" />
      </card>
      <div class="linka" @click="onMoreInfoClick()">
        <a href="javascript:void(0);">{{$t('carAndOwnerInfoEntry.moreCarInfo')}}</a>
      </div>
      <r-button type="primary">{{$t('common.next')}}</r-button>
    </r-body>
  </page>
</template>

<script>
import {
  Page,
  Card,
  RBody,
  RButton,
  TabBar,
  RSwitch,
  DateTime,
  Selector
} from "rainbow-mobile-core";
import CarInfo from "../../components/CarInfo";
import CarOwner from "../../components/CarOwner";
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import "../../../../i18n/carInfo";
import "../../../../i18n/carAndOwnerInfoEntry";
export default {
  components: {
    Page,
    Card,
    CarInfo,
    CarOwner,
    Top,
    Bottom,
    RBody,
    RButton,
    TabBar,
    RSwitch,
    DateTime,
    Selector
  },
  data() {
    return {
      model: {
        isTransferVehicle: false
      },
      options_cusType: [
        { key: "1", value: "个人" },
        { key: "2", value: "机关" },
        { key: "3", value: "企业" }
      ],
    };
  },
  methods: {
    onMoreInfoClick: function() {
      //跳转暂时根据过户车标志来判断：false:跳转到机动车更多车辆信息页面，true:跳转到摩托车页面
      if (this.model.isTransferVehicle) {
        this.$router.push({
          path: "/project/proposal/auto2e/CarDetailsMotor",
          name: "CarDetailsMotor",
          params: {}
        });
      } else {
        this.$router.push({
          path: "/project/proposal/auto2e/CarDetails",
          name: "CarDetails",
          params: {}
        });
      }
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