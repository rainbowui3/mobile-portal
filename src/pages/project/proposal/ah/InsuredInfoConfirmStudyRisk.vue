<template>
  <page>
      <top :title="$t('project.jtyw')" :showBack="true" />
      <r-body>     
          <card>
              <insurance-duration-short-term type="minute" :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"/>
          </card>
          <card>
                <r-input :title="$t('宝贝姓名:')" :placeholder="$t('请填写宝贝姓名')" :model="holderInfo" value="name" :readonly="readonly" />
                <selector :title="$t('宝贝证件类型:')" :options="options" :model="holderInfo" value="certificateId" :readonly="readonly"></selector>
                <r-input :title="$t('宝贝证件号码:')" :placeholder="$t('请填写证件号码')" :model="holderInfo" value="certificateNum" :readonly="readonly" />
                <date-time :title="$t('宝贝出生日期')" :model="holderInfo" value="birthdate" :required="true"  :readonly="readonly"></date-time>    
                <r-input :title="$t('宝贝在读学校:')" :placeholder="$t('请填写学校名称')" :model="holderInfo" value="name" :readonly="readonly" />
                <r-input :title="$t('宝贝所在班级:')" :placeholder="$t('请填写班级名称')" :model="holderInfo" value="certificateNum" :validator="validateNumInput" :validate="isValidateNum" :readonly="readonly" />          
                <selector  :title="$t('您和宝贝的关系:')" :options="options1" :model="insuredInfo" value="relationToHolder" :readonly="readonly"></selector> 
     
        </card>
          <card>
                <r-input :title="$t('您的姓名:')" :placeholder="$t('请填您的真实姓名')" :model="holderInfo" value="name" :readonly="readonly" />
                <selector :title="$t('您的证件类型:')" :options="options" :model="holderInfo" value="certificateId" :onChange="onChangeCertiType" :readonly="readonly"></selector>
                <r-input :title="$t('您的证件号码:')" :placeholder="$t('请填写您的证件号码')" :model="holderInfo" value="certificateNum" :readonly="readonly" />
                <date-time :title="$t('您的出生日期')" :model="holderInfo" value="birthdate" :required="true"  :readonly="readonly"></date-time>
                <r-input :title="$t('您的手机号码:')" :placeholder="$t('请填写您的手机号码')" :model="holderInfo" value="mobileNum" :isPhone="true" :readonly="readonly" />
                <r-input :title="$t('您的电子邮箱：')" :placeholder="$t('email@email.com')" :model="holderInfo" value="email" :isEmail="false"  :readonly="readonly"/>
          </card>

      </r-body>
      
      <tab-bar>
        <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
      </tab-bar>
  </page>
 
  
</template>

<script>
import {Page,RBody,TabBar,Card,RInput,RSwitch,Selector,DateTime} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import Validate from "../../utils/Valitate";
import Getbirthday from "../../utils/Getbirthday";
export default {
    components:{
        Page,
        Top,
        RBody,
        TabBar,
        Card,
        RInput,
        RSwitch,
        ProposalConfirm,
        InsuranceDurationShortTerm,
        DateTime,
        Selector

    },
    data(){
        return{
            
                    holderInfo: {
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    insuredInfo: {
                    relationToHolder:"本人",
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    passengerInfo:{
                    relationToHolder:true,
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "295792200001018271",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    rainNo: "G203",
                    seatNum: "12C",
                    email: "wangxm@outlook.com"

                },
                buttonName:"立即投保",
                amount:"100", 
                options: [
                    { key: "10000", value: "身份证" },
                    { key: "10002", value: "护照" }
                ],
                isValidateNum:false,
                readonly:true,
                 policy: {
                    effectiveDate: "",
                    expireDate: ""
                }
        };
    }
  
}
</script>


<style>

</style>

