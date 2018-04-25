<template>
    <r-page>
        <top :title="$t('common.pay')" :showBack="true" />
        <r-body>
            <r-card>
                <div class="border">
                    <r-cell>
                        <div class="title">{{$t('autoPay.proposalNum')}}{{model.proposalNum}}{{$t('autoPay.content')}}</div>
                    </r-cell>
                    <r-cell type="row">
                        <r-cell :span="6">
                            <div>{{$t('autoPay.payNum')}}{{model.payNum}}</div>
                        </r-cell>
                        <r-cell>
                            <div>{{$t('autoPay.verificationCode')}}{{model.verificationCode}}</div>
                        </r-cell>
                    </r-cell>
                    <div class="image">
                        <r-image :list="model.images" />
                    </div>
                    <div class="button">
                        <r-cell>
                            <r-button :mini="true" type="primary">{{$t('autoPay.otherPay')}}</r-button>
                        </r-cell>
                    </div>
                </div>
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import QRCode from '../../../assets/guanfangweixin.jpg';
import '../../../i18n/autoPay';
export default {
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