<template>
    <page>
        <top/>
        <card>
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
        </card>
    </page>
</template>

<script>
import { Page, Card } from "rainbow-mobile-core";
import Top from "@/components/Top";
export default {
  components: {
    Page,
    Card,
    Top
  },
  data() {
    return {
      pay: 50,
      policyNum: "TJAB34578904567899"
    };
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
