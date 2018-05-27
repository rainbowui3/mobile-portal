<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card>
               <r-checker :max="1" :model="model" value="GlassType" :data="options"  type="list"/>  
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
      options: [{'key': '20001', 'value': '国产'}, {'key': '20002', 'value': '进口'}],
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
        return ctItem['ProductElementCode'] == config['GLASS_CRUSH_ADDITIONAL_CODE'];
    });
  }
};
</script>

<style>

</style>

