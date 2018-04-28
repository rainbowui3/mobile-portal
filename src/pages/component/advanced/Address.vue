<template>
  <r-page>
       <top :title="$t('component.input')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
               <r-address :model="policy" value="address" :title="$t('input.address')"/>
            </r-card>
            <r-card :title="$t('input.bind')">
               <r-address :model="policy" value="value2" :bindValue="true" :title="$t('input.address')"/>
               <r-address :model="policy" value="value1" :bindValue="true" :title="$t('input.address')"/>
            </r-card>
            <r-card :title="$t('common.disable')">
               <r-address :model="policy" value="address" :title="$t('input.address')" :disabled="true"/>
            </r-card>
            <r-card :title="$t('input.bind')">
                <r-address :model="policy" value="value1" :bindValue="true" :title="$t('input.address')" :hideDistrict="true"/>
            </r-card>
       </r-body>

       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/common';
import '../../../i18n/input';
import {RAddress} from 'rainbow-mobile-address';
export default {

  data() {
    return {
      policy: {
         value19: '12345',
         value1: ['广东省', '中山市', '--'],
         value2: ['内蒙古自治区', '呼和浩特市', '新城区'],
         address: [ '110000', '110100', '110101' ]
      }
    };
  },
  components: {
    RAddress
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
