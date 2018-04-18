//保险期限组件-极短期
<template>
  <div>
    <r-date-time :readonly="readonlyEf" :title="$t('insuranceDurationShortTerm.insuranceDateStart')" :model="model" :value="effectiveDate" :format="timeFormat" :onChange="onChange"></r-date-time>
    <r-date-time :readonly="readonlyEx" :title="$t('insuranceDurationShortTerm.insuranceDateEnd')" :model="model" :value="expireDate" :format="timeFormat" :onChange="onChange"></r-date-time>
  </div>
</template>

<script>
import { Card, DateTime, Cell, Checker } from 'rainbow-mobile-core';
import config from 'config';
import '../../../i18n/insuranceDurationShortTerm';
export default {
  components: {
    DateTime,
    Card,
    Cell,
    Checker
  },
  props: {
    // 组件是否只读
    readonly: Boolean,
    // 组件类型，day只显示年月日，minute显示年月日时分
    type: {
      type: String,
      default() {
        return 'day';
      }
    },
    // 传入的model
    model: {
      type: Object
    },
    effectiveDate: {
      type: String
    },
    expireDate: {
      type: String
    },
    readonlyEf: {
      type: Boolean,
      default: false
    },
    readonlyEx: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timeFormat: ''
    };
  },
  methods: {
    onChange() {
      console.log(this.model[this.effectiveDate]);
      console.log(this.model[this.expireDate]);
    }
  },
  created: function() {
    if (this.type == 'day') {
      this.timeFormat = config.DEFAULT_DATE_FORMATER;
    } else if (this.type == 'minute') {
      this.timeFormat = config.DEFAULT_DATETIME_FORMATER;
    } else {
      this.timeFormat = config.DEFAULT_DATE_FORMATER;
    }

    // 设定起保日期默认值：当前日期后一天0时0分0秒
    if (
      this.model[this.effectiveDate] == '' ||
      this.model[this.effectiveDate] == undefined
    ) {
      let dd = new Date();
      let day,
        month,
        year = '';
      let d = dd.getDate() + 1;
      let m = dd.getMonth() + 1;
      let y = dd.getFullYear();
      if (d.toString().length == 1) {
        day = '0' + d.toString();
      } else {
        day = d.toString();
      }

      if (m.toString().length == 1) {
        month = '0' + m.toString();
      } else {
        month = m.toString();
      }

      year = y.toString();
      if (this.type == 'day') {
        this.model[this.effectiveDate] = year + '-' + month + '-' + day;
        this.model[this.expireDate] =
          (y + 1).toString() + '-' + month + '-' + day;
      } else {
        this.model[this.effectiveDate] =
          year + '-' + month + '-' + day + ' ' + '00:00';
        this.model[this.expireDate] =
          (y + 1).toString() + '-' + month + '-' + day + ' ' + '00:00';
      }
    }
  },
  mounted() {}
};
</script>
<i18n> 
</i18n> 