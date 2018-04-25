<template>
  <r-page>
       <top :title="$t('component.input')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
               <r-number :title="$t('input.number')" :model="policy" value="value1"/>
               <r-number :title="$t('input.min')" :min="0" :onChange="onChange" :model="policy" value="value2"/>
                <r-number :title="$t('input.max')" :model="policy" styleClass="round" :min="0" :max="5" value="value3"/>
               <r-number :title="$t('input.width')" width="100px" :model="policy" value="value4"/>
               <r-number :title="$t('input.number')" :step="0.5" :model="policy" value="value5"/>

            </r-card>
            
       </r-body>

       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/input';
import {RNumber} from 'rainbow-mobile-number';
export default {
  components: {
    RNumber
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
