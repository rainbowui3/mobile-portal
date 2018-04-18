<template>
    <r-page>
        <top :title="$t('autoPremiumInfo.premiumInfo')" :showBack="true" />
        <r-body>
            <r-card>
                <r-cell type="row">
                    <r-cell :span="8">
                        <r-date-time :title="$t('autoPremiumInfo.compStartDate')" :model="policy" value="compStartDate" :format="format"></r-date-time>
                    </r-cell>
                    <r-cell :span="4">
                        <r-checker :model="policy" value="compEffectImmediately" :text="$t('autoPremiumInfo.effectImmediately')" :onChange="onChange" type="icon" :disabled="true"/>
                    </r-cell>
                    <r-cell>
                    </r-cell>
                </r-cell>
                <r-date-time :title="$t('autoPremiumInfo.compEndDate')" :model="policy" value="compEndDate" :format="format"></r-date-time>
                <r-cell type="row">
                    <r-cell :span="8">
                        <r-date-time :title="$t('autoPremiumInfo.commStartDate')" :model="policy" value="commStartDate" :format="format"></r-date-time>
                    </r-cell>
                    <r-cell :span="4">
                        <r-checker :model="policy" value="commEffectImmediately" :text="$t('autoPremiumInfo.effectImmediately')" :onChange="onChange" type="icon" :disabled="true"/>
                    </r-cell>
                    <r-cell>
                    </r-cell>
                </r-cell>
                <r-date-time :title="$t('autoPremiumInfo.commEndDate')" :model="policy" value="commEndDate" :format="format"></r-date-time>
            </r-card>
            <r-card :title="`${$t('autoPremiumInfo.compulsoryInsurance')}+${$t('autoPremiumInfo.carShipTax')}`">
                <r-input :title="$t('autoPremiumInfo.compPremiumTax')" :model="policy" value="compPremiumTax" :readonly="true"></r-input>
                <r-input :title="$t('autoPremiumInfo.carShipTax')" :model="policy" value="carShipTax" :readonly="true"></r-input>
            </r-card>
            <r-card :title="$t('autoPremiumInfo.commercialInsurance')">
                <r-input :title="$t('autoPremiumInfo.commPremiumTax')" :model="policy" value="commPremiumTax" :readonly="true"></r-input>
            </r-card>
            <r-card >
                <r-row :title="$t('autoPremiumInfo.cFeeInfo')" :model="policy" value="" :onClick="gotoFee" :isLink="true"></r-row>
                <r-row :title="$t('autoPremiumInfo.floatRate')" :model="policy" value="" :onClick="gotoFloatRate" :isLink="true"></r-row>
            </r-card>
            <r-card>
                <r-input :title="$t('autoPremiumInfo.totalAmount')" :model="policy" value="totalAmount" :readonly="true"></r-input>
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-cell :type="row">
                <r-cell :span="6" :padding="padding">
                   <r-button type="primary" :onClick="nextOnClick">{{$t('autoPremiumInfo.share')}}</r-button> 
                </r-cell>
                <r-cell :span="6" :padding="padding">
                    <r-button type="primary" :onClick="nextOnClick">{{$t('common.next')}}</r-button> 
                </r-cell>
                <r-cell>
                </r-cell>
            </r-cell>                  
        </r-tab-bar>

    </r-page>

</template>
<script>
import '../../../../i18n/AutoPremiumInfo';
import config from 'config';

export default {
  data() {
    return {
      row: 'row',
      padding: '0px',
      format: config.DEFAULT_DATE_FORMATER,
      policy: {
        isAgent: true,
        value1: '12',
        proCode: '',
        riskCat: [],
        bizCode: []

      }
    };
  },
  methods: {
    nextOnClick() {
        this.$router.push('/project/proposal/auto2e/AutoPlan');
        // this.$router.push("");
    },
    gotoFee(event) {
         window.location.hash = '/project/proposal/auto2e/AutoCFeeInfo';
    },
    gotoFloatRate(event) {
         window.location.hash = '/project/proposal/auto2e/AutoFloatRateInfo';
    }

  }
};
</script>

<style>

</style>

