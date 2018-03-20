<template>
    <page>
        <top :title="$t('project.jtyw')" :showBack="true" />
        <r-body>
            <card>
                <r-switch  :title="$t('component.required')"  :model="policy" value="status1" ></r-switch>
               
            </card>
            <card>
               
            </card>
            <card>
            </card>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('common.next')}}</r-button>          
        </tab-bar>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Jtgj from "../../../../assets/jtgj.jpg";
import ProductTop from "../../components/ProductTop";
import AutoAgent from "../../components/AutoAgent";
import "../../../../i18n/productInfoEntryAuto";

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RSwitch,
    Picker,
    RInput,
    AutoAgent,
    ProductTop,
    TabBar,
    RButton
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: "车险",
      row: "row",
      policy: {
        isAgent: true,
        value1: "12",
        proCode:"",
        riskCat:[],
        bizCode:[]

      },
      proCodeOptions:[],
      riskCatOptions:[],
      bizCodeOptions:[],
      productCodeData:null
    };
  },
  methods: {
    nextOnClick(){      
        this.$router.push("/project/proposal/payStatus");
        // this.$router.push("");

    }

  },
  computed:{

  }
};
</script>

<style>

</style>

