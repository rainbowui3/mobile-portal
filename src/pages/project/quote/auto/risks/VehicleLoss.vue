<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card v-if="model">
                <!--<r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>-->
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="model" value="SumInsured" :isNumber="true" :novalidate="false"></r-input>
                <!--//车辆损失保险免赔额表 VehicleDamageInsDeductible-->
                <r-selector :title="$t('autoPlan.franchise')" :options="options" :model="model" value="DeductibleAmount"></r-selector>         
            </r-card>
        </r-body>
        <r-tab-bar>         
            <r-button type="primary" :onClick="confirm">{{$t('common.confirm')}}</r-button>          
        </r-tab-bar>
    </r-page>

</template>
<script>
import '../../../../../i18n/autoPlan';
import config from '../../../../../config/config';
export default {
  data() {
    return {
      options: [{'key': '20001', 'value': '10万'}, {'key': '20002', 'value': '20万'}],
      model: undefined,
      ctList: undefined
    };
  },
  methods: {
    confirm() {
        this.model['IsRealProposal'] = 'Y';
        sessionStorage.setItem('Policy_Coverage_Item', JSON.stringify(this.ctList));
        this.$router.go(-1);
    }
  },
  async created() {
    this.ctList = sessionStorage.getItem('Policy_Coverage_Item') ? JSON.parse(sessionStorage.getItem('Policy_Coverage_Item')) : undefined;
    this.model = _.find(this.ctList, (ctItem) => {
        return ctItem['ProductElementCode'] == config['VEHICLE_LOSS_MIANCODE'];
    });
  },
  mounted() {
      console.log(this.model);
  }
};
</script>

<style>

</style>

