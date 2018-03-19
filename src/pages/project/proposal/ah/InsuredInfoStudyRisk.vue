<template>
  <page>
      <top :title="$t('project.jtyw')" :showBack="true" />
      <r-body>     
          <card>
              <insurance-duration-short-term :model="policy" effectiveDate="effectiveDate" expireDate="expireDate"/>
          </card>
          <card>
                <r-input :title="$t('宝贝姓名:')" :placeholder="$t('请填写宝贝姓名')" :model="babyInfo" value="name"  />
                <selector :title="$t('宝贝证件类型:')" :options="options" :model="babyInfo" value="certificateId" :onChange="onChangeCertiType" ></selector>
                <r-input :title="$t('宝贝证件号码:')" :placeholder="$t('请填写证件号码')" :model="babyInfo" value="certificateNum" :validator="validateNumInput" :validate="isValidateNum" />
                <date-time :title="$t('宝贝出生日期')" :model="babyInfo" value="birthdate" :required="true" ></date-time>    
                <r-input :title="$t('宝贝在读学校:')" :placeholder="$t('请填写学校名称')" :model="babyInfo" value="school" />
                <r-input :title="$t('宝贝所在班级:')" :placeholder="$t('请填写班级名称')" :model="babyInfo" value="class"/>          
                <selector  :title="$t('您和宝贝的关系:')" :options="options1" :model="babyInfo" value="relationToHolder"></selector> 
     
          </card>
          <card>
                <r-input :title="$t('您的姓名:')" :placeholder="$t('请填您的真实姓名')" :model="holderInfo" value="name" />
                <selector :title="$t('您的证件类型:')" :options="options" :model="holderInfo" value="certificateId" :onChange="onChangeCertiType"></selector>
                <r-input :title="$t('您的证件号码:')" :placeholder="$t('请填写您的证件号码')" :model="holderInfo" value="certificateNum" :validator="validateNumInput" :validate="isValidateNum" />
                <date-time :title="$t('您的出生日期')" :model="holderInfo" value="birthdate" :required="true" ></date-time>
                <r-input :title="$t('您的手机号码:')" :placeholder="$t('请填写您的手机号码')" :model="holderInfo" value="mobileNum" :isPhone="true" :validate="false" />
                <r-input :title="$t('您的电子邮箱：')" :placeholder="$t('email@email.com')" :model="holderInfo" value="email" :isEmail="false" :validate="false"/>
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
                    certificateNum: "",
                    birthdate: "2000-01-01",
                    mobileNum: "18398768724",
                    email: "wangxm@outlook.com"
                    },
                    babyInfo:{
                    relationToHolder:"10000",
                    name: "王小明",
                    certificateId: "10000",
                    certificateNum: "",
                    birthdate: "2000-01-01",
                    email: "wangxm@outlook.com",
                    school:"",
                    class:""

                },
                buttonName:"立即投保",
                amount:"100", 
                options: [
                    { key: "10000", value: "身份证" },
                    { key: "10002", value: "护照" }
                ],
                isValidateNum:false,
                options1:[{"key":"10000","value":"父母"},{"key":"10001","value":"祖父母"}],
                policy: {
                    effectiveDate: "",
                    expireDate: ""
                }
        };
    },
    methods:{    
        onClick: function() {
            this.$router.push("/project/proposal/gi/InsuredInfoConfirmStudyRisk");
        },
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
  
}
</script>


<style>

</style>

