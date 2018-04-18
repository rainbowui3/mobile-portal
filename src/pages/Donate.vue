<template>
  <r-page>
       <top :title="$t('donate.donate')" :showBack="true"/>
        <r-body>
            <r-card :imgSrc="teamPath">
                    <div class="card-padding">
                        <p style="font-size:14px;line-height:2.2;">eBaoTech GI PBU Rainbow Team 是一只有理想有追求的前端团队。秉持着匠心精神倾情打造一个好看又好用的移动端框架 Rainbow Mobile。如果你觉得我们的框架还不错可以赏我们一杯咖啡，我们会更佳愉快的开发更多更好用的移动端组件，并为您提供更加专业的服务。</p>
                        <p style="color:#999;font-size:12px;">向下滑动长按二维码有惊喜</p>
                    </div>
            </r-card>
            <r-card :imgSrc="weixinPath"/>
        </r-body>>
       <bottom :index="4"/>
  </r-page>
</template>

<script>
import team from '../assets/team.jpg';
import weixin from '../assets/weixin.png';
import '../i18n/donate';

export default {

  data() {
      return {
          teamPath: team,
          weixinPath: weixin
      };
  }
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