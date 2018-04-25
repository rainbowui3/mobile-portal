<template>
    <r-page>
        <top :showBack="true" :title="$t('autoSendUnderwriting.send')" />
        <r-body>
            <r-card class="cardCustom">
                <r-row class="div" :title="model.content" :model="model" value="value" />
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import '../../../../../i18n/autoSendUnderwriting';
export default {
  data() {
    return {
      proposalNum: 'xxxxxxxxxxxx',
      model: {
        content: '您的保单号为:xxxxxxxxxxxxxxx,已为您发送人工核保'
      }
    };
  }
};
</script>

<style>
.cardCustom {
  margin-left: 10px;
  margin-right: 10px;
}
/* .div{
    width: 100%;
    height: 200px;
    line-height: 150px;
    padding-left: 10px;
    text-align: left;   
} */
.div {
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
