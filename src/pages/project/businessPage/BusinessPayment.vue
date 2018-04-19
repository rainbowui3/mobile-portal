<template>
  <r-page>
    <top :title="$t('businessPage.title')" :showBack="true" />
    <r-body>
      <r-card>
        <Pay />
      </r-card>

    </r-body>
  </r-page>
</template>

<script>
import Pay from '../components/pay/Pay';
import '../../../i18n/businessPage';

export default {
    components: {
        Pay
    }
};
</script>

<style >

</style>

