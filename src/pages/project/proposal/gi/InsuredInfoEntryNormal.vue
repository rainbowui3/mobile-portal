<template>
    <page>
        <top />
        <insurance-duration-short-term/>
        <card :title="$t('投保人信息')">
            <holder-info/>
        </card>
        <card :title="$t('被保险人信息')">
            <insured-info/>
        </card>
        <card :title="$t('附属被保险人信息')">
            <subsidiary-insured-info/>
        </card>
        <proposal-clause-confirm/>
        <card>
            <proposal-confirm-imme/>
        </card>
    </page>
</template>

<script>
import { Page, Card } from "rainbow-mobile-core";
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
    ProposalConfirmImme
  },
  mounted:function(){
      this.$on("productInfoEntryNormalBtn",function(a){
          console.log(a);
      });
  }
};
</script>

<style>

</style>
