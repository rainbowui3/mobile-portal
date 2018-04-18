<template>
  <div class="signInContent">
    <div class="siginImg">
      <img :src="Logo1" />
      <img :src="Logo2" />
      <img :src="Logo3" />
    </div>
    <div class="rainbow">Rainbow</div>

    <div>
      <r-input :model="policy" value="valueUsername" :placeholder="$t('businessSignIn.Username')">
        <span class="fa fa-user" />
      </r-input>
      <r-input :model="policy" value="valuePassword" :placeholder="$t('businessSignIn.Password')" :isPassword="true" :validate="false">
        <span class="fa fa-eye-slash" />
      </r-input>
    </div>

    <div class="contentInput">
      <r-button type="primary" :onClick="_onClick">{{$t('businessSignIn.login')}}</r-button>
    </div>
    <span class="forget">忘记密码 ? | 注册</span>

    <div class="other">
      <r-divider>{{$t('businessSignIn.way')}}</r-divider>
      <r-grid :cols="3" :data="gridItems" />
    </div>

  </div>
</template>

<script>
import Logo1 from '../../../assets/u505.png';
import Logo2 from '../../../assets/u507.png';
import Logo3 from '../../../assets/u509.png';
import WeChat from '../../../assets/weChat.png';
import Webo from '../../../assets/webo.png';
import F from '../../../assets/f.png';
import '../../../i18n/businessSignIn';

export default {
    props: {
       onClick: Function
    },
    data() {
        return {
            images: [
                { class: 'image', src: Logo1 },
                { class: 'image', src: Logo2 },
                { class: 'image', src: Logo3 }
            ],
            policy: {
                valueUsername: '',
                valuePassword: ''
            },
            Logo1: Logo1,
            Logo2: Logo2,
            Logo3: Logo3
        };
    },
    methods: {
        _onClick: function(event) {
            /* eslint-disable */

            this.onClick ? this.onClick(event) : () => {};

            /* eslint-disable */
        }
    },
    computed: {
        gridItems() {
            return [{ img: WeChat }, { img: Webo }, { img: F }];
        }
    }
};
</script>
<style>
.other {
    margin-top: 40px;
}
.siginImg {
    width: 80%;
    margin: 20px auto 0px auto;
    height: 90px;
    position: relative;
}
.siginImg > :nth-child(1) {
    position: absolute;
    left: 85px;
}
.siginImg > :nth-child(2) {
    position: absolute;
    left: 95px;
    top: 8px;
}
.siginImg > :nth-child(3) {
    position: absolute;
    left: 105px;
    top: 8px;
}
.rainbow {
    font-size: 26px;
    width: 100px;
    text-align: center;
    margin: 0 auto 60px auto;
}
.signInContent {
    margin: 0 5px;
}
.contentInput {
    margin: 20px auto 10px auto;
}

.contentInput > .weui-btn {
    background: linear-gradient(
        90deg,
        rgba(255, 204, 0, 1) 0%,
        rgba(255, 204, 0, 1) 42%,
        rgba(245, 130, 32, 1) 100%,
        rgba(245, 130, 32, 1) 100%
    );
}
.forget {
    width: 100%;
    display: inline-block;
    text-align: center;
}
.other > :nth-child(2) > .weui-grids {
    background-color: #eee;
}
.other > :nth-child(2) > .weui-grids::before,
.other > :nth-child(2) > .weui-grids::after,
.other > :nth-child(2) > .weui-grids > a::after,
.other > :nth-child(2) > .weui-grids > a::before {
    border: 0;
}
</style>
