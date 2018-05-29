<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card v-if="model">
                <!--<r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>-->
                <!--<r-input  :title="$t('autoPlan.seatNo')"  :model="model" value="PassagerSeatNumber" :isNumber="true" :novalidate="false"></r-input>-->
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="model" value="SumInsured" :isNumber="true" :novalidate="false"></r-input>
                <!--<r-input  :title="$t('autoPlan.singleSumInsured')"  :model="model" value="AvgSumInsured" :isNumber="true" :novalidate="false"></r-input>
                <r-switch  :title="$t('autoPlan.copilot')"  :model="model" value="IsAddDriver" ></r-switch>
                <r-input  :title="$t('autoPlan.copilotSeats')"  :model="model" value="AddDriverSeatNumber" :isNumber="true" :novalidate="false"></r-input>
                <r-input  :title="$t('autoPlan.copilotSumInsured')"  :model="model" value="AddDriverSumInsured" :isNumber="true" :novalidate="false"></r-input>       -->
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
        return ctItem['ProductElementCode'] == config['PASSENGER_DUTY_MAINCODE'];
    });
  }
};
</script>

<style>

</style>

