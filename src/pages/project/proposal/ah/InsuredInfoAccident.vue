<template>
  <page>
      <top :title="$t('project.jtyw')" :showBack="true" />
      <r-body>
          <card :title="$t('insuredInfoAccident.passengerInfo')">
              <holder-info :holderInfo="passengerInfo" />
              <r-input :title="$t('insuredInfoAccident.trainNo')"  :model="passengerInfo" value="rainNo"  />           
              <r-input :title="$t('common.name')"  :model="passengerInfo" value="seatNum"  />
              <r-switch  :title="$t('insuredInfoAccident.sameWithHolder')"  :model="passengerInfo" value="relationToHolder" :onClick="changeRelationToHolder" ></r-switch>      
          </card>
          <card :title="$t('common.holderInfo')">
              <holder-info :holderInfo="holderInfo" />
          </card>

      </r-body>
      
      <tab-bar>
        <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
      </tab-bar>
  </page>
 
  
</template>

<script>
import {Page,RBody,TabBar,Card,RInput,RSwitch,Selector} from "rainbow-mobile-core";
import Top from "@/components/Top";
import ProposalConfirm from "../../components/ProposalConfirm";
import HolderInfo from "../../components/HolderInfo";
import "../../../../i18n/insuredInfoAccident";
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
        HolderInfo

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
                buttonName:"proposalConfirm.submitPay",
                amount:"100"
                
                , 
        };
    },
    watch:{
        passengerInfo:{
            handler(){           
                if(this.passengerInfo.relationToHolder){
                    this.holderInfo.name = this.passengerInfo.name;
                    this.holderInfo.certificateId = this.passengerInfo.certificateId;
                    this.holderInfo.certificateNum = this.passengerInfo.certificateNum;
                    this.holderInfo.birthdate = this.passengerInfo.birthdate;
                    this.holderInfo.mobileNum = this.passengerInfo.mobileNum;
                }
            },
            deep:true        

        }

    },
    methods:{
        changeRelationToHolder(){  
            this.passengerInfo.relationToHolder = !this.passengerInfo.relationToHolder;  
            if(this.passengerInfo.relationToHolder){
                this.holderInfo.name = this.passengerInfo.name;
                this.holderInfo.certificateId = this.passengerInfo.certificateId;
                this.holderInfo.certificateNum = this.passengerInfo.certificateNum;
                this.holderInfo.birthdate = this.passengerInfo.birthdate;
                this.holderInfo.mobileNum = this.passengerInfo.mobileNum;
            }else{
                 this.holderInfo = {};
            }
        },       
        onClick: function() {
        this.$router.push("/project/proposal/gi/InsuredInfoConfirmAccident");
        }
    }
  
}
</script>


<style>

</style>

