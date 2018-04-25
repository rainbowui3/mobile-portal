<template>
    <r-page>
        <top :showBack="true" :title="$t('auto2cDrivingLicenseInfo.title')" />
        <r-body>
            <r-card>
                <r-cell type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('carInfo.licenseNo')" :model="model" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" />
                    </r-cell>
                    <r-cell>
                        <!-- <r-button type="primary" :mini="true">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button> -->
                        <r-button type="primary" class="fa fa-qrcode fa-2x">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button>
                    </r-cell>
                </r-cell>
                <r-input :title="$t('autoProposalInfoConfirm.model')" :model="model" value="Model" :required="true" :placeholder="$t('carInfo.inputModel')" />
                <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="model" value="VehicleCode" :required="true" :placeholder="$t('auto2cDrivingLicenseInfo.inputVehicleCode')" />
                <r-input :title="$t('carInfo.engineNo')" :model="model" value="EngineNo" :required="true" :placeholder="$t('carInfo.inputEngineNo')" />
                <r-date-time :title="$t('auto2cDrivingLicenseInfo.registryDate')" :model="model" value="RegistryDate" :required="true" />
                <r-selector :title="$t('auto2cDrivingLicenseInfo.carType')" :model="pageModel" value="CarType" :options="carTypeList" />
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="quotationClick">{{$t('auto2cDrivingLicenseInfo.quotationNow')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../../i18n/auto2cDrivingLicenseInfo';
import '../../../../../i18n/carInfo';
import '../../../../../i18n/autoProposalInfoConfirm';
export default {
  data() {
    return {
      pageModel: {},
      model: {},
      carTypeList: [
        { key: '1', value: '小型汽车' },
        { key: '2', value: '大型汽车' },
        { key: '3', value: '专用汽车' }
      ]
    };
  },
  methods: {
      quotationClick() {
          this.$router.push({
             paht: '/project/proposal/auto2c/Auto2cPlan',
             name: 'Auto2cPlan'
          });
      }
  }
};
</script>

<style>

</style>
