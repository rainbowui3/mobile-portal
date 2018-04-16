<template>
  <page>
       <top :title="$t('business.holderInfo')" :showBack="true"/>
       <r-body>
        <card>
          <holder-info  :model="policy.holderInfo"/>
       </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Card, RTable, RBody } from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import HolderInfo from "../project/components/HolderInfo";
import "../../i18n/business";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RTable,
    HolderInfo,
    RBody
  },
 
  data() {
    return {
      policy: {
        holderInfo: {
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        insuredInfo: {
          relationToHolder: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder: "10000",
          relationToMainInsured: "本人",
          name: "王小明",
          certificateId: "身份证",
          certificateNum: "295792200001018271",
          birthdate: "2000-01-01",
          mobileNum: "18398768724",
          email: "wangxm@outlook.com"
        }
      }
    };
  },
};
</script>

<style lang="less">

</style>

