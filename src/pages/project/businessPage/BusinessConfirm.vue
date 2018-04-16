<template>
    <page>
        <top :title="$t('businessConfirm.title')" :showBack="true" />
        <r-body>
            <card>
                <selector :title="$t('businessConfirm.name')" :options="options" :model="policy" value="index" @onChange="onChange"></selector>
            </card>
            <card>
                <div class="businessPolicy">
                    <span>应付金额 :</span> ¥ 38
                </div>
            </card>
        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('businessConfirm.confirm')}}</r-button>
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
    RButton,
    Selector
} from "rainbow-mobile-core";
import Top from "../../../components/Top";
import ProposalConfirm from "../components/ProposalConfirm";
import "../../../i18n/BusinessConfirm";
export default {
    components: {
        Top,
        Page,
        Card,
        RBody,
        Divider,
        RButton,
        TabBar,
        ProposalConfirm,
        Selector
    },
    data() {
        return {
            options: [{ key: "1", value: "暂无优惠" }],
            policy: {
                nullDate: null,
                index: "1"
            }
        };
    },
    methods: {
        onChange(val) {
            this.policy.effortDate = val;
        }
    }
};
</script>

<style lang="less">
.businessPolicy {
    color: rgba(255, 148, 20, 1);
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    padding:0 10px;
}
.businessPolicy > span {
    font-size: 14px;
    color: #6b6b6b;
}
</style>

