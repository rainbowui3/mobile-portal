<template>
    <div>
        <card>
            <date-time :title="$t('EffectiveDate')" :model="policy" value="effectiveDate" :format="timeFormat"></date-time>
            <date-time :title="$t('ExpireDate')" :model="policy" value="expireDate" :format="timeFormat"></date-time>
        </card>
    </div>
</template>

<script>
import { Card, DateTime } from "rainbow-mobile-core";
import config from "config";
export default {
    components: {
        DateTime,
        Card,
    },
    data() {
        return {
            policy: {
                effectiveDate: "",
                expireDate: ""
            },
            timeFormat: config.DEFAULT_DATETIME_FORMATER
        };
    },
    methods: {
        onChange(val) {
            this.policy.effortDate = val;
        },
        VOnChange: function(event) {
            console.log(event);
        }
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