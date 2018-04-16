<template>
  <page>
       <top :title="$t('business.insuranceDurationCurrency')" :showBack="true"/>
       <r-body>
          <card>
       <insurance-duration-currency  />
        </card>

        <card>
        <insurance-duration-short-term  :model="policy" :value="jsonParamIDS"/>
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RTable, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import InsuranceDurationCurrency from '../project/components/InsuranceDurationCurrency';
import InsuranceDurationShortTerm from '../project/components/InsuranceDurationShortTerm';
import '../../i18n/business';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    InsuranceDurationCurrency,
    InsuranceDurationShortTerm,
    RBody
  },
  data() {
    return {
      policy: {
        effectiveDate: '',
        expireDate: ''
      },
      jsonParamIDS: [
        { bindField: 'effectiveDate', required: true },
        { bindField: 'expireDate', required: false }
      ]
    };
  }
};
</script>

<style lang="less">

</style>

