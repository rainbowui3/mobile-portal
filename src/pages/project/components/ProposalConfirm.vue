<template>
    <cell type="row">
        <cell>
            <div class="demo">{{`${$t('proposalConfirm.premuim')}: ${$t('proposalConfirm.currency')}`}}{{amount}}</div>
        </cell>
        <cell>
            <r-button type="primary" :onClick="_onClick">{{$t(buttonName)}}</r-button>
        </cell>
    </cell>
</template>

<script>
import { Card, RButton, Cell } from 'rainbow-mobile-core';
import '../../../i18n/proposalConfirm';
export default {
  components: {
    Card,
    RButton,
    Cell
  },
  props: {
    onClick: Function,
    buttonName: String,
    amount: String
  },
  methods: {
    _onClick: function(event) {
        this.onClick ? this.onClick(event) : () => {};
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
