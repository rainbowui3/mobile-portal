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
            <r-button type="primary" :onClick="onClick">{{$t('businessFillIn.confirm')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import HolderInfo from '../components/HolderInfo';
import InsuredInfo from '../components/InsuredInfo';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import '../../../i18n/businessFillIn';
export default {
    components: {
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
    },
    methods: {
        onClick: function() {
            let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
            if (route && route.route2 && route.route2 != '') {
                this.$router.push({
                    path: '/bind/' + route.route3,
                    query: this.$route.query
                });
            }
        }
    }
};
</script>

<style scoped="businessFillIn">
/* .weui-icon-circle {
    font-size: 18px;
    line-height: 2;
    color: #c9c9c9;
} */
</style>

