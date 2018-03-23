<template>
    <page>
        <top :title="$t('autoVehicleAndVesselTax.carShipTax')" :showBack="true" />
        <r-body>
            <card>
              <picker :title="$t('autoVehicleAndVesselTax.taxesSign')" :model="policy" value="taxesSign" :options="list1" ></picker>
              <date-time  :title="$t('autoVehicleAndVesselTax.lastTaxStart')" :model="policy" value="lastTaxStart" :format="formatDate"></date-time>
              <date-time  :title="$t('autoVehicleAndVesselTax.lastTaxYear')" :model="policy" value="lastTaxYear" :format="formatYear"></date-time>
              <date-time  :title="$t('autoVehicleAndVesselTax.lastFeeCalculate')" :model="policy" value="lastFeeCalculate" :format="formatDate"></date-time>
              <picker :title="$t('autoVehicleAndVesselTax.refuseCase')" :model="policy" value="refuseCase" :options="list1" ></picker>
              <r-input :title="$t('autoVehicleAndVesselTax.taxPayerNo')" :model="policy" value="taxPayerNo" ></r-input>            
            </card>
        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('common.confirm')}}</r-button>          
        </tab-bar>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  Picker,
  RInput,
  TabBar,
  RButton,
  DateTime
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/autoVehicleAndVesselTax";
import config from '../../../../config/config';
export default {
  components: {
    Page,
    RBody,
    Card,
    Picker,
    RInput,
    TabBar,
    RButton,
    DateTime,
    Top
  },
  data() {
    return {
      policy: {
        taxesSign:[],
        lastTaxStart:"",
        lastTaxYear:"",
        lastFeeCalculate:"",
        refuseCase:[],
        taxPayerNo:"",
      },
      formatDate:config.DEFAULT_DATE_FORMATER,
      formatYear:config.DEFAULT_YEAR_FORMATER,
      list1: [["拒绝原因1","拒绝原因2","拒绝原因3","拒绝原因4"]]
    };
  },
  methods: {
    calculatePremium(){      
        this.$router.push("/project/proposal/payStatus");
        // this.$router.push("");

    },
    onChange(){

    },
    goto(event){
      window.location.hash="";
    }

  }
};
</script>

<style>

</style>

