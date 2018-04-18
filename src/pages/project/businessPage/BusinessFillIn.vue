<template>
    <r-page>
        <top :title="$t('businessFillIn.title')" :showBack="true" />
        <r-body>
            <div class="datailsLine">
                <r-divider>{{$t('businessFillIn.holderInfo')}}</r-divider>
            </div>
            <r-card>
                <holder-info :model="holder.holderInfo" />
                 <div class="footer">
                    <proposal-clause-confirm :model="pageModel" />
                </div>
            </r-card>
            <div class="datailsLine">
                <r-divider>{{$t('businessFillIn.insuredInfo')}}</r-divider>
            </div>
            <r-card>
                <insured-info v-bind:model="insured.insuredInfo" />
                 <div class="footer">
                    <proposal-clause-confirm :model="pageModel" />
                </div>
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary">{{$t('businessFillIn.confirm')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import {
    Page,
    Card,
    RBody,
    Divider,
    TabBar,
    RButton
} from 'rainbow-mobile-core';
import Top from '../../../components/Top';
import HolderInfo from '../components/HolderInfo';
import InsuredInfo from '../components/InsuredInfo';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import '../../../i18n/businessFillIn';
export default {
    components: {
        Top,
        Page,
        Card,
        RBody,
        Divider,
        RButton,
        TabBar,
        HolderInfo,
        InsuredInfo,
        ProposalClauseConfirm
    },
    data() {
        return {
            pageModel: {
                clauseConfirm: false,
                toastShow: false
            },
            holder: {
                holderInfo: {
                    name: 'Emily',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                },
                insuredInfo: {
                    relationToHolder: '本人',
                    name: '王小明',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                },
                dubsidiaryInsuranceInfo: {
                    relationToHolder: '10000',
                    relationToMainInsured: '本人',
                    name: '王小明',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                }
            },
            insured: {
                holderInfo: {
                    name: '王小明',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                },
                insuredInfo: {
                    relationToHolder: '本人',
                    name: '王小明',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                },
                dubsidiaryInsuranceInfo: {
                    relationToHolder: '10000',
                    relationToMainInsured: '本人',
                    name: '王小明',
                    certificateId: '身份证',
                    certificateNum: '295792200001018271',
                    birthdate: '2000-01-01',
                    mobileNum: '18398768724',
                    email: 'wangxm@outlook.com'
                }
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

