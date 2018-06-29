<template>
  <r-page>
       <top :title="$t('component.list')" :showBack="true"/>
       <div id="list">
            <r-card :title="$t('component.list')">
               <r-index-list :data='data' :onClick="click"/>
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
        {'title': 'A', 'code': 'A', 'data': [{'value': '奥迪'}]},
        {'title': 'B', 'code': 'B', 'data': [{'value': '奔驰'}]},
        {'title': 'C', 'code': 'C', 'data': [{'value': '长城'}]},
        {'title': 'D', 'code': 'D', 'data': [{'value': '大众'}]},
        {'title': 'F', 'code': 'F', 'data': [{'value': '丰田'}]},
        {'title': 'G', 'code': 'G', 'data': [{'value': '广汽传奇'}]},
        {'title': 'H', 'code': 'H', 'data': [{'value': '红旗'}]},
        {'title': 'J', 'code': 'J', 'data': [{'value': '捷豹'}]},
        {'title': 'K', 'code': 'K', 'data': [{'value': '凯迪拉克'}]},
        {'title': 'L', 'code': 'L', 'data': [{'value': '雷克萨斯'}]},
        {'title': 'M', 'code': 'M', 'data': [{'value': '马自达'}]},
        {'title': 'N', 'code': 'N', 'data': [{'value': '纳智捷'}]},
        {'title': 'O', 'code': 'O', 'data': [{'value': '欧宝'}]},
        {'title': 'P', 'code': 'P', 'data': [{'value': '帕加尼'}]},
        {'title': 'Q', 'code': 'Q', 'data': [{'value': '起亚'}]},
        {'title': 'R', 'code': 'R', 'data': [{'value': '荣威'}]}

      ]
    };
  },
  components: {
    RIndexList
  },
  methods: {
    click(value) {
        /* eslint-disable */
      console.log('this is click', value);
      /* eslint-disable */
    }
  }
};
</script>
<style>
#list{
  margin-top: 46px;
}

</style>

