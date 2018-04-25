<template>
    <r-page>
        <top :title="$t('autoCFeeInfo.cFeeInfo')" :showBack="true" />
        <r-body>
            <r-card>
                <r-input :title="$t('autoCFeeInfo.wholeListCRate')" :model="policy" value="wholeListCRate" :readonly="true"></r-input>
                <r-input :title="$t('autoCFeeInfo.wholeListCAmount')" :model="policy" value="wholeListCAmount" :readonly="true"></r-input>
                <r-input :title="$t('autoCFeeInfo.commCRate')" :model="policy" value="commCRate" :readonly="true"></r-input>
                <r-input :title="$t('autoCFeeInfo.commCAmount')" :model="policy" value="commCAmount" :readonly="true"></r-input>
                <r-input :title="$t('autoCFeeInfo.CompCRate')" :model="policy" value="CompCRate" :readonly="true"></r-input>
                <r-input :title="$t('autoCFeeInfo.compCAmount')" :model="policy" value="compCAmount" :readonly="true"></r-input>
            </r-card>
        </r-body>

    </r-page>

</template>
<script>
import '../../../../../i18n/autoCFeeInfo';

export default {
  data() {
    return {
      row: 'row',
      policy: {
          wholeListCRate: '15.0000%',
          wholeListCAmount: '1546.12元',
          commCRate: '15%',
          commCAmount: '1546.12元',
          CompCRate: '%',
          compCAmount: '元'

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

