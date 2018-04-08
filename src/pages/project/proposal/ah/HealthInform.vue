<template>
  <page>
    <top :showBack="true" :title="$t('healthInform.title')" />
    <r-body>
      <card>
        <tree-test :dataList="dataList" />
      </card>
    </r-body>
    <tab-bar>
      <r-button type="primary">{{$t('common.confirm')}}</r-button>
    </tab-bar>
  </page>
</template>

<script>
import {
  Page,
  Card,
  TabBar,
  RSwitch,
  RBody,
  RButton
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import TreeTest from "../../components/TreeTest";
import "../../../../i18n/healthInform";
export default {
  components: { Page, Card, TabBar, RSwitch, RBody, Top, RButton, TreeTest },
  data() {
    return {
      dataList: [
        {
          name:
            "HI1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;",
          selected: false,
          hasChild: false,
          child: {}
        },
        {
          name: "HI2健康告知",
          selected: false,
          hasChild: true,
          child: [
            {
              name:
                "HI2-1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;",
              selected: false,
              hasChild: false
            },
            { name: "HI2-2健康告知", selected: false, hasChild: false }
          ]
        },
        {
          name: "HI3健康告知",
          selected: false,
          hasChild: true,
          child: [
            {
              name: "HI3-1健康告知",
              selected: false,
              hasChild: true,
              child: [
                {
                  name:
                    "HI3-1-1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;",
                  selected: false,
                  hasChild: false
                },
                { name: "HI3-1-2健康告知", selected: false, hasChild: false }
              ]
            },
            { name: "HI3-2健康告知", selected: false, hasChild: false }
          ]
        }
      ]
    };
  }
};
</script>

<style>

</style>
