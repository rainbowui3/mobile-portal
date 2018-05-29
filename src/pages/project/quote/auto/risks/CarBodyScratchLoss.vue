<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
                <r-selector :title="$t('autoPlan.sumInsured')" :options="options" :model="model" value="SumInsured"></r-selector>
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
      options: [{'key': '2000', 'value': '2000'}, {'key': '5000', 'value': '5000'}, {'key': '10000', 'value': '10000'}, {'key': '20000', 'value': '20000'}],
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
        return ctItem['ProductElementCode'] == config['CAR_BODY_SCRATCH_LOSS_ADDITIONAL_CODE'];
    });
  }
};
</script>

<style>

</style>

