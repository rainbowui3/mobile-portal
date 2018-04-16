<template>
    <page>
        <top :title="$t('autoCFeeInfo.cFeeInfo')" :showBack="true" />
        <r-body>
            <card :title="$t('autoFloatRateInfo.compFloatRate')">
                <r-input :title="$t('autoFloatRateInfo.ncdRatio')" :model="policy" value="compNCDRatio" :readonly="true"></r-input>
                <r-input :title="$t('autoFloatRateInfo.trafficViolationRatio')" :model="policy" value="compTrafficViolationRatio" :readonly="true"></r-input>
            </card>
            <card :title="$t('autoFloatRateInfo.commFloatRate')">
                <r-input :title="$t('autoFloatRateInfo.ncdRatio')" :model="policy" value="ncdRatio" :readonly="true"></r-input>
                <r-input :title="$t('autoFloatRateInfo.trafficViolationRatio')" :model="policy" value="trafficViolationRatio" :readonly="true"></r-input>
                <r-input :title="$t('autoFloatRateInfo.freeUWRatio')" :model="policy" value="freeUWRatio" :readonly="true"></r-input>
                <r-input :title="$t('autoFloatRateInfo.freeChannelRatio')" :model="policy" value="freeChannelRatio" :readonly="true"></r-input>
            </card>
        </r-body>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RInput
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import '../../../../i18n/autoFloatRateInfo';

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RInput
  },
  data() {
    return {
      row: 'row',
      policy: {
          compNCDRatio: '1.0',
          compTrafficViolationRatio: '0.85',
          ncdRatio: '1.0',
          trafficViolationRatio: '0.85',
          freeUWRatio: '1.0',
          freeChannelRatio: '1.0'

      }
    };
  },
  methods: {
    nextOnClick() {
        this.$router.push('/project/proposal/auto2e/AutoPlan');
        // this.$router.push("");
    },
    gotoFee(event) {
         window.location.hash = '/component/example/preview';
    },
    gotoFloatRate(event) {
         window.location.hash = '/component/example/preview';
    }

  }
};
</script>

<style>

</style>

