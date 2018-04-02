<template>
    <page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('auto2cCustomPlan.compulsoryInsurance')"  :model="policy" value="isComp" ></r-switch>
                <div v-show="policy.isComp">                    
                <date-time :title="$t('auto2cCustomPlan.compStart')" :model="policy" value="compEffectiveDate" :format="hoursFormat" ></date-time>                  
                </div>        
            </card>
            <card>
                <date-time :title="$t('auto2cCustomPlan.commStart')" :model="policy" value="commEffectiveDate" :format="hoursFormat" ></date-time>                                
                <row :title="$t('auto2cCustomPlan.vehicleLoss')" :model="policy" value="value" link="/project/proposal/auto2e/VehicleLoss"></row>
                <row :title="$t('auto2cCustomPlan.thirdDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/ThirdDutyMian"></row>
                <r-switch  :title="$t('auto2cCustomPlan.carRobberyMain')"  :model="policy" value="carRobberyMain" ></r-switch>
                <!--<row :title="$t('auto2cCustomPlan.carRobberyMain')" :model="policy" value="value" link="/project/proposal/auto2e/CarRobberyMain"></row>-->
                <row :title="$t('auto2cCustomPlan.driverDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/DriverDutyMian"></row>
                <row :title="$t('auto2cCustomPlan.passengerDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/PassengerDutyMian"></row>
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
               <r-input :title="$t('auto2cCustomPlan.appointRepairShop')"  :model="policy" value="appointRepairShop" :middle="true">
                    <span class="fa fa-bicycle fa-2x"/>
                </r-input>
            </card>
            <div class="button_vertical-align">
               <r-button type="default" :mini="true" :onClick="calculatePremium">{{$t('auto2cCustomPlan.reset')}}</r-button>                        
            </div>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('auto2cCustomPlan.calculatePremium')}}</r-button>          
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
    DateTime
  },
  data() {
    return {
        hoursFormat:config.DEFAULT_HOURS_FORMATER,
        row: "row",
        policy: {
            appointRepairShop:"",
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
            discount:"0.7"

        },
        proCodeOptions:[],
        riskCatOptions:[],
        bizCodeOptions:[],
        productCodeData:null
    };
  },
  methods: {
    calculatePremium(){      
        this.$router.push("/project/proposal/auto2e/AutoPremiumInfo");
        // this.$router.push("");

    },
    onChange(){

    },
    gotoVehicleAndVesse(event){
      window.location.hash="/project/proposal/auto2e/AutoVehicleAndVesselTax";
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
    align-content: center
}
    

</style>

