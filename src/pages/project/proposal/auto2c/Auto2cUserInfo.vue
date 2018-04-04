<template>
    <page>
        <top :title="$t('common.autoInsurance')" :showBack="true" />
        <r-body>
            <card>
                <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
            </card>
            <card>
                <row :title="$t('productInfoEntryAutoC.drivingCity')" :model="policy" value="drivingCity" :onClick="goto" :isLink="true" ></row>
                <cell :type="row">
                    <cell :span="7">
                        <r-input :title="$t('productInfoEntryAutoC.carLicense')" :model="policy" value="carLicense"></r-input>
                    </cell>
                    <cell :span="5">
                        <checker :model="policy" value="" :text="$t('productInfoEntryAutoC.newCar')" type="icon"></checker>
                    </cell>
                </cell>
                <r-input :title="$t('productInfoEntryAutoC.name')" :model="policy" value="name"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.certificateNo')" :model="policy" value="certificateNo" :validator="validateNumInput" :novalidate="false"></r-input>
                <r-input :title="$t('productInfoEntryAutoC.mobile')" :model="policy" value="mobile" :isPhone="true" :novalidate="false"></r-input>   
            </card>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="nextOnClick">{{$t('productInfoEntryAutoC.wantInsure')}}</r-button>          
        </tab-bar>

    </page>

</template>
<script>
import {
  Page,
  RBody,
  Card,
  RInput,
  TabBar,
  RButton,
  Row,
  Cell,
  Checker
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Jtgj from "../../../../assets/jtgj.jpg";
import ProductTop from "../../components/ProductTop";
import "../../../../i18n/Auto2cUserInfo";
import Validate from "../../utils/Valitate";

export default {
  components: {
    Page,
    RBody,
    Card,
    Top,
    RInput,
    ProductTop,
    TabBar,
    RButton,
    Row,
    Cell,
    Checker
  },
  data() {
    return {
      productImgSrc: Jtgj,
      productDes: "车险",
      row: "row",
      policy: {
          drivingCity:"上海",
          carLicense:"",
          newCar:false,
          name:"",
          certificateNo:"",
          mobile:""         
      },
    };
  },
  methods: {
    nextOnClick(){      
        this.$router.push({
            path:"/project/proposal/auto2c/Auto2cDrivingLicenseInfo",
            name:"Auto2cDrivingLicenseInfo"
        });
    },
    goto(){

    },  
    validateNumInput(value){ 
      var isCertification = Validate.validateIdNo(value);
      return {
        valid:  isCertification===true,
        msg: this.$t("input.validate")
      };       
    }

  },
  computed:{

  }
};
</script>

<style>

</style>

