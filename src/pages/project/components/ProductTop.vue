<template>   
    <card :imgSrc="path">
        <div class="card-padding">
            <p style="font-size:14px;line-height:2.2;text-align:left">{{productName}}</p>
        </div>
        <div class="card-padding">
            <P style="font-size:14px;line-height:2.2;text-align:left">{{productDes}}</P>
        </div>
    </card>    
</template>

<script>
import {Card} from 'rainbow-mobile-core';
import Jtgj from '../../../assets/jtgj.jpg';
export default {
  components: { 
    Card
  },
  data(){
    return{
      path:Jtgj,
      productName:"交通工具意外险",
      productDes:"描述性文字xxxxxxxxxxxxx"
    };
  }
  
};
</script>

<style>
.card-padding {
  padding: 15px;
}

</style>
<i18n>
	"ProductName":
  en: insurance
  zh：xxxxxx 险
</i18n>

