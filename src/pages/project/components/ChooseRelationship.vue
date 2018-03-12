<template>
  <!-- <div v-if="dataList.length < 6"> -->
  <div>
    <cell :type="row" v-if="datas.length < 5">
      <cell :span="6" :padding="padding">
        <div v-bind:class="{titleClass:titleClass}">{{$t(title)}}</div>
      </cell>
      <cell :padding="padding">
        <div v-bind:class="{bodyClass:titleClass}">
          <!-- <div v-bind:class="{active:item.active,unactive:!item.active}" v-for="(item,idx) in dataList" :key="idx" @click="onItemClick(item, idx, this)">{{item.bindName}}</div> -->
          <div v-bind:class="{active:item.active,unactive:!item.active}" v-for="(item,idx) in datas" :key="idx" @click="onItemClick(item, idx, this)">{{item.value}}</div>
        </div>
      </cell>
    </cell>
    <selector v-else :title="$t(title)" :options="this.datas" :readonly="readonly" :model="insuredInfo" value="relationToHolder" :onChange="onChange"></selector>
    <!-- :model="insuredInfo" value="relationToHolder" :onChange="onChange"  -->
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
    }
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
      }
    };
  },
  methods: {
    onItemClick: function(item, idx, event) {
      if (!this.readonly) {
        let count = 0;
        if (item.active != true) {
          this.datas.forEach(element => {
            if (count == idx) {
              this.datas[count].active = !element.active;
            } else {
              this.datas[count].active = false;
            }
            count++;
          });
        }
        count = 0;
        this.datas.forEach(element => {
          if (count == idx && element.onClick) {
            element.onClick(element);
          }
          count++;
        });
      }
    },
    onChange(key) {
      this.datas.forEach(element => {
        if (element.key == key) {
          element.onClick(element);
        }
      });
    }
  },
  computed: {},
  created: function() {},
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
