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
    <selector v-else :title="$t(title)" :options="this.datas" :readonly="readonly" :model="insuredInfo" value="relationToHolder" :onChange="onChange"></selector>
  </div>
</template>

<script>
import { Cell, Selector } from "rainbow-mobile-core";
import { PassThrough } from "stream";
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
        return "title here";
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
      row: "row",
      padding: "0px",
      insuredInfo: {
        relationToHolder: ""
      },
      dataList: []
    };
  },
  methods: {
    onItemClick: function(item, idx, event) {
      if (!this.readonly) {
        this.model[this.value] = item.value;
        let count = 0;
        if (item.active != true) {
          this.dataList.forEach(element => {
            if (count == idx) {
              this.dataList[count].active = !element.active;
            } else {
              this.dataList[count].active = false;
            }
            count++;
          });
        }
      }
    },
    onChange(key){
      this.dataList.forEach(element => {
        if(element.key == key){
          this.model[this.value] = element.value;
        }
      });
    }
  },
  computed: {},
  created: function() {
    let dataList = [];
    // this.datas.forEach(element => {
    //   dataList.push(element);
    // });
    dataList = JSON.parse(JSON.stringify(this.datas));
    this.dataList = dataList;
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
