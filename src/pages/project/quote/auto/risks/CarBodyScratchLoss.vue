<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
                <r-switch  :title="$t('autoPlan.insured')"  :model="model" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-selector :title="$t('autoPlan.sumInsured')" :options="options" :model="this" value="sumInsured" :required="true"></r-selector>
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
import {SessionContext} from 'rainbow-foundation-cache';

export default {
  data() {
    return {
      model: undefined,
      ctList: undefined,
      valueMap: ['N', 'Y'],
      sumInsured: 2000,
      options: [
          { 'key': 2000, 'value': '2000' },
          { 'key': 5000, 'value': '5000' },
          { 'key': 10000, 'value': '10000' },
          { 'key': 20000, 'value': '20000' }
      ]
    };
  },
  methods: {
    confirm() {
        // this.model['IsRealProposal'] = 'Y';
        this.model.SumInsured = this.sumInsured;
        SessionContext.put('Policy_Coverage_Item', JSON.stringify(this.ctList), true);
        this.$router.go(-1);
    }
  },
  async created() {
    this.ctList = SessionContext.get('Policy_Coverage_Item') ? JSON.parse(SessionContext.get('Policy_Coverage_Item')) : undefined;
    this.model = _.find(this.ctList, (ctItem) => {
        return ctItem['ProductElementCode'] == config['CAR_BODY_SCRATCH_LOSS_ADDITIONAL_CODE'];
    });
    if (this.model.SumInsured) {
        this.sumInsured = this.model.SumInsured;
    }
  }
};
</script>

<style>

</style>

