<template>
    <r-page>
        <top :title="$t('businessConfirm.title')" :showBack="true" />
        <r-body>
            <r-card>
                <r-selector :title="$t('businessConfirm.name')" :options="options" :model="policy" value="index" @onChange="onChange"></r-selector>
            </r-card>
            <r-card>
                <div class="businessPolicy">
                    <span>应付金额 :</span> ¥ 38
                </div>
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="onClick">{{$t('businessConfirm.confirm')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import ProposalConfirm from '../../../components/ProposalConfirm';
import '../../../i18n/BusinessConfirm';
import {SessionContext} from 'rainbow-foundation-cache';
export default {
    components: {
        ProposalConfirm
    },
    data() {
        return {
            options: [{ key: '1', value: '暂无优惠' }],
            policy: {
                nullDate: null,
                index: '1'
            }
        };
    },
    methods: {
        onClick() {
            let route = JSON.parse(SessionContext.get('ROUTE_TYPE'));
            if (route && route.route4 && route.route4 != '') {
                this.$router.push({
                    path: '/issue/' + route.route4,
                    query: this.$route.query
                });
            }
        },
        onChange(val) {
            this.policy.effortDate = val;
        }
    }
};
</script>

<style scoped="businessConfirm">
.businessPolicy {
    color: rgba(255, 148, 20, 1);
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
}
.businessPolicy > span {
    font-size: 14px;
    color: #6b6b6b;
}
</style>

