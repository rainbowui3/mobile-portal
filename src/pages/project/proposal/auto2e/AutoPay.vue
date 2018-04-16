<template>
    <page>
        <top :title="$t('common.pay')" :showBack="true" />
        <r-body>
            <card>
                <div class="border">
                    <cell>
                        <div class="title">{{$t('autoPay.proposalNum')}}{{model.proposalNum}}{{$t('autoPay.content')}}</div>
                    </cell>
                    <cell type="row">
                        <cell :span="6">
                            <div>{{$t('autoPay.payNum')}}{{model.payNum}}</div>
                        </cell>
                        <cell>
                            <div>{{$t('autoPay.verificationCode')}}{{model.verificationCode}}</div>
                        </cell>
                    </cell>
                    <div class="image">
                        <r-image :list="model.images" />
                    </div>
                    <div class="button">
                        <cell>
                            <r-button :mini="true" type="primary">{{$t('autoPay.otherPay')}}</r-button>
                        </cell>
                    </div>
                </div>
            </card>
        </r-body>
    </page>
</template>

<script>
import {
  Page,
  RBody,
  Card,
  TabBar,
  Cell,
  RImage,
  RButton
} from 'rainbow-mobile-core';
import Top from '../../../../components/Top';
import QRCode from '../../../../assets/guanfangweixin.jpg';
import '../../../../i18n/autoPay';
export default {
  components: { Page, RBody, Top, Card, TabBar, Cell, RImage, RButton },
  data() {
    return {
      model: {
        proposalNum: 'xxxxxxxxxxx',
        payNum: 'xxxxxxxxx',
        verificationCode: 'xxxxxxx',
        images: [{ class: 'image', src: QRCode }]
      }
    };
  }
};
</script>

<style>
.image {
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
}
.button {
  text-align: right;
}
.border{
    margin: 10px;
}
</style>