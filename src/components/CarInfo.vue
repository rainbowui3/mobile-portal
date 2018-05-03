<template>
  <div>
    <r-cell type="row">
      <r-cell :span="6">
        <r-input :title="$t('carInfo.licenseNo')" :model="model" value="licenseNo" :placeholder="$t('carInfo.inputLicense')" :required="required" :novalidate="novalidate" />
      </r-cell>
      <r-cell :span="6">
        <r-switch :title="$t('carInfo.noLicense')" :model="model" value="noLicense" />
      </r-cell>
    </r-cell>
    <r-input :title="$t('carInfo.vin')" :model="model" value="vin" :placeholder="$t('carInfo.inputVin')" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('carInfo.engineNo')" :model="model" value="engineNo" :placeholder="$t('carInfo.inputEngineNo')" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('carInfo.model')" :model="model" value="model" :placeholder="$t('carInfo.inputModel')" :right="true" :required="required" :novalidate="novalidate">
      <span class="fa fa-search" @click="onClick" />
    </r-input>
    <r-date-time :title="$t('carInfo.regiDate')" :model="model" value="VehicleInitialRegDate" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('carInfo.newVehiclePurchasePrice')" :model="model" value="newVehiclePurchasePrice" :placeholder="$t('carInfo.inputPrice')" :required="required" :novalidate="novalidate" />
    <r-input :title="$t('carInfo.realValue')" :model="model" value="realValue" :placeholder="$t('carInfo.inputRealValue')" :required="required" :novalidate="novalidate" />
    <r-toast :model="pageModel" value="toast" :text="$t('carInfo.toast')" :time='1000' type="warn"/>
  </div>
</template>

<script>
import '../i18n/carInfo';
export default {
  props: {
    required: {
      type: Boolean,
      default() {
        return false;
      }
    },
    novalidate: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      model: {},
      pageModel: {
        toast: false
      }
    };
  },
  methods: {
    onClick: function() {
      if (this.model.model && this.model.model != '') {
        this.$router.push({
          path: '/project/proposal/auto2e/ChooseCar',
          name: 'ChooseCar',
          params: {
            carModel: this.model.model
          }
        });
      } else {
        this.pageModel.toast = true;
      }
    }
  }
};
</script>

<style>

</style>