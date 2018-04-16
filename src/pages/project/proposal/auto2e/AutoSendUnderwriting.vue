<template>
    <page>
        <top :showBack="true" :title="$t('autoSendUnderwriting.send')" />
        <r-body>
            <card class="cardCustom">
                <row class="div" :title="model.content" :model="model" value="value" />
            </card>
        </r-body>
    </page>
</template>

<script>
import { Page, Card, RBody, Row } from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import '../../../../i18n/autoSendUnderwriting';
export default {
  components: { Page, Card, RBody, Top, Row },
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
