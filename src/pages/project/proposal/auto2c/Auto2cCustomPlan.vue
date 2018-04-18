<template>
    <r-page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <r-card>
                <r-switch  :title="$t('auto2cCustomPlan.compulsoryInsurance')" :model="policy" value="isComp" ></r-switch>
                <div v-show="policy.isComp">                    
                <r-date-time :title="$t('auto2cCustomPlan.compStart')" :model="policy" value="compEffectiveDate" :format="hoursFormat" ></r-date-time>                  
                </div>        
            </r-card>
            <r-card>
                <r-date-time :title="$t('auto2cCustomPlan.commStart')" :model="policy" value="" :format="hoursFormat" ></r-date-time>                                
                <!--<r-row-and-checker :rcTitle="$t('auto2cCustomPlan.vehicleLoss')" :model="" :linkUrl=""></row-and-checker>-->
                <r-cell :type="row" class="margin_brage">
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.vehicleLoss')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="policy" value="vehicleLossSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row :model="policy" value="value"  link="/project/proposal/auto2e/VehicleLoss"></r-row>
                    </r-cell>
                </r-cell>
                
                <!--<r-row :title="$t('auto2cCustomPlan.vehicleLoss')" :model="policy" value="value" link="/project/proposal/auto2e/VehicleLoss"></r-row>-->
                <r-cell :type="row" class="margin_brage">
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.thirdDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="policy" value="thirdDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row :model="policy" value="value"  link="/project/proposal/auto2e/ThirdDutyMian"></r-row>
                    </r-cell>
                </r-cell>
                <!--<r-row :title="$t('auto2cCustomPlan.thirdDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/ThirdDutyMian"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.carRobberyMain')"  :model="policy" value="carRobberyMain" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.carRobberyMain')" :model="policy" value="value" link="/project/proposal/auto2e/CarRobberyMain"></r-row>-->
                <r-cell :type="row" class="margin_brage">
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.driverDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="policy" value="driverDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row :model="policy" value="value"  link="/project/proposal/auto2e/DriverDutyMian"></r-row>
                    </r-cell>
                </r-cell>
                <!--<r-row :title="$t('auto2cCustomPlan.driverDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/DriverDutyMian"></r-row>-->
                <r-cell :type="row" class="margin_brage">
                    <r-cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.passengerDutyMian')" />
                    </r-cell>
                    <r-cell  :padding="padding" :span="4">
                        <r-checker :model="policy" value="passengerDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></r-checker>                     
                    </r-cell>
                    <r-cell  :padding="padding" class="padding_brage" >
                        <r-row :model="policy" value="value"  link="/project/proposal/auto2e/passengerDutyMian"></r-row>
                    </r-cell>
                </r-cell>
                <!--<r-row :title="$t('auto2cCustomPlan.passengerDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/PassengerDutyMian"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.glassCrushAdditional')"  :model="policy" value="glassCrushAdditional" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.glassCrushAdditional')" :model="policy" value="value" link="/project/proposal/auto2e/GlassCrushAdditional"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.naturalDamage')"  :model="policy" value="naturalDamage" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.naturalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/NaturalDamage"></r-row>-->
                <!--<r-row :title="$t('auto2cCustomPlan.newEquipmenLoss')" :model="policy" value="value" link="/project/proposal/auto2e/NewEquipmenLoss"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.carBodyScratchLoss')"  :model="policy" value="carBodyScratchLoss" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.carBodyScratchLoss')" :model="policy" value="value" link="/project/proposal/auto2e/CarBodyScratchLoss"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.engineWadLoss')"  :model="policy" value="engineWadLoss" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.engineWadLoss')" :model="policy" value="value" link="/project/proposal/auto2e/EngineWadLoss"></r-row>-->
                <r-row :title="$t('auto2cCustomPlan.repairPayment')" :model="policy" value="value" link="/project/proposal/auto2e/RepairPayment"></r-row>
                <!--<r-row :title="$t('auto2cCustomPlan.carGoods')" :model="policy" value="value" link="/project/proposal/auto2e/CarGoods"></r-row>
                <r-row :title="$t('auto2cCustomPlan.metalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/MetalDamage"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.notFoundThirdAdditional')"  :model="policy" value="notFoundThirdAdditional" ></r-switch>
                 <!--<r-row :title="$t('auto2cCustomPlan.notFoundThirdAdditional')" :model="policy" value="value"  :isLink="true"></r-row>-->
                <r-switch  :title="$t('auto2cCustomPlan.appointRepairShop')"  :model="policy" value="appointRepairShop" ></r-switch>
                <!--<r-row :title="$t('auto2cCustomPlan.appointRepairShop')" :model="policy" value="value" link="/project/proposal/auto2e/AppointRepairShop"></r-row>-->
            </r-card>
            <div class="button_vertical-align">
               <r-button type="default" :mini="true" :onClick="resetClick">{{$t('auto2cCustomPlan.reset')}}</r-button>                        
            </div>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton,
  Cell,
  Checker,
  Row,
  DateTime
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import AutoAgent from '../../components/AutoAgent';
import '../../../../i18n/auto2cCustomPlan';
// import RowAndChecker from "../../components/RowAndChecker"
import config from 'config';

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RSwitch,
    Picker,
    RInput,
    AutoAgent,
    TabBar,
    RButton,
    Cell,
    Checker,
    Row,
    DateTime
    // RowAndChecker
  },
  data() {
    return {
        hoursFormat: config.DEFAULT_HOURS_FORMATER,
        row: 'row',
        padding: '0px',
        policy: {
            commEffectiveDate: '',
            compEffectiveDate: '',
            carRobberyMain: false,
            glassCrushAdditional: false,
            naturalDamage: false,
            carBodyScratchLoss: false,
            engineWadLoss: false,
            notFoundThirdAdditional: false,
            appointRepairShop: false,
            expireDate: '',
            isComp: true,
            isComm: true,
            value2: '',
            value: '不投保',
            discount: '0.7',
            passengerDutyMianSDEW: false,
            driverDutyMianSDEW: false,
            thirdDutyMianSDEW: false,
            vehicleLossSDEW: true

        },
        model: [{
            isNonDeductible: false

        }]
    };
  },
  methods: {
    calculatePremium() {
        this.$router.go(-1);
    },
    resetClick() {

    },
    onChange() {

    },
    goto(event) {
      // window.location.hash="/project/proposal/auto2e/VehicleLoss";
    }

  },
  computed: {

  }
};
</script>

<style>
.button_vertical-align {
    margin-top: 10px;  
    text-align: center;
}
.margin_brage{
    margin-left: 15px;
    margin-right: 30px;
 }
.padding_brage{
    
    padding-right: 16px;
 }
    

</style>

