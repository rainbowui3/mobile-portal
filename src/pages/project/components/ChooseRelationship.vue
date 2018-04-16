<template>
  <div>
    <cell :type="row" v-if="dataList.length < 5" class="margin-bottom:5px">
      <cell :span="6" :padding="padding">
        <div v-bind:class="{titleClass:titleClass}">{{$t(title)}}</div>
      </cell>
      <cell :padding="padding">
        <div v-bind:class="{bodyClass:titleClass}">
          <div v-bind:class="{active:item.active,unactive:!item.active}" v-for="(item,idx) in dataList" :key="idx" @click="onItemClick(item, idx, this)">{{item.value}}</div>
        </div>
      </cell>
    </cell>
    <selector v-else :title="$t(title)" :options="this.datas" :readonly="readonly" :model="selectorModel" value="selectorValue" :onChange="onChange"></selector>
  </div>
</template>

<script>
import { Cell, Selector } from 'rainbow-mobile-core';
import { PassThrough } from 'stream';
import '../../../i18n/holderInfo';
export default {
  components: {
    Cell,
    Selector
  },
  props: {
    datas: Array,
    readonly: {
      type: Boolean,
      default() {
        return false;
      }
    },
    title: {
      type: String,
      default() {
        return 'title here';
      }
    },
    model: Object,
    value: String
  },
  data() {
    return {
      titleClass: true,
      title2: true,
      bodyClass: true,
      row: 'row',
      padding: '0px',
      selectorModel: {
        selectorValue: '1'
      },
      dataList: []
    };
  },
  methods: {
    onItemClick: function(item, idx, event) {
      if (!this.readonly) {
        this.model[this.value] = item.key;
        let count = 0;
        if (item.active != true) {
          this.dataList.forEach(element => {
            if (count == idx) {
              this.dataList[count].active = !element.active;
              this.model[this.value] = this.dataList[count].key;
            } else {
              this.dataList[count].active = false;
            }
            count++;
          });
        }
      }
    },
    onChange(key) {
      this.dataList.forEach(element => {
        if (element.key == key) {
          this.model[this.value] = element.value;
        }
      });
    }
  },
  computed: {},
  created: function() {
    // 将入参list脱绑
    let dataList = [];
    dataList = JSON.parse(JSON.stringify(this.datas));
    this.dataList = dataList;
    // 根据传入的model[value]的值来进行选项上的初始化
    if (this.model[this.value] && this.model[this.value] != '') {
      this.dataList.forEach(element => {
        if (element.key == this.model[this.value]) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
    } else {
      this.model[this.value] = this.datas[0].key;
    }
  },
  mounted: function() {}
};
</script>

<style>
.titleClass {
  padding: 2px;
  margin-left: 14px;
}
.bodyClass {
  float: right;
}
.unactive {
  color: grey;
  float: left;
  margin-right: 10px;
  border: grey solid 1px;
  border-radius: 10px;
  padding: 1px;
}
.active {
  background: green;
  color: white;
  float: left;
  margin-right: 10px;
  border: grey solid 1px;
  border-radius: 10px;
  padding: 1px;
}
</style>
