//保险期限组件-极短期
<template>
  <card>
    <date-time :readonly="readonly" :title="$t('保险起期')" :model="model" :value="effectiveDate" :format="timeFormat" :onChange="onChange"></date-time>
    <date-time :readonly="readonly" :title="$t('保险止期')" :model="model" :value="expireDate" :format="timeFormat" :onChange="onChange"></date-time>
  </card>
</template>

<script>
import { Card, DateTime } from "rainbow-mobile-core";
import config from "config";
export default {
  components: {
    DateTime,
    Card
  },
  props: {
    //组件是否只读
    readonly: Boolean,
    //组件类型，day只显示年月日，minute显示年月日时分
    type: {
      type: String,
      default() {
        return "day";
      }
    },
    //传入的model
    model: {
      type: Object
    },
    effectiveDate:{
      type:String
    },
    expireDate:{
      type:String
    }
  },
  data() {
    return {
      timeFormat: ""
    };
  },
  methods: {
    onChange() {
      console.log(this.model[this.effectiveDate]);
      console.log(this.model[this.expireDate]);
    }
  },
  created: function() {
    if (this.type == "day") {
      this.timeFormat = config.DEFAULT_DATE_FORMATER;
    } else if (this.type == "minute") {
      this.timeFormat = config.DEFAULT_DATETIME_FORMATER;
    } else {
      this.timeFormat = config.DEFAULT_DATE_FORMATER;
    }
  },
  mounted() {
    console.log(this.value);
  }
};
</script>
<i18n> 
</i18n> 