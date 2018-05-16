<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card v-if="model">
                <!--<r-switch  :title="$t('autoPlan.sdew')"  :model="policy" value="sdew" ></r-switch>   -->
                <r-input  :title="$t('autoPlan.sumInsured')"  :model="model" value="SumInsured" :isNumber="true" :novalidate="false"></r-input>
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
        return ctItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE'];
    });
  }
};
</script>

<style>

</style>

