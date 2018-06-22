<template>
    <r-page>
        <top :title="$t('autoPlan.riskInformation')" :showBack="true" />
        <r-body>
            <r-card v-if="model">
                <r-switch  :title="$t('autoPlan.insured')"  :model="model" value="IsRealProposal" :valueMap="valueMap"></r-switch>
                <!--<r-input  :title="$t('autoPlan.sumInsured')"  :model="model" value="SumInsured" :isNumber="true" :novalidate="false" :required="true"></r-input>-->
                <!--<r-selector :title="$t('autoPlan.sumInsured')" :options="options" :model="model" value="SumInsured" :required="true"></r-selector>-->
                <r-picker :title="$t('autoPlan.sumInsured')" :options="options" :model="this" value="sumInsured" :required="true"></r-picker>
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
        sumInsured: '5万',
        options: [
            [
                '5万',
                '10万',
                '15万',
                '20万',
                '30万',
                '50万',
                '100万',
                '150万',
                '200万',
                '250万',
                '300万',
                '350万',
                '400万',
                '450万',
                '500万',
                '550万',
                '600万',
                '700万',
                '750万',
                '800万',
                '850万',
                '900万',
                '950万',
                '1000万'
            ]
        ]
        // options: [
        //     { 'key': 50000, 'value': '5万' },
        //     { 'key': 100000, 'value': '10万' },
        //     { 'key': 150000, 'value': '15万' },
        //     { 'key': 200000, 'value': '20万' },
        //     { 'key': 300000, 'value': '30万' },
        //     { 'key': 500000, 'value': '50万' },
        //     { 'key': 1000000, 'value': '100万' },
        //     { 'key': 1500000, 'value': '150万' },
        //     { 'key': 2000000, 'value': '200万' },
        //     { 'key': 2500000, 'value': '250万' },
        //     { 'key': 3000000, 'value': '300万' },
        //     { 'key': 3500000, 'value': '350万' },
        //     { 'key': 4000000, 'value': '400万' },
        //     { 'key': 4500000, 'value': '450万' },
        //     { 'key': 5000000, 'value': '500万' },
        //     { 'key': 5500000, 'value': '550万' },
        //     { 'key': 6000000, 'value': '600万' },
        //     { 'key': 6500000, 'value': '650万' },
        //     { 'key': 7000000, 'value': '700万' },
        //     { 'key': 7500000, 'value': '750万' },
        //     { 'key': 8000000, 'value': '800万' },
        //     { 'key': 8500000, 'value': '850万' },
        //     { 'key': 9000000, 'value': '900万' },
        //     { 'key': 9500000, 'value': '950万' },
        //     { 'key': 10000000, 'value': '1000万' }
        // ]
    };
  },
  methods: {
    confirm() {
        // this.model['IsRealProposal'] = 'Y';
        this.model.SumInsured = this.sumInsured[0].split('万')[0] * 10000;
        SessionContext.put('Policy_Coverage_Item', JSON.stringify(this.ctList), true);
        this.$router.go(-1);
    }
  },
  async created() {
    this.ctList = SessionContext.get('Policy_Coverage_Item') ? JSON.parse(SessionContext.get('Policy_Coverage_Item')) : undefined;
    this.model = _.find(this.ctList, (ctItem) => {
        return ctItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE'];
    });
    if (this.model.SumInsured) {
        let sumInsured = [];
        sumInsured.push(`${this.model.SumInsured / 10000}万`);
        this.sumInsured = sumInsured;
    }
  }
};
</script>

<style>

</style>

