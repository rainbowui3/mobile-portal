<template>
  <div>
    <r-cell :type='row' v-if="data.length < 5">
      <r-cell :span='6'>
        <r-input :title='$t(title)' :model="this" value="nullValue" ></r-input>
      </r-cell>
      <r-cell class="chooseRelationship">
        <r-checker v-if="isToHolder" :model="model" value="PolHolderInsuredRelaCode" :data='data' type="default" :onChange="_onChange"/>
        <r-checker v-else :model="model" value="relationToMainInsured" :data='data' type="default" :onChange="_onChange"/>
      </r-cell>
    </r-cell>
    <div v-else>    
      <r-selector v-if="isToHolder" :title="$t(title)" :options="data" :readonly="readonly" :model="model" value="PolHolderInsuredRelaCode" :onChange="_onChange"></r-selector>
      <r-selector v-else :title="$t(title)" :options="data" :readonly="readonly" :model="model" value="relationToMainInsured" :onChange="_onChange"></r-selector>
    </div>
  </div>
</template>

<script>
import '../i18n/holderInfo';
export default {
  props: {
    onChange: Function,
    data: Array,
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
    // value: String,
    isToHolder: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      row: 'row',
      nullValue: ''
    };
  },
  methods: {
    _onChange () {
      return this.onChange ? this.onChange : () => {};
    }
  }
};
</script>

<style >
.chooseRelationship>div>.vux-checker-box > .item{ 
     padding: 0px; 
}

</style>