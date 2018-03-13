<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <r-body>
      <card>
        <div>
          <h4>{{$t('保费支付成功，您的保单出单！')}}</h4>
        </div>
        <previewer :title="$t('付款金额')" :value="`￥99 .00`" :data="list2" :param="{'key':'show9'}" :buttons="buttons1" />
        <div>
          <h5 :class="{fontColor:classStatus}">{{$t('电子保单稍后将发送到您提供的电子邮箱，您也可以在中国大地保险网站www.95590.cn下载您的保单')}}</h5>
        </div>
      </card>
    </r-body>
  </page>
</template>

<script>
import { Page, Card, Popup, RBody } from "rainbow-mobile-core";
import { Previewer } from "rainbow-mobile-previewer";
import Top from "@/components/Top";
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
          text: this.$t("继续投保"),
          link: "/project/proposal/gi/productInfoEntryNormal"
        }
      ];
    },
    list2() {
      return [
        {
          label: this.$t("商品"),
          value: this.$t("xxxxxxxx险")
        },
        {
          label: this.$t("保单号"),
          value: this.$t("TJAB3457890457899")
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
