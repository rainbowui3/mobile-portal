<template>
    <r-cell type="row">
        <r-cell>
            <div class="demo">{{`${$t('proposalConfirm.premuim')}: ${$t('proposalConfirm.currency')}`}}{{amount}}</div>
        </r-cell>
        <r-cell>
            <r-button type="primary" :onClick="_onClick">{{$t(buttonName)}}</r-button>
        </r-cell>
    </r-cell>
</template>

<script>
import '../../../i18n/proposalConfirm';
export default {
  props: {
    onClick: Function,
    buttonName: String,
    amount: String
  },
  methods: {
    _onClick: function(event) {
      /* eslint-disable */
      this.onClick ? this.onClick(event) : () => {};
      /* eslint-disable */
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
