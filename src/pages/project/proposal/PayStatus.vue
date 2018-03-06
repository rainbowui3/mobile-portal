<template>
  <page>
    <top :title="$t('project.jtyw')" :showBack="true" />
    <!-- <card>
      <div>
        <h2 v-bind:class="'line1'">支付成功,您的保单已出单</h2>
        <br/>
        <h4>支付金额：
          <span :class="'line2'">{{pay}}元</span>
        </h4>
        <h4>保单号： {{policyNum}}</h4>
        <br/>
        <br/>
        <h5>电子保单稍后将发送到您的邮箱，您也可到中国大地保险网站www.95590.cn下载您的点在保单</h5>
      </div>
    </card> -->
    <card>
      <previewer :title="$t('付款金额')" :value="`￥99 .00`" :data="list2" :param="{'key':'show9'}" :buttons="buttons1"/>
    </card>
  </page>
</template>

<script>
import { Page, Card, Popup } from "rainbow-mobile-core";
import { Previewer } from "rainbow-mobile-previewer";
import Top from "@/components/Top";
export default {
  components: {
    Page,
    Card,
    Top,
    Previewer,
    Popup
  },
  data() {
    return {
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
          text: this.$t("回到首页"),
          link:"/"
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
        },
        {
          label: this.$t("备注"),
          value: this.$t(
            "电子保单稍后将发送到您提供的电子邮箱，您也可以在中国大地保险网站www.95590.cn下载您的保单"
          )
        }
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
</style>
