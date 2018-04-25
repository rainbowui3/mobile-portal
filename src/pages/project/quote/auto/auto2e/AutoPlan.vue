<template>
    <r-page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <r-card>
                <r-switch  :title="$t('autoPlan.compulsoryInsurance')"  :model="policy" value="isComp" ></r-switch>
                <div v-show="policy.isComp">    
                  <r-cell type="row">
                    <r-cell>
                     <r-checker :model="policy" value="value2" :text="$t('autoPlan.effectImmediately')" :onChange="onChange" type="icon"/>
                    </r-cell>
                    <r-cell>
                     <r-checker :model="policy" value="value2" :text="$t('autoPlan.shortInsurance')" :onChange="onChange" type="icon"/>
                    </r-cell>
                  </r-cell>          
                  <insurance-duration-shortTerm type="minute" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"></insurance-duration-shortTerm>
                  <r-row :title="$t('autoPlan.carShipTax')" :model="policy" value="" :onClick="gotoVehicleAndVesse" :isLink="true"></r-row>
                </div>
               
            </r-card>
            <r-card>
                <r-switch  :title="$t('autoPlan.commericalInsurance')"  :model="policy" value="isComm" ></r-switch>
                <div v-show="policy.isComm">
                  <r-cell type="row">
                    <r-cell>
                     <r-checker :model="policy" value="value2" :text="$t('autoPlan.effectImmediately')" :onChange="onChange" type="icon"/>
                    </r-cell>
                    <r-cell>
                     <r-checker :model="policy" value="value2" :text="$t('autoPlan.shortInsurance')" :onChange="onChange" type="icon"/>
                    </r-cell>
                  </r-cell>               
                  <insurance-duration-shortTerm type="minute" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"></insurance-duration-shortTerm>
                  <r-row :title="$t('autoPlan.vehicleLoss')" :model="policy" value="value" link="/project/proposal/auto2e/VehicleLoss"></r-row>
                  <r-row :title="$t('autoPlan.thirdDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/ThirdDutyMian"></r-row>
                  <r-row :title="$t('autoPlan.carRobberyMain')" :model="policy" value="value" link="/project/proposal/auto2e/CarRobberyMain"></r-row>
                  <r-row :title="$t('autoPlan.driverDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/DriverDutyMian"></r-row>
                  <r-row :title="$t('autoPlan.passengerDutyMian')" :model="policy" value="value" link="/project/proposal/auto2e/PassengerDutyMian"></r-row>
                  <r-row :title="$t('autoPlan.glassCrushAdditional')" :model="policy" value="value" link="/project/proposal/auto2e/GlassCrushAdditional"></r-row>
                  <r-row :title="$t('autoPlan.naturalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/NaturalDamage"></r-row>
                  <r-row :title="$t('autoPlan.newEquipmenLoss')" :model="policy" value="value" link="/project/proposal/auto2e/NewEquipmenLoss"></r-row>
                  <r-row :title="$t('autoPlan.carBodyScratchLoss')" :model="policy" value="value" link="/project/proposal/auto2e/CarBodyScratchLoss"></r-row>
                  <r-row :title="$t('autoPlan.engineWadLoss')" :model="policy" value="value" link="/project/proposal/auto2e/EngineWadLoss"></r-row>
                  <r-row :title="$t('autoPlan.repairPayment')" :model="policy" value="value" link="/project/proposal/auto2e/RepairPayment"></r-row>
                  <r-row :title="$t('autoPlan.carGoods')" :model="policy" value="value" link="/project/proposal/auto2e/CarGoods"></r-row>
                  <r-row :title="$t('autoPlan.metalDamage')" :model="policy" value="value" link="/project/proposal/auto2e/MetalDamage"></r-row>
                  <r-row :title="$t('autoPlan.notFoundThirdAdditional')" :model="policy" value="value"  :isLink="true"></r-row>
                  <r-row :title="$t('autoPlan.appointRepairShop')" :model="policy" value="value" link="/project/proposal/auto2e/AppointRepairShop"></r-row>
                  <r-input :title="$t('autoPlan.expectationDiscount')"  :model="policy" value="discount" :readonly="true"></r-input>
                  <r-row :title="$t('autoPlan.jointSales')" :model="policy" value="" :onClick="goto" :isLink="true"></r-row>
                
                </div>
               
            </r-card>
            <r-card>
               
            </r-card>
            <r-card>
            </r-card>

        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="calculatePremium">{{$t('autoPlan.calculatePremium')}}</r-button>          
        </r-tab-bar>

    </r-page>

</template>
<script>
import Jtgj from '../../../../../assets/jtgj.jpg';
import ProductTop from '../../../components/ProductTop';
import AutoAgent from '../../../components/AutoAgent';
import InsuranceDurationShortTerm from '../../../components/InsuranceDurationShortTerm';
import '../../../../../i18n/autoPlan';

export default {
  components: {
    AutoAgent,
    ProductTop,
    InsuranceDurationShortTerm
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: '车险',
      row: 'row',
      policy: {
        effectiveDate: '',
        expireDate: '',
        isComp: true,
        isComm: true,
        value2: '',
        value: '不投保',
        discount: '0.7'

      },
      proCodeOptions: [],
      riskCatOptions: [],
      bizCodeOptions: [],
      productCodeData: null
    };
  },
  methods: {
    calculatePremium() {
        this.$router.push('/project/proposal/auto2e/AutoPremiumInfo');
        // this.$router.push("");
    },
    onChange() {

    },
    gotoVehicleAndVesse(event) {
      window.location.hash = '/project/proposal/auto2e/AutoVehicleAndVesselTax';
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

</style>

