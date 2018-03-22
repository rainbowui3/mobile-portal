<template>
  <page>
    <top :title="$t('carAndOwnerInfoEntry.carAndOwnerInfo')" :showBack="true" />
    <r-body>
      <card :title="$t('carInfo.carInfo')">
        <car-info :model="model" />
        <r-switch :title="$t('carAndOwnerInfoEntry.isTransferVehicle')" :model="model" value="isTransferVehicle" />
        <date-time :title="$t('carAndOwnerInfoEntry.vehicleTransferRegDate')" :model="model" value="vehicleTransferRegDate" />
      </card>
      <card :title="$t('carAndOwnerInfoEntry.carOwnerInfo')">
        <car-owner/>
      </card>
      <div class="linka" @click="onMoreInfoClick()">
        <a href="javascript:void(0);">{{$t('carAndOwnerInfoEntry.moreCarInfo')}}</a>
      </div>
      <tab-bar>
        <r-button type="primary">{{$t('common.next')}}</r-button>
      </tab-bar>
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
  DateTime
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
    DateTime
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    onMoreInfoClick: function() {}
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