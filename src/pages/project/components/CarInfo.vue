<template>
    <div>
        <cell type="row">
            <cell :span="6">
                <r-input :title="$t('carInfo.licenseNo')" :model="model" value="licenseNo" :placeholder="$t('carInfo.inputLicense')" />
            </cell>
            <cell :span="6">
                <r-switch :title="$t('carInfo.noLicense')" :model="model" value="noLicense" />
            </cell>
        </cell>
        <r-input :title="$t('carInfo.vin')" :model="model" value="vin" :placeholder="$t('carInfo.inputVin')" />
        <r-input :title="$t('carInfo.engineNo')" :model="model" value="engineNo" :placeholder="$t('carInfo.inputEngineNo')" />
        <r-input :title="$t('carInfo.model')" :model="model" value="model" :placeholder="$t('carInfo.inputModel')" :right="true">
            <span class="fa fa-search" @click="onClick"/>
        </r-input>
        <date-time :title="$t('carInfo.regiDate')" :model="model" value="VehicleInitialRegDate" />
        <r-input :title="$t('carInfo.newVehiclePurchasePrice')" :model="model" value="newVehiclePurchasePrice" :placeholder="$t('carInfo.inputPrice')" />
        <r-input :title="$t('carInfo.realValue')" :model="model" value="realValue" :placeholder="$t('carInfo.inputRealValue')" />
    </div>
</template>

<script>
import { Card, Cell, RInput, RSwitch, DateTime } from "rainbow-mobile-core";
import "../../../i18n/carInfo";
export default {
  components: {
    Card,
    Cell,
    RInput,
    RSwitch,
    DateTime
  },
  props: {},
  data() {
    return {
      model: {}
    };
  },
  methods:{
      onClick:function(){
          console.log("carInfo");
      }
  }
};
</script>

<style>

</style>