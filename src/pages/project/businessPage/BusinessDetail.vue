<template>
    <r-page>
        <top :title="$t('businessDetails.title')" :showBack="true" />
        <r-body>
            <img :src="image">
            <div>
                <r-divider>{{$t('businessDetails.details')}}</r-divider>
            </div>
            <r-card>
                <div class="detialsContent">
                    <img :src="iamgeOne" width=100%;>
                    <div class="detialsContentDetials">
                        <p>特省心：1次购买，全年无忧</p>
                        <p>特全面：适用于全球所有航班</p>
                        <p>特划算：一年保费约等于一碗面...</p>
                    </div>
                </div>
            </r-card>
            <div class="datailsLine">
                <r-divider>{{$t('businessDetails.plan')}}</r-divider>
            </div>
            <r-card>
                <plan :items="itemName" :contentItems="contentItems" />
                <div class="footer">
                    <proposal-clause-confirm :model="pageModel" />
                </div>
            </r-card>
            <div class="datailsLine">
                <r-divider>{{$t('businessDetails.supplier')}}</r-divider>
            </div>
            <r-card>
                <div class="planSupplier">
                    <img :src="supplier">
                </div>
            </r-card>

        </r-body>
        <r-tab-bar>
            <r-button type="primary">{{$t('businessDetails.confirm')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import image from '../../../assets/u17.png';
import iamgeOne from '../../../assets/u183.png';
import Plan from '../components/plan/Plan';
import supplier from '../../../assets/u204.png';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';

import '../../../i18n/businessDetails';

export default {
    components: {
        Plan,
        ProposalClauseConfirm,
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

