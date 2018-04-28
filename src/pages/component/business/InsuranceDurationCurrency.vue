<template>
  <r-page>
       <top :title="$t('business.insuranceDurationCurrency')" :showBack="true"/>
       <r-body>
          <r-card>
       <insurance-duration-currency  />
        </r-card>

        <r-card>
        <poi  :model="policy" :value="jsonParamIDS"/>
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import InsuranceDurationCurrency from '../../project/components/InsuranceDurationCurrency';
import Poi from '../../../components/Poi';
import '../../../i18n/business';

export default {
  components: {
    InsuranceDurationCurrency,
    Poi
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

