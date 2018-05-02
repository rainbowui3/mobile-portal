<template>   
    <r-card :imgSrc="productImgSrc">
        <!-- <div class="card-padding">
            <p style="font-size:14px;line-height:2.2;text-align:left">{{productName}}</p>
        </div> -->
        <div class="card-padding">
            <P style="font-size:14px;line-height:2.2;text-align:left">{{productDes}}</P>
        </div>
    </r-card>    
</template>

<script>
export default {
  props: {
    productImgSrc: String,
    productDes: String
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

