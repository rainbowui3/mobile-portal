<template>
    <div>
        <ul>
            <li v-for="(data,idx) in dataList" :key="idx">
                <r-switch :model="data" value="selected" :title="data.name" :disabled="disabled"/>
                <tree-test v-if="data.hasChild == true" :dataList="data.child" class="a" :disabled="disabled"/>
            </li>
        </ul>
    </div>
</template>

<script>
import { RSwitch } from 'rainbow-mobile-core';
import TreeTest from './TreeTest';
export default {
  name: 'treeTest',
  components: { RSwitch, TreeTest },
  props: {
    dataList: {
      type: Array
    },
    disabled: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.a{
    padding-left: 20px;
}
</style>
