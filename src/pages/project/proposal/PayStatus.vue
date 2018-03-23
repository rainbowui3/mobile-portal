<template>
  <page>
    <top :title="$t('project.jtyw')"/>
    <r-body>
      <card>
        <div>
          <h4>{{$t('payStatus.success')}}</h4>
        </div>
        <previewer :title="$t('payStatus.payment')" :value="`￥99 .00`" :data="list2" :param="{'key':'show9'}" :buttons="buttons1" />
      </card>
    </r-body>
  </page>
</template>

<script>
import { Page, Card, Popup, RBody } from "rainbow-mobile-core";
import { Previewer } from "rainbow-mobile-previewer";
import Top from "@/components/Top";
import "../../../i18n/payStatus";
import "../../../i18n/project";
export default {
  components: {
    Page,
    Card,
    Top,
    Previewer,
    Popup,
    RBody
  },
  data() {
    return {
      classStatus: true,
      pay: 50,
      policyNum: "TJAB34578904567899",
      money: 99.0,
      policy: {
        show: false
      }
    };
  },
  methods: {
    onClick: function() {
      this.policy.show = true;
    }
  },
  computed: {
    buttons1() {
      return [
        {
          style: "default",
          text: this.$t('payStatus.again'),
          link: "/project/proposal/ah/productInfoEntryNormal"
        }
      ];
    },
    list2() {
      return [
        {
          label: this.$t('payStatus.commodity'),
          value: "xxxxxxxx险"
        },
        {
          label: this.$t('payStatus.policyNo'),
          value: "TJAB3457890457899"
        },{
          value: this.$t('payStatus.note')
        }
        // {
        //   value: this.$t(
        //     "电子保单稍后将发送到您提供的电子邮箱，您也可以在中国大地保险网站www.95590.cn下载您的保单"
        //   )
        // }
      ];
    }
  }
};
</script>

<style>
.line1 {
  color: #6495ed;
}
.line2 {
  color: #ff0000;
}
.fontColor{
  color: #999999;
}
</style>
