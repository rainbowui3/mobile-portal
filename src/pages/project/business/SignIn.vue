<template>
  <div class="signInContent">
    <span class="siginFoot">注册</span>
    <div class="siginImg">
      <r-image :list="images"/>
    </div>

    <div>
      <r-input  :model="policy" value="valueUsername" :placeholder="$t('businessSignIn.Username')">
          <span class="fa fa-user"/>
      </r-input>
      <r-input  :model="policy" value="valuePassword" :placeholder="$t('businessSignIn.Password')" :isPassword="true" :validate="false">
          <span class="fa fa-eye-slash"/>
      </r-input>
    </div>

    <div class="contentInput">
      <r-button type="primary">{{$t('businessSignIn.login')}}</r-button>
    </div>
    <span class="forget">忘记密码 ? </span>
                

    <div class="other">
       <divider>{{$t('businessSignIn.way')}}</divider>
        <grid :cols="3" :data="gridItems"/>
    </div>

  </div>
</template>

<script>
import { Card, RImage, RInput, RButton, Box, Grid , Divider} from "rainbow-mobile-core";
import Logo from "../../../assets/logo.png";
import "../../../i18n/businessSignIn";

export default {
  components: {
    RImage,
    Card,
    RInput,
    RButton,
    Box,
    Grid,
    Divider
  },
  data() {
    return {
      images: [{ class: "image", src: Logo }],
      policy: {
        valueUsername: "",
        valuePassword: ""
      }
    };
  },
  methods: {},
  computed: {
    gridItems() {
      return [
        { icon: "fa fa-address-card"},
        { icon: "fa fa-address-card"},
        { icon: "fa fa-address-card"}
      ];
    },
  }
};
</script>
<style>
.other{
  margin-top: 40px;
}
.siginFoot {
  margin: 10px 10px 0 0;
  display: inline-block;
  display: flex;
  justify-content: flex-end;
  color: #1b1b1b;
  font-size: 18px;
}
.siginImg {
  width: 50%;
  margin: 50px auto 20px auto;
}
.signInContent {
  margin: 0 5px;
}
.contentInput {
  margin: 20px auto 10px auto;
}
.forget {
  width: 100%;
  display: inline-block;
  text-align: center;
}
</style>
