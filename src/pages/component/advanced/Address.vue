<template>
  <r-page>
       <top :title="$t('component.input')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                <r-address/>
            </r-card>
            
       </r-body>

       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/input';
import {RAddress} from 'rainbow-mobile-address';
export default {
  components: {
    RAddress
  },
  data() {
    return {
      policy: {
         value19: '12345',
         value1: 1,
         value2: 2,
         value6: 2
      }
    };
  },
  methods: {
    onChange(value) {
        /* eslint-disable */
      console.log('this is onChange', value);
      /* eslint-disable */
    }
  }
};
</script>
