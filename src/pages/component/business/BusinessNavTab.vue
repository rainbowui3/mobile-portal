<template>
    <r-page>
        <r-body>
            <top :title="$t('businessNavTab.title')" :showBack="true" />
            <nav-tab :listTab="listTab" :contentItems="contentItems">
            </nav-tab>

            <bottom :index="3" />
        </r-body>
    </r-page>
</template>

<script>
import NavTab from '../../../components/nav/NavTab';
import '../../../i18n/businessNavTab';
export default {
    components: {
        NavTab
    },
    data() {
        return {
            listTab: [
                { text: '意外保险' },
                { text: '健康保险' }
            ],
            contentItems: [
                {
                    content: {
                        title: '类别',
                        content1: '意外身故',
                        content2: '意外医疗'
                    }
                },
                {
                    content: {
                        title: '保险期限',
                        content1: '短期',
                        content2: '定期'
                    }
                }
            ]
        };
    }
};
</script>

<style lang="less">

</style>
