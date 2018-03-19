<template>
  <page>
       <top :title="$t('component.picker')" :showBack="true"/>
       <r-body>
            <card :title="$t('component.basic')">
                <picker  :title="$t('picker.phone')" :options="list1" :model="policy" value="value1" @onChange="onChange"></picker>
            </card>
            <card :title="$t('picker.towColumn')">
                <picker  :title="$t('picker.phone')" :options="list2" :model="policy" value="value2"  @onChange="onChange"></picker>
            </card>
            <card :title="$t('picker.chainedColumns')">
                <picker  :title="$t('picker.address')" :options="list3" :model="policy" value="value3" :columns="3" :cascade="true" @onChange="onChange"></picker>
            </card>
       </r-body>  
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, Picker,RBody } from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import config from "config";
import "../../i18n/component";
import "../../i18n/picker";
export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Picker,
    RBody
  },
  data() {
    return {
      list1: [["小米", "iPhone", "华为", "锤子", "三星", "其他", "不告诉你"]],
      list2: [
        ["小米", "iPhone", "华为", "锤子", "三星", "其他", "不告诉你"],
        ["小米1", "iPhone2", "华为3", "锤子4", "三星5", "其他6", "不告诉你7"]
      ],
      list3: [{
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }],
      policy: {
        nullDate: null,
        value1: ["小米"],
        value2: ["小米", "华为3"],
        value3: ["USA","usa002","0006"],
      }
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
      this.policy.index = val;
    }
  }
};
</script>



