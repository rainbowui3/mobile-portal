<template>
  <!--<card title="附属被保险人" class="weui-panel__hd" >-->
  <div>
      <selector  :title="$t('与投保人关系:')" :options="options" :model="dubsidiaryInsuranceInfo" value="relationToHolder" :onChange="onChange" :readonly="readonly"></selector>
      <selector  :title="$t('与主被保险人关系:')" :options="options" :model="dubsidiaryInsuranceInfo" value="relationToMainInsured" :onChange="onChange" :readonly="readonly"></selector> 
      <r-input :title="$t('姓名:')" :placeholder="$t('请填写姓名')" :model="dubsidiaryInsuranceInfo" value="name" :readonly="readonly"/>
      <selector  :title="$t('证件类型:')" :options="options" :model="dubsidiaryInsuranceInfo" value="certificateId" :onChange="onChange" :readonly="readonly"></selector>   
      <r-input :title="$t('证件号码:')" :placeholder="$t('请填写证件号码')" :model="dubsidiaryInsuranceInfo" value="certificateNu" :readonly="readonly"/>
      <date-time  :title="$t('出生日期')" :model="dubsidiaryInsuranceInfo" value="birthdate" :required="true" :onChange="onChange" :readonly="readonly"></date-time>
      <r-input :title="$t('手机号码:')" :placeholder="$t('请填写手机号码')" :model="dubsidiaryInsuranceInfo" value="mobileNum" :readonly="readonly"/>   
      <r-input :title="$t('电子邮箱：')" :placeholder="$t('email@email.com')" :model="dubsidiaryInsuranceInfo" value="email" :isEmail="true" :validate="false" :readonly="readonly"/>
  </div>
  <!--</card>-->
</template>

<script>
import { Page, Card, RInput, RButton,Selector,DateTime } from "rainbow-mobile-core";
export default {
    components:{
        Card,
        RInput,
        Selector,
        DateTime

    },
    data() {
        return{
            policy:{
                value2:''
            },
            options:[{"key":"10000","value":"身份证"},{"key":"10001","value":"军官证"},{"key":"10002","value":"护照"}],
            certificate:{
                "certificateId":"10000",
            }

        };
    },
    methods:{
        onChange:function(val) {
        this.certificate.effortDate=val;
        }
    },
    props:['readonly','dubsidiaryInsuranceInfo']
  
}
</script>
<style>
/*.weui-panel__hd {
    text-align: left;
}*/
</style>
