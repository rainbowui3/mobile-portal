<template>
  <r-page>
       <top :title="$t('component.datetime')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                <r-date-time  :title="$t('datetime.birthday')" :model="policy" value="effortDate" :onChange="onChange"></r-date-time>
            </r-card>
            <r-card :title="$t('datetime.format')">
                <r-date-time  :title="$t('datetime.format')" :model="policy" value="endDate" :format="format"></r-date-time>
                <r-date-time  :title="$t('datetime.time')" :model="policy" value="hour" :format="timeFormat"></r-date-time>
            </r-card>
            <r-card :title="$t('common.custom')">
                <r-date-time  :title="$t('datetime.hour')" :model="policy" value="hour" :format="timeFormat" :hour-list="customHour"></r-date-time>
                <r-date-time  :title="$t('datetime.minute')" :model="policy" value="minute"  :format="timeFormat" :minute-list="customMinute"></r-date-time>
            </r-card>
             <r-card :title="$t('component.readonly')">
                <r-date-time  :title="$t('component.readonly')" :model="policy" value="effortDate" :readonly="true" ></r-date-time>
            </r-card>
            <r-card :title="$t('datetime.rangeOfDate')">
                <r-date-time  :title="`${$t('datetime.startDate')}~${$t('datetime.endDate')}`" :model="policy" value="effortDate" :startDate="startDate" :endDate="endDate" ></r-date-time>
            </r-card>
            <r-card :title="$t('component.pleaseSelect')">
                <r-date-time  :title="$t('datetime.birthday')" :model="policy" value="nullDate"  :placeholder="$t('component.pleaseSelect')"></r-date-time>
            </r-card>
            <r-card :title="$t('component.required')">
                <r-date-time  :title="$t('datetime.birthday')" :model="policy" value="nullDate" :required="true"></r-date-time>
            </r-card>
       </r-body>    
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, DateTime, RBody} from 'rainbow-mobile-core';

import config from 'config';
import '../../i18n/component';
import '../../i18n/datetime';
export default {
  components: {
    Bottom,
    Top,
    Page,
    DateTime,
    Card,
    RBody
  },
  data() {
    return {
        policy: {
          'effortDate': '2018-09-10',
          'endDate': '2018/09/10',
          'hour': '2018-09-10 09:00',
          'minute': '2018-09-10 09:00',
          'nullDate': null
        },
        endDate: '2018-09-10',
        startDate: '1949-09-10',
        format: config.DEFAULT_DATE_FORMATER,
        timeFormat: config.DEFAULT_DATETIME_FORMATER,
        customHour: ['09', '10', '11', '12', '13', '14', '15', '16'],
        customMinute: ['00', '15', '30', '45']
    };
  },
  methods: {
    onChange(val) {
    /*eslint-disable */
      this.policy['effortDate'] = val;
    /*eslint-disable */
    }
  }
};
</script>



