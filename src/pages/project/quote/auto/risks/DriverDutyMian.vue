<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card v-if="model">
                <r-switch  :title="$t('autoPlan.insured')"  :model="model" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="model" value="SumInsured" :isNumber="true" :novalidate="false" :required="true"></r-input>
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
        valueMap: ['N', 'Y']
    };
  },
  methods: {
    confirm() {
        // this.model['IsRealProposal'] = 'Y';
        SessionContext.put('Policy_Coverage_Item', JSON.stringify(this.ctList), true);
        this.$router.go(-1);
    }
  },
  async created() {
    this.ctList = SessionContext.get('Policy_Coverage_Item') ? JSON.parse(SessionContext.get('Policy_Coverage_Item')) : undefined;
    this.model = _.find(this.ctList, (ctItem) => {
        return ctItem['ProductElementCode'] == config['DRIVER_DUTY_MAINCODE'];
    });
    if (!this.model['SumInsured']) {
        this.model['SumInsured'] = '20000';
    }
  }
};
</script>

<style>

</style>

