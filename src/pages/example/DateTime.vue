<template>
  <page>
       <top :title="$t('component.datetime')" :showBack="true"/>
            <card :title="$t('component.basic')">
                <date-time  :title="$t('datetime.birthday')" :model="policy" value="effortDate" @onChange="onChange"></date-time>
            </card>
            <card :title="$t('datetime.format')">
                <date-time  :title="$t('datetime.format')" :model="policy" value="endDate" :format="format"></date-time>
                <date-time  :title="$t('datetime.time')" :model="policy" value="hour" :format="timeFormat"></date-time>
            </card>
            <card :title="$t('common.custom')">
                <date-time  :title="$t('datetime.hour')" :model="policy" value="hour" :format="timeFormat" :hour-list="customHour"></date-time>
                <date-time  :title="$t('datetime.minute')" :model="policy" value="minute"  :format="timeFormat" :minute-list="customMinute"></date-time>
            </card>
             <card :title="$t('component.readonly')">
                <date-time  :title="$t('component.readonly')" :model="policy" value="effortDate" :readonly="true" ></date-time>
            </card>
            <card :title="$t('datetime.rangeOfDate')">
                <date-time  :title="`${$t('datetime.startDate')}~${$t('datetime.endDate')}`" :model="policy" value="effortDate" :startDate="startDate" :endDate="endDate" ></date-time>
            </card>
            <card :title="$t('component.pleaseSelect')">
                <date-time  :title="$t('datetime.birthday')" :model="policy" value="nullDate"  :placeholder="$t('component.pleaseSelect')"></date-time>
            </card>
            <card :title="$t('component.required')">
                <date-time  :title="$t('datetime.birthday')" :model="policy" value="nullDate" :required="true"></date-time>
            </card>
            
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,DateTime} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import config from 'config';
export default {
  components: {
    Bottom,
    Top,
    Page,
    DateTime,
    Card
  },
  data(){
    return {
        policy:{
          "effortDate":"2018-09-10",
          "endDate":"2018/09/10",
          "hour":"2018-09-10 09:00",
          "minute":"2018-09-10 09:00",
          "nullDate":null
        },
        endDate:"2018-09-10",
        startDate:"1949-09-10",
        format:config.DEFAULT_DATE_FORMATER,
        timeFormat:config.DEFAULT_DATETIME_FORMATER,
        customHour:['09', '10', '11', '12', '13', '14', '15', '16'],
        customMinute:['00', '15', '30', '45'],
    }
  },
  methods:{
    onChange(val){     
      this.policy.effortDate=val;
    }
  }
};
</script>



