<template>
    <div>
        <ul>
            <li v-for="(data,idx) in dataList" :key="idx">
                <r-switch :model="data" value="selected" :title="data.name"/>
                <tree-test v-if="data.hasChild == true" :dataList="data.child" class="a"/>
            </li>
        </ul>
    </div>
</template>

<script>
import { RSwitch } from "rainbow-mobile-core";
import TreeTest from "./TreeTest";
export default {
  name: "treeTest",
  components: { RSwitch, TreeTest },
  props: {
    dataList: {
      type: Array
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

ul{
    list-style:none;
}
</style>
