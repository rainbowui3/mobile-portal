<template>
    <r-page>
        <r-body>
            <top :title="$t('businessPlan.title')" :showBack="true" />
            <plan :items="itemName" :contentItems="contentItems" />
        </r-body>
    </r-page>
</template>

<script>
import Plan from '../project/components/plan/Plan';
import '../../i18n/businessPlan';

export default {
    data() {
        return {
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

</style>
