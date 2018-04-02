<template>
    <page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('autoPlan.compulsoryInsurance')"  :model="policy" value="isComp" ></r-switch>
                <div v-show="policy.isComp">    
                  <cell type="row">
                    <cell>
                     <checker :model="policy" value="value2" :text="$t('autoPlan.effectImmediately')" :onChange="onChange" type="icon"/>
                    </cell>
                    <cell>
                     <checker :model="policy" value="value2" :text="$t('autoPlan.shortInsurance')" :onChange="onChange" type="icon"/>
                    </cell>
                  </cell>          
                  <insurance-duration-shortTerm type="minute" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"></insurance-duration-shortTerm>
                  <row :title="$t('autoPlan.carShipTax')" :model="policy" value="" :onClick="gotoVehicleAndVesse" :isLink="true"></row>
                </div>
               
            </card>
            <card>
                <r-switch  :title="$t('autoPlan.commericalInsurance')"  :model="policy" value="isComm" ></r-switch>
                <div v-show="policy.isComm">
                  <cell type="row">
                    <cell>
                     <checker :model="policy" value="value2" :text="$t('autoPlan.effectImmediately')" :onChange="onChange" type="icon"/>
                    </cell>
                    <cell>
                     <checker :model="policy" value="value2" :text="$t('autoPlan.shortInsurance')" :onChange="onChange" type="icon"/>
                    </cell>
                  </cell>               
                  <insurance-duration-shortTerm type="minute" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"></insurance-duration-shortTerm>
                  <row :title="$t('autoPlan.vehicleLoss')" :model="policy" value="value" link="/project/proposal/auto2e/VehicleLoss"></row>
                  <row :title="$t('autoPlan.thirdDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/ThirdDutyMian"></row>
                  <row :title="$t('autoPlan.carRobberyMain')" :model="policy" value="value" link="/project/proposal/auto2e/CarRobberyMain"></row>
                  <row :title="$t('autoPlan.driverDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/DriverDutyMian"></row>
                  <row :title="$t('autoPlan.passengerDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/PassengerDutyMian"></row>
                  <row :title="$t('autoPlan.glassCrushAdditional')" :model="policy" value="value" link="/project/proposal/auto2e/GlassCrushAdditional"></row>
                  <row :title="$t('autoPlan.naturalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/NaturalDamage"></row>
                  <row :title="$t('autoPlan.newEquipmenLoss')" :model="policy" value="value" link="/project/proposal/auto2e/NewEquipmenLoss"></row>
                  <row :title="$t('autoPlan.carBodyScratchLoss')" :model="policy" value="value" link="/project/proposal/auto2e/CarBodyScratchLoss"></row>
                  <row :title="$t('autoPlan.engineWadLoss')" :model="policy" value="value" link="/project/proposal/auto2e/EngineWadLoss"></row>
                  <row :title="$t('autoPlan.repairPayment')" :model="policy" value="value" link="/project/proposal/auto2e/RepairPayment"></row>
                  <row :title="$t('autoPlan.carGoods')" :model="policy" value="value" link="/project/proposal/auto2e/CarGoods"></row>
                  <row :title="$t('autoPlan.metalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/MetalDamage"></row>
                  <row :title="$t('autoPlan.notFoundThirdAdditional')" :model="policy" value="value"  :isLink="true"></row>
                  <row :title="$t('autoPlan.appointRepairShop')" :model="policy" value="value" link="/project/proposal/auto2e/AppointRepairShop"></row>
                  <r-input :title="$t('autoPlan.expectationDiscount')"  :model="policy" value="discount" :readonly="true"></r-input>
                  <row :title="$t('autoPlan.jointSales')" :model="policy" value="" :onClick="goto" :isLink="true"></row>
                
                </div>
               
            </card>
            <card>
               
            </card>
            <card>
            </card>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('autoPlan.calculatePremium')}}</r-button>          
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
  Row
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Jtgj from "../../../../assets/jtgj.jpg";
import ProductTop from "../../components/ProductTop";
import AutoAgent from "../../components/AutoAgent";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import "../../../../i18n/autoPlan";

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
    ProductTop,
    TabBar,
    RButton,
    Cell,
    InsuranceDurationShortTerm,
    Checker,
    Row
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: "车险",
      row: "row",
      policy: {
        effectiveDate:"",
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

</style>

