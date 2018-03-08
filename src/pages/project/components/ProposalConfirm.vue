<template>
    <cell type="row">
        <cell>
            <div class="demo">{{`${$t('project.premuim')}: ${$t('common.currency')}`}}{{amount}}</div>
        </cell>
        <cell>
            <r-button type="primary" :onClick="_onClick">{{buttonName}}</r-button>
        </cell>
    </cell>
</template>

<script>
import { Card, RButton, Cell } from "rainbow-mobile-core";
export default {
  components: {
    Card,
    RButton,
    Cell
  },
  props: {
    onClick:Function,
    buttonName:String,
    amount:String
  },
  methods: {
    _onClick: function(event) {
        this.onClick?this.onClick(event):null; 
    }
  }
};
</script>

<style>
.demo {
  text-align: center;
  color: #04be02;
  font-size: 18px;
}
</style>
