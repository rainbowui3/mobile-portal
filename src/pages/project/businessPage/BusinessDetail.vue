<template>
    <page>
        <top :title="$t('businessDetails.title')" :showBack="true" />
        <r-body>
            <img :src="image">
            <div>
                <divider>{{$t('businessDetails.details')}}</divider>
            </div>
            <card>
                <div class="detialsContent">
                    <img :src="iamgeOne" width=100%;>
                    <div class="detialsContentDetials">
                        <p>特省心：1次购买，全年无忧</p>
                        <p>特全面：适用于全球所有航班</p>
                        <p>特划算：一年保费约等于一碗面...</p>
                    </div>
                </div>
            </card>
            <div class="datailsLine">
                <divider>{{$t('businessDetails.plan')}}</divider>
            </div>
            <card>
                <plan :items="itemName" :contentItems="contentItems" />
                <div class="footer">
                    <proposal-clause-confirm :model="pageModel" />
                </div>
            </card>
            <div class="datailsLine">
                <divider>{{$t('businessDetails.supplier')}}</divider>
            </div>
            <card>
                <div class="planSupplier">
                    <img :src="supplier">
                </div>
            </card>

        </r-body>
        <tab-bar>
            <r-button type="primary">{{$t('businessDetails.confirm')}}</r-button>
        </tab-bar>
    </page>
</template>

<script>
import { Page, Card, RTable, RBody, Divider, TabBar, RButton} from 'rainbow-mobile-core';
import image from '../../../assets/u17.png';
import iamgeOne from '../../../assets/u183.png';
import Top from '../../../components/Top';
import Plan from '../components/plan/Plan';
import supplier from '../../../assets/u204.png';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';

import '../../../i18n/businessDetails';

export default {
    components: {
        Top,
        Page,
        Card,
        RTable,
        RBody,
        Divider,
        Plan,
        ProposalClauseConfirm,
        RButton,
        TabBar
    },
    data() {
        return {
            pageModel: {
                clauseConfirm: false,
                toastShow: false
            },
            image: image,
            iamgeOne: iamgeOne,
            supplier: supplier,
            itemName: [{ text: 'A计划' }, { text: 'B计划' }],
            contentItems: [
                {
                    content: {
                        title: '保障项目',
                        name: '全球航空意外身故及残疾',
                        limit: '保额额度',
                        data: '200万',
                        price: '108'
                    }
                },
                {
                    content: {
                        title: '保障项目B',
                        name: '全球航空意外身故及残疾B',
                        limit: '保额额度B',
                        data: '500万',
                        price: '90'
                    }
                }
            ]
        };
    }
};
</script>

<style lang="less">
.detialsContent {
    width: 75%;
    margin: 0 auto;
    padding: 10px 0;
}
.detialsContentDetials {
    text-align: left;
    margin: 10px 0;
}
.detialsContentDetials > p {
    margin: 10px 0;
}
.planSupplier {
    padding: 20px 0;
    text-align: center;
}
.datailsLine {
    margin-top: 5px;
}
.weui-icon-circle {
    font-size: 18px;
    line-height: 2;
    color: #c9c9c9;
}
</style>

