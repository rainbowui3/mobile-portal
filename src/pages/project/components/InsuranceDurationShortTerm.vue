//保险期限组件-极短期
<template>
  <card>
    <date-time v-if="value[0] && value[0].bindField && value[0].bindField != ''" :readonly="readonly" :title="$t('保险起期')" :model="model" :value="value[0].bindField" :format="timeFormat" :onChange="onChange"></date-time>
    <date-time v-if="value[1] && value[1].bindField && value[1].bindField != ''" :readonly="readonly" :title="$t('保险止期')" :model="model" :value="value[1].bindField" :format="timeFormat" :onChange="onChange"></date-time>
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
    //传入的value
    value: {
      type: Array
    },
  },
  data() {
    return {
      timeFormat: ""
    };
  },
  methods: {
    onChange() {
      console.log(this.model[this.value[0].bindField]);
      console.log(this.model[this.value[1].bindField]);
    },
    VOnChange: function(event) {
      console.log(event);
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
    debugger;
    console.log(this.value);
  }
};
</script>
<i18n> 
   Actionsheet header: 
   en: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>' 
   zh-CN: '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>'
   EffectiveDate:
   en: 'Policy Effective Date'
   zh-CN: '保险起期'
   ExpireDate:
   en: 'Policy Expire Date'
   zh-CN: '保险止期'
</i18n> 