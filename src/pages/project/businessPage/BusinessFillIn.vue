<template>
    <page>
        <top :title="$t('businessFillIn.title')" :showBack="true" />
        <r-body>
            <div class="datailsLine">
                <divider>{{$t('businessFillIn.hoderInfo')}}</divider>
            </div>
            <card>
                <!-- <holder-info /> -->
            </card>
            <div class="datailsLine">
                <divider>{{$t('businessFillIn.insuredInfo')}}</divider>
            </div>
            <card>
                <!-- <insured-info /> -->
            </card>
        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('businessFillIn.confirm')}}</r-button>
        </tab-bar>
    </page>
</template>

<script>
import {
    Page,
    Card,
    RBody,
    Divider,
    TabBar,
    RButton
} from "rainbow-mobile-core";
import Top from "../../../components/Top";
import HoderInfo from "../components/HolderInfo";
import Insuredinfo from "../components/Insuredinfo";
import "../../../i18n/businessFillIn";

export default {
    components: {
        Top,
        Page,
        Card,
        RBody,
        Divider,
        RButton,
        TabBar,
        HoderInfo,
        Insuredinfo
    },
    data() {
        return {
            pageModel: {
                clauseConfirm: false,
                toastShow: false
            }
        };
    }
};
</script>

<style lang="less">
.weui-icon-circle {
    font-size: 18px;
    line-height: 2;
    color: #c9c9c9;
}
</style>

