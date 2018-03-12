<template>
    <!--<card title="投保人" class="weui-panel__hd" >-->
    <div>
        <r-input :title="$t('姓名:')" :placeholder="$t('请填写姓名')" :model="holderInfo" value="name" :readonly="readonly" />
        <selector :title="$t('证件类型:')" :options="options" :model="holderInfo" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
        <r-input :title="$t('证件号码:')" :placeholder="$t('请填写证件号码')" :model="holderInfo" value="certificateNum" :validator="validateNumInput" :validate="isValidateNum" :readonly="readonly" />
        <date-time :title="$t('出生日期')" :model="holderInfo" value="birthdate" :required="true"  :readonly="readonly"></date-time>
        <r-input :title="$t('手机号码:')" :placeholder="$t('请填写手机号码')" :model="holderInfo" value="mobileNum" :isPhone="true" :validate="false" :readonly="readonly" />
        <r-input :title="$t('电子邮箱：')" :placeholder="$t('email@email.com')" :model="holderInfo" value="email" :isEmail="false" :validate="false" :readonly="readonly"/>
    </div>
    <!--</card>-->
</template>

<script>
import {
  Page,
  Card,
  RInput,
  RButton,
  Selector,
  DateTime
} from "rainbow-mobile-core";
import Validate from "../utils/Valitate";
import Getbirthday from "../utils/Getbirthday";
export default {
  components: {
    Card,
    RInput,
    Selector,
    DateTime
  },
  data() {
    return {
      policy: {
        value2: ""
      },
      options: [
        { key: "10000", value: "身份证" },
        { key: "10002", value: "护照" }
      ],
      isValidateNum:false,
      // ,
      // certificate: {
      //   certificateId: "10000"
      // }
    };
  },
  methods: {
    validateNumInput(value){ 
      var isCertification = Validate.validateIdNo(value);
      if(isCertification && !this.isValidateNum){
          this.holderInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
        }
      return {
        valid:  isCertification===true,
        msg: this.$t("input.validate")
      };       
    }
  },
  props: {
    readonly: Boolean,
    holderInfo: Object
  },
  computed:{
    onChangeCertiType:function(){   
      if(this.holderInfo.certificateId && this.holderInfo.certificateId ==="10000" ){
        this.isValidateNum = false;
        this.validateNumInput(this.holderInfo.certificateNum);
      }else {
        this.isValidateNum = true;
      }
    }


    
  }
};
</script>
<style>
/*.weui-panel__hd {
    text-align: left;
}*/
</style>
