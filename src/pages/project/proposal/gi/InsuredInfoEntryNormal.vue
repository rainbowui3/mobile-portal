<template>
    <page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <insurance-duration-short-term/>
        <card :title="$t('投保人信息')">
            <holder-info :holderInfo="holderInfo" />
        </card>
        <card :title="$t('被保险人信息')">
            <insured-info :insuredInfo="insuredInfo" />
        </card>
        <card :title="$t('附属被保险人信息')">
            <subsidiary-insured-info :dubsidiaryInsuranceInfo="dubsidiaryInsuranceInfo" />
        </card>
        <card>
            <r-button type="primary" :onClick="clickHome">{{$t('添加更多被保险人')}}</r-button>
        </card>
        <proposal-clause-confirm/>
        <tab-bar>
            <proposal-confirm-imme :onClick="onClick"/>
        </tab-bar>
    </page>
</template>

<script>
import { Page, Card, TabBar, RButton } from "rainbow-mobile-core";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import HolderInfo from "../../components/HolderInfo";
import InsuranceDurationShortTerm from "../../components/InsuranceDurationShortTerm";
import InsuredInfo from "../../components/InsuredInfo";
import SubsidiaryInsuredInfo from "../../components/SubsidiaryInsuredInfo";
import ProposalClauseConfirm from "../../components/ProposalClauseConfirm";
import ProposalConfirmImme from "../../components/ProposalConfirmImme";
export default {
  components: {
    Top,
    Card,
    Bottom,
    Page,
    HolderInfo,
    InsuranceDurationShortTerm,
    InsuredInfo,
    SubsidiaryInsuredInfo,
    ProposalClauseConfirm,
    ProposalConfirmImme,
    TabBar,
    RButton
  },
  data() {
    return {
      holderInfo: {
        name: "张大帅",
        certificateId: "身份证",
        certificateNum: "xxxxxxxxxxxxxxxxxx",
        birthdate: "2000-01-01",
        mobileNum: "183xxxxxxxx",
        email: "张大帅好帅@email.com"
      },
      insuredInfo: {
        name: "张大帅",
        certificateId: "身份证",
        certificateNum: "xxxxxxxxxxxxxxxxxx",
        birthdate: "2000-01-01",
        mobileNum: "183xxxxxxxx",
        email: "张大帅好帅@email.com"
      },
      dubsidiaryInsuranceInfo: {
        name: "张大帅",
        certificateId: "身份证",
        certificateNum: "xxxxxxxxxxxxxxxxxx",
        birthdate: "2000-01-01",
        mobileNum: "183xxxxxxxx",
        email: "张大帅好帅@email.com"
      }
    };
  },
  methods:{
      onClick:function(){
          this.$router.push("/project/proposal/gi/InsuredInfoConfirmNormal");
      },
      clickHome:function(){
          console.log("lalalalala");
      }
  },
  created: function() {
    console.log("created");
  },
  beforeDestroy:function(){

  },
};
</script>

<style>

</style>
