<template>
    <page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('auto2cCustomPlan.compulsoryInsurance')" :model="policy" value="isComp" ></r-switch>
                <div v-show="policy.isComp">                    
                <date-time :title="$t('auto2cCustomPlan.compStart')" :model="policy" value="compEffectiveDate" :format="hoursFormat" ></date-time>                  
                </div>        
            </card>
            <card>
                <date-time :title="$t('auto2cCustomPlan.commStart')" :model="policy" value="" :format="hoursFormat" ></date-time>                                
                <!--<row-and-checker :rcTitle="$t('auto2cCustomPlan.vehicleLoss')" :model="" :linkUrl=""></row-and-checker>-->
                <cell :type="row" class="margin_brage">
                    <cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.vehicleLoss')" />
                    </cell>
                    <cell  :padding="padding" :span="4">
                        <checker :model="policy" value="vehicleLossSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></checker>                     
                    </cell>
                    <cell  :padding="padding" class="padding_brage" >
                        <row :model="policy" value="value"  link="/project/proposal/auto2e/VehicleLoss"></row>
                    </cell>
                </cell>
                
                <!--<row :title="$t('auto2cCustomPlan.vehicleLoss')" :model="policy" value="value" link="/project/proposal/auto2e/VehicleLoss"></row>-->
                <cell :type="row" class="margin_brage">
                    <cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.thirdDutyMian')" />
                    </cell>
                    <cell  :padding="padding" :span="4">
                        <checker :model="policy" value="thirdDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></checker>                     
                    </cell>
                    <cell  :padding="padding" class="padding_brage" >
                        <row :model="policy" value="value"  link="/project/proposal/auto2e/ThirdDutyMian"></row>
                    </cell>
                </cell>
                <!--<row :title="$t('auto2cCustomPlan.thirdDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/ThirdDutyMian"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.carRobberyMain')"  :model="policy" value="carRobberyMain" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.carRobberyMain')" :model="policy" value="value" link="/project/proposal/auto2e/CarRobberyMain"></row>-->
                <cell :type="row" class="margin_brage">
                    <cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.driverDutyMian')" />
                    </cell>
                    <cell  :padding="padding" :span="4">
                        <checker :model="policy" value="driverDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></checker>                     
                    </cell>
                    <cell  :padding="padding" class="padding_brage" >
                        <row :model="policy" value="value"  link="/project/proposal/auto2e/DriverDutyMian"></row>
                    </cell>
                </cell>
                <!--<row :title="$t('auto2cCustomPlan.driverDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/DriverDutyMian"></row>-->
                <cell :type="row" class="margin_brage">
                    <cell  :padding="padding" :span="4">
                        <div v-text="$t('auto2cCustomPlan.passengerDutyMian')" />
                    </cell>
                    <cell  :padding="padding" :span="4">
                        <checker :model="policy" value="passengerDutyMianSDEW" :text="$t('auto2cCustomPlan.sdew')" type="icon"></checker>                     
                    </cell>
                    <cell  :padding="padding" class="padding_brage" >
                        <row :model="policy" value="value"  link="/project/proposal/auto2e/passengerDutyMian"></row>
                    </cell>
                </cell>
                <!--<row :title="$t('auto2cCustomPlan.passengerDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/PassengerDutyMian"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.glassCrushAdditional')"  :model="policy" value="glassCrushAdditional" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.glassCrushAdditional')" :model="policy" value="value" link="/project/proposal/auto2e/GlassCrushAdditional"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.naturalDamage')"  :model="policy" value="naturalDamage" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.naturalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/NaturalDamage"></row>-->
                <!--<row :title="$t('auto2cCustomPlan.newEquipmenLoss')" :model="policy" value="value" link="/project/proposal/auto2e/NewEquipmenLoss"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.carBodyScratchLoss')"  :model="policy" value="carBodyScratchLoss" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.carBodyScratchLoss')" :model="policy" value="value" link="/project/proposal/auto2e/CarBodyScratchLoss"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.engineWadLoss')"  :model="policy" value="engineWadLoss" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.engineWadLoss')" :model="policy" value="value" link="/project/proposal/auto2e/EngineWadLoss"></row>-->
                <row :title="$t('auto2cCustomPlan.repairPayment')" :model="policy" value="value" link="/project/proposal/auto2e/RepairPayment"></row>
                <!--<row :title="$t('auto2cCustomPlan.carGoods')" :model="policy" value="value" link="/project/proposal/auto2e/CarGoods"></row>
                <row :title="$t('auto2cCustomPlan.metalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/MetalDamage"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.notFoundThirdAdditional')"  :model="policy" value="notFoundThirdAdditional" ></r-switch>
                 <!--<row :title="$t('auto2cCustomPlan.notFoundThirdAdditional')" :model="policy" value="value"  :isLink="true"></row>-->
                <r-switch  :title="$t('auto2cCustomPlan.appointRepairShop')"  :model="policy" value="appointRepairShop" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.appointRepairShop')" :model="policy" value="value" link="/project/proposal/auto2e/AppointRepairShop"></row>-->
            </card>
            <div class="button_vertical-align">
               <r-button type="default" :mini="true" :onClick="resetClick">{{$t('auto2cCustomPlan.reset')}}</r-button>                        
            </div>

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
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton,
  Cell,
  Checker,
  Row,
  DateTime,
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import AutoAgent from "../../components/AutoAgent";
import "../../../../i18n/auto2cCustomPlan";
// import RowAndChecker from "../../components/RowAndChecker"
import config from "config";

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
    DateTime,
    // RowAndChecker
  },
  data() {
    return {
        hoursFormat:config.DEFAULT_HOURS_FORMATER,
        row: "row",
        padding:'0px',
        policy: {
            commEffectiveDate:"",
            compEffectiveDate:"",
            carRobberyMain:false,
            glassCrushAdditional:false,
            naturalDamage:false,
            carBodyScratchLoss:false,
            engineWadLoss:false,
            notFoundThirdAdditional:false,
            appointRepairShop:false,
            expireDate:"",
            isComp:true,
            isComm:true,
            value2:"",
            value:"不投保",
            discount:"0.7",
            passengerDutyMianSDEW:false,
            driverDutyMianSDEW:false,
            thirdDutyMianSDEW:false,
            vehicleLossSDEW:true,

        },
        model:[{
            isNonDeductible:false,
            

        }]
    };
  },
  methods: {
    calculatePremium(){         
        this.$router.go(-1);
    },
    resetClick(){

    },
    onChange(){

    },
    goto(event){
      // window.location.hash="/project/proposal/auto2e/VehicleLoss";
    }

  },
  computed:{

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

