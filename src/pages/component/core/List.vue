<template>
  <r-page>
       <top :title="$t('component.list')" :showBack="true"/>
       <r-body>
          <r-card>
            <r-list :title="$t('preview.title')" :value="value" :data="list"/>
          </r-card>
          <r-card>
            <r-list :data="list"/>
          </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/preview';

export default {
  computed: {
    value() {
      return `${this.$t('common.currency')} 1024`;
    },
    list() {
       return [{
        label: this.$t('common.apple'),
        value: '3.29'
      }, {
        label: this.$t('common.banana'),
        value: '1.04'
      }, {
        label: this.$t('common.fish'),
        value: '8.00'
      }];
     }
  }
};
</script>


