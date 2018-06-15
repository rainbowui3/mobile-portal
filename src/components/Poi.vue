//保险期限组件-极短期
<template>
  <div>
    <r-date-time :readonly="readonlyEf" :title="$t('insuranceDurationShortTerm.insuranceDateStart')" :model="model" value="effectiveDate" :format="timeFormat" :onChange="onStartDateChange" :startDate="effStartDate" :endDate="effEndDate"></r-date-time>
    <r-date-time :readonly="readonlyEx" :title="$t('insuranceDurationShortTerm.insuranceDateEnd')" :model="model" value="expireDate" :format="timeFormat" :onChange="onChange" :startDate="expStartDate"></r-date-time>
    <r-toast :model="pageModel" value="toast" :text="toastText" :onHide="onHide" type='warn' />
  </div>
</template>

<script>
import config from 'config';
import { DateUtil } from 'rainbow-foundation-tools';
import '../i18n/insuranceDurationShortTerm';
const dayjs = require('dayjs');
export default {
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
    // effectiveDate: {
    //   type: String
    // },
    // expireDate: {
    //   type: String
    // },
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
      timeFormat: '',
      pageModel: {
        toast: false
      },
      toastText: '',
      effStartDate: '',
      effEndDate: '',
      expStartDate: '',
      expEndDate: ''
    };
  },
  methods: {
    onHide: function() {
    },
    onChange(event) {
    },
    onStartDateChange() {
      // this.model['expireDate'] = dayjs(DateUtil.add(this.model['effectiveDate'], 1, 'years')).format(config.DEFAULT_DATE_FORMATER);
      // this.model['expireDate'] = dayjs(DateUtil.add(this.model['effectiveDate'], 1, 'years')).format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
      // this.$forceUpdate();
      // console.log(this.model['expireDate']);
      /*eslint-disable*/
      let a = dayjs(DateUtil.add(this.model['effectiveDate'], 1, 'years')).format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
      console.log(a)
      this.$set(this.model, 'expireDate', a);
      /*eslint-disable*/
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
      this.model['effectiveDate'] == '' ||
      this.model['effectiveDate'] == undefined
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
        this.model['effectiveDate'] = year + '-' + month + '-' + day;
        // 计算期限
        this.effStartDate = year + '-' + month + '-' + day;
        this.effEndDate = DateUtil.add(this.effStartDate, 6, 'months');
        this.effEndDate = this.effEndDate.split('T')[0];
        this.expStartDate = DateUtil.add(this.effStartDate, 1, 'days').split('T')[0];

        this.model['expireDate'] = (y + 1).toString() + '-' + month + '-' + day;
      } else {
        this.model['effectiveDate'] =
          year + '-' + month + '-' + day + ' ' + '00:00';
        this.model['expireDate'] =
          (y + 1).toString() + '-' + month + '-' + day + ' ' + '00:00';
      }
    }
  },
  mounted() {},
  updated() {
  }
};
</script>
<i18n> 
</i18n> 