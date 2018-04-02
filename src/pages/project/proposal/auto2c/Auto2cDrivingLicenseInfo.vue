<template>
    <page>
        <top :showBack="true" :title="$t('auto2cDrivingLicenseInfo.title')" />
        <r-body>
            <card>
                <cell type="row">
                    <cell :span="7">
                        <r-input :title="$t('carInfo.licenseNo')" :model="model" value="LicenseNo" :placeholder="$t('carInfo.inputLicense')" :required="true" />
                    </cell>
                    <cell>
                        <!-- <r-button type="primary" :mini="true">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button> -->
                        <r-button type="primary" class="fa fa-qrcode fa-2x">{{$t('auto2cDrivingLicenseInfo.scanLicense')}}</r-button>
                    </cell>
                </cell>
                <r-input :title="$t('autoProposalInfoConfirm.model')" :model="model" value="Model" :required="true" :placeholder="$t('carInfo.inputModel')" />
                <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="model" value="VehicleCode" :required="true" :placeholder="$t('auto2cDrivingLicenseInfo.inputVehicleCode')" />
                <r-input :title="$t('carInfo.engineNo')" :model="model" value="EngineNo" :required="true" :placeholder="$t('carInfo.inputEngineNo')" />
                <date-time :title="$t('auto2cDrivingLicenseInfo.registryDate')" :model="model" value="RegistryDate" :required="true" />
                <selector :title="$t('auto2cDrivingLicenseInfo.carType')" :model="pageModel" value="CarType" :options="carTypeList" />
            </card>
        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('auto2cDrivingLicenseInfo.quotationNow')}}</r-button>
        </tab-bar>
    </page>
</template>

<script>
import {
  Page,
  RBody,
  Card,
  TabBar,
  RButton,
  RInput,
  Row,
  Cell,
  DateTime,
  Selector
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/auto2cDrivingLicenseInfo";
import "../../../../i18n/carInfo";
import "../../../../i18n/autoProposalInfoConfirm";
export default {
  components: {
    Page,
    RBody,
    Card,
    TabBar,
    RButton,
    RInput,
    Row,
    Cell,
    Top,
    DateTime,
    Selector
  },
  data() {
    return {
      pageModel: {},
      model: {},
      carTypeList: [
        { key: "1", value: "小型汽车" },
        { key: "2", value: "大型汽车" },
        { key: "3", value: "专用汽车" }
      ]
    };
  },
  methods: {}
};
</script>

<style>

</style>
