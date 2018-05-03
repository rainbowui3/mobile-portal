<template>
  <r-page>
       <top :title="$t('component.checker')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('input.iconType')">
                <r-checker :model="policy" value="value2" :text="`${$t('common.agree')}?`" :onChange="onChange" type="icon"/>
                <r-checker :model="policy" value="value3" :text="`${$t('common.agree')}?`"  :onChange="onChange" type="icon" :plain="true"/>
            </r-card>
            <r-card :title="$t('component.list')">
                <r-checker :model="policy" value="value9" :data='list' :onChange="onChange" type="default"/>
            </r-card>

             <r-card :title="$t('component.list')">
                <r-checker :model="policy" value="value10" :data='items1' :onChange="onChange" type="default" :multiple='true'/>
            </r-card>
     
            <r-card :title="$t('component.list')">
                <r-checker :model="policy" value="value4" :data='list' :onChange="onChange" type="list"/>
            </r-card>
            <r-card :title="$t('component.list')">
                <r-checker :disabled="true" :model="policy" value="value5" :data='list' :onChange="onChange" type="list" labelPosition="left"/>
            </r-card>
            <r-card :title="$t('input.max')">
                <r-checker :max="2" :model="policy" value="value8" :data='items1' :onChange="onChange" type="list"/>
            </r-card>
            <r-card :title="$t('component.radio')">
                <r-checker :max="1" :model="policy" value="value6" :data='list' :onChange="onChange" type="list"/>
            </r-card>
             <r-card :title="$t('common.description')">
                <r-checker :max="1" :model="policy" value="value7" :data='inlineDescList' :onChange="onChange" type="list"/>
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/input';

export default {
  data() {
      return {
          policy: {
                value: null,
                value1: '1000000',
                value2: false,
                value3: true,
                value4: null,
                value5: [ '10000', '100000' ],
                value10: [ '1', '2' ]
          },
          items1: [{
                key: '1',
                value: 'A'
            }, {
                key: '2',
                value: 'B'
            }, {
                key: '3',
                value: 'C'
        }]
      };
  },
  computed: {
      list() {
          return [{'key': '10000', 'value': '1万', 'disabled': true}, {'key': '100000', 'value': '10万'}, {'key': '1000000', 'value': '100万'}, {'key': '10000000', 'value': '1000万'}];
      },
      inlineDescList() {
          return [
                {key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain'},
                {key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods'},
                {key: '3', value: 'Camel is best, no inline-desc'}
          ];
      }
  },
  methods: {
      onChange(value) {
          /* eslint-disable */
            console.log(value);
            /* eslint-disable */
      }
  }
};
</script>

