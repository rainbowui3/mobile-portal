<template>
    <page>
        <top :title="$t('autoPremiumInfo.premiumInfo')" :showBack="true" />
        <r-body>
            <card>
                <cell type="row">
                    <cell :span="8">
                        <date-time :title="$t('autoPremiumInfo.compStartDate')" :model="policy" value="compStartDate" :format="format"></date-time>
                    </cell>
                    <cell :span="4">
                        <checker :model="policy" value="compEffectImmediately" :text="$t('autoPremiumInfo.effectImmediately')" :onChange="onChange" type="icon" :disabled="true"/>
                    </cell>
                    <cell>
                    </cell>
                </cell>
                <date-time :title="$t('autoPremiumInfo.compEndDate')" :model="policy" value="compEndDate" :format="format"></date-time>
                <cell type="row">
                    <cell :span="8">
                        <date-time :title="$t('autoPremiumInfo.commStartDate')" :model="policy" value="commStartDate" :format="format"></date-time>
                    </cell>
                    <cell :span="4">
                        <checker :model="policy" value="commEffectImmediately" :text="$t('autoPremiumInfo.effectImmediately')" :onChange="onChange" type="icon" :disabled="true"/>
                    </cell>
                    <cell>
                    </cell>
                </cell>
                <date-time :title="$t('autoPremiumInfo.commEndDate')" :model="policy" value="commEndDate" :format="format"></date-time>
            </card>
            <card :title="`${$t('autoPremiumInfo.compulsoryInsurance')}+${$t('autoPremiumInfo.carShipTax')}`">
                <r-input :title="$t('autoPremiumInfo.compPremiumTax')" :model="policy" value="compPremiumTax" :readonly="true"></r-input>
                <r-input :title="$t('autoPremiumInfo.carShipTax')" :model="policy" value="carShipTax" :readonly="true"></r-input>
            </card>
            <card :title="$t('autoPremiumInfo.commercialInsurance')">
                <r-input :title="$t('autoPremiumInfo.commPremiumTax')" :model="policy" value="commPremiumTax" :readonly="true"></r-input>
            </card>
            <card >
                <row :title="$t('autoPremiumInfo.cFeeInfo')" :model="policy" value="" :onClick="gotoFee" :isLink="true"></row>
                <row :title="$t('autoPremiumInfo.floatRate')" :model="policy" value="" :onClick="gotoFloatRate" :isLink="true"></row>
            </card>
            <card>
                <r-input :title="$t('autoPremiumInfo.totalAmount')" :model="policy" value="totalAmount" :readonly="true"></r-input>
            </card>
        </r-body>
        <tab-bar>
            <cell :type="row">
                <cell :span="6" :padding="padding">
                   <r-button type="primary" :onClick="nextOnClick">{{$t('autoPremiumInfo.share')}}</r-button> 
                </cell>
                <cell :span="6" :padding="padding">
                    <r-button type="primary" :onClick="nextOnClick">{{$t('common.next')}}</r-button> 
                </cell>
                <cell>
                </cell>
            </cell>                  
        </tab-bar>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  Cell,
  DateTime,
  RSwitch,
  RInput,
  Row,
  TabBar,
  RButton,
  Checker
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/AutoPremiumInfo";
import config from 'config';

export default {
  components: {
    Page,
    RBody,
    Card,
    Cell,
    DateTime,
    Top,
    RSwitch,
    RInput,
    Row,
    TabBar,
    RButton,
    Checker
  },
  data() {
    return {
      row:"row",
      padding:"0px",
      format:config.DEFAULT_DATE_FORMATER,
      policy: {
        isAgent: true,
        value1: "12",
        proCode:"",
        riskCat:[],
        bizCode:[]

      }
    };
  },
  methods: {
    nextOnClick(){      
        this.$router.push("/project/proposal/auto2e/AutoPlan");
        // this.$router.push("");
    },
    gotoFee(event){
         window.location.hash='/project/proposal/auto2e/AutoCFeeInfo'
    },
    gotoFloatRate(event){
         window.location.hash='/project/proposal/auto2e/AutoFloatRateInfo'
    }

  }
};
</script>

<style>

</style>

