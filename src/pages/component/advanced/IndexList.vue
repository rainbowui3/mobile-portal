<template>
  <r-page>
       <top :title="$t('component.input')" :showBack="true"/>
       <div>
            <r-card :title="$t('component.basic')">
            </r-card>
            <r-card :title="$t('input.bind')">
               <r-index-list :data='data'/>
            </r-card>
       </div>

       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/common';
import '../../../i18n/input';
import {RIndexList} from 'rainbow-mobile-index-list';
export default {

  data() {
    return {
      data: [
        {'title': 'A', 'code': 'A', 'data': [{'value': '比亚迪'}]},
        {'title': 'B', 'code': 'B', 'data': [{'value': '比亚迪'}]},
        {'title': 'C', 'code': 'C', 'data': [{'value': '比亚迪'}]},
        {'title': 'D', 'data': [{'value': '比亚迪'}]},
        {'title': 'E', 'data': [{'value': '比亚迪'}]},
        {'title': 'F', 'data': [{'value': '比亚迪'}]},
        {'title': 'G', 'data': [{'value': '比亚迪'}]},
        {'title': 'H', 'data': [{'value': '比亚迪'}]},
        {'title': 'I', 'data': [{'value': '比亚迪'}]},
        {'title': 'J', 'data': [{'value': '比亚迪'}]},
        {'title': 'K', 'data': [{'value': '比亚迪'}]}

      ]
    };
  },
  components: {
    RIndexList
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
