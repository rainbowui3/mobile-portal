//保险期限组件-极短期
<template>
  <div>
    <r-date-time :readonly="readonlyEf" :title="$t('insuranceDurationShortTerm.insuranceDateStart')" :model="this" value="EffectiveDate" :format="timeFormat" :onChange="onStartDateChange" :startDate="effStartDate" :endDate="effEndDate"></r-date-time>
    <r-date-time :readonly="readonlyEx" :title="$t('insuranceDurationShortTerm.insuranceDateEnd')" :model="this" value="ExpiryDate" :format="timeFormat" :onChange="onChange" :startDate="expStartDate"></r-date-time>
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
      expEndDate: '',
      EffectiveDate: '',
      ExpiryDate: ''
    };
  },
  methods: {
    onHide: function() {},
    onChange(event) {},
    onStartDateChange(value) {
      this.model['ExpiryDate'] = dayjs(
        DateUtil.add(value, 1, 'years')
      ).format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
      this.ExpiryDate = dayjs(this.model['ExpiryDate']).format(this.timeFormat);
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

    if (this.model['EffectiveDate']) {
       this.EffectiveDate = dayjs(this.model['EffectiveDate']).format(this.timeFormat);
    } else {
       this.EffectiveDate = dayjs().format(this.timeFormat);
    }
    if (this.model['ExpiryDate']) {
       this.ExpiryDate = dayjs(this.model['ExpiryDate']).format(this.timeFormat);
    } else {
       this.ExpiryDate = dayjs().format(this.timeFormat);
    }
    // 设定起保日期默认值：当前日期后一天0时0分0秒
    // if (
    //   this.model["EffectiveDate"] == "" ||
    //   this.model["EffectiveDate"] == undefined
    // ) {
    //   let dd = new Date();
    //   let day,
    //     month,
    //     year = "";
    //   let d = dd.getDate() + 1;
    //   let m = dd.getMonth() + 1;
    //   let y = dd.getFullYear();
    //   if (d.toString().length == 1) {
    //     day = "0" + d.toString();
    //   } else {
    //     day = d.toString();
    //   }

    //   if (m.toString().length == 1) {
    //     month = "0" + m.toString();
    //   } else {
    //     month = m.toString();
    //   }

    //   year = y.toString();
    //   if (this.type == "day") {
    //     this.model["EffectiveDate"] = year + "-" + month + "-" + day;
    //     // 计算期限
    //     this.effStartDate = year + "-" + month + "-" + day;
    //     this.effEndDate = DateUtil.add(this.effStartDate, 6, "months");
    //     this.effEndDate = this.effEndDate.split("T")[0];
    //     this.expStartDate = DateUtil.add(this.effStartDate, 1, "days").split(
    //       "T"
    //     )[0];

    //     this.model["ExpiryDate"] = (y + 1).toString() + "-" + month + "-" + day;
    //   } else {
    //     this.model["EffectiveDate"] =
    //       year + "-" + month + "-" + day + " " + "00:00";
    //     this.model["ExpiryDate"] =
    //       (y + 1).toString() + "-" + month + "-" + day + " " + "00:00";
    //   }
    // }
  }
};
</script>
<i18n> 
</i18n> 