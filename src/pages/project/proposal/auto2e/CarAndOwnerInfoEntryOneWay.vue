<template>
  <page>
    <top :title="$t('carAndOwnerInfoEntry.carAndOwnerInfo')" :showBack="true" />
    <r-body>
      <card :title="$t('carInfo.carInfo')">
        <car-info :model="model" :required="true" :novalidate="false"/>
        <r-input :title="$t('carAndOwnerInfoEntryOneWay.vehicleInvoiceNo')" :model="model" value="vehicleInvoiceNo" :placeholder="$t('carAndOwnerInfoEntryOneWay.inputVehicleInvoiceNo')" :required="true" :novalidate="false"/>
      </card>
      <card :title="$t('carAndOwnerInfoEntry.carOwnerInfo')">
        <selector :title="$t('carOwner.customerType')" :options="options_cusType" :model="model" value="customerType" :required="true" :novalidate="false"/>
        <car-owner :model="model" :required="true" :novalidate="false"/>
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
  DateTime,
  RInput,
  Selector
} from 'rainbow-mobile-core';
import CarInfo from '../../components/CarInfo';
import CarOwner from '../../components/CarOwner';
import Top from '../../../../components/Top';
import Bottom from '../../../../components/Bottom';
import '../../../../i18n/carInfo';
import '../../../../i18n/row';
import '../../../../i18n/carAndOwnerInfoEntry';
import '../../../../i18n/carAndOwnerInfoEntryOneWay';
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
    RInput,
    Selector
  },
  data() {
    return {
      model: {},
      showModel: {
        modelSelectShow: false
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
      this.$router.push({
        path: '/project/proposal/auto2e/CarDetailsOneWay',
        name: 'CarDetailsOneWay',
        params: {

        }
      });
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
