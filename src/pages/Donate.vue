<template>
  <page>
       <top :title="$t('home.donate')" :showBack="true"/>
        <card :imgSrc="teamPath">
                <div class="card-padding">
                    <p style="font-size:14px;line-height:2.2;">eBaoTech GI PBU Rainbow Team 是一只有理想有追求的前端团队。秉持着匠心精神倾情打造一个好看又好用的移动端框架 Rainbow Mobile。如果你觉得我们的框架还不错可以赏我们一杯咖啡，我们会更佳愉快的开发更多更好用的移动端组件，并为您提供更加专业的服务。</p>
                    <p style="color:#999;font-size:12px;">向下滑动长按二维码有惊喜</p>
                </div>
        </card>
         <card :imgSrc="weixinPath">
               
        </card>
       <bottom :index="4"/>
  </page>
</template>

<script>
import {Page,Card} from 'rainbow-mobile-core';
import Bottom from '../components/Bottom';
import Top from '../components/Top';
import team from "../assets/team.jpg";
import weixin from "../assets/weixin.png";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card
  },
  data(){
      return {
          teamPath:team,
          weixinPath:weixin
      }
  },
};
</script>

<style>
.card-padding {
  padding: 15px;
  text-align: left;
}
.card-padding p:last-of-type{
  text-align: right;
}
.weui-panel__hd {
    text-align: left;
}
</style>