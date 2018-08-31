<template>
    <r-page>
        <top :title="$t('mine.title')" :showBack="true" />
        <r-body>
           
            <r-card>
                <r-selector :title="$t('mine.myPolicy')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('mine.myQuotationSheet')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('mine.theRenewalpolicy')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('mine.myClaims')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
            </r-card>
        </r-body>
        <bottom :index="4"/>
    </r-page>
</template>

<script>
import Mine from '../components/mine/Mine';
import '../i18n/mine';
export default {
    components: {
        Mine
    },
    data() {
        return {
            options: [
                { key: '100000', value: '' },
                { key: '1000000', value: '100万' },
                { key: '10000000', value: '1000万' }
            ],
            policy: {
                nullDate: null,
                index: '1000000',
                index1: '100000',
                index2: '10000000'
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

<style >

</style>