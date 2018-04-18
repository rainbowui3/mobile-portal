<template>
    <r-page>
        <top :title="$t('businessMine.title')" :showBack="true" />
        <r-body>
            <div class="sign">
                <Mine />
            </div>
            <r-card>
                <r-selector :title="$t('businessMine.myPolicy')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('businessMine.myQuotationSheet')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('businessMine.theRenewalpolicy')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
                <r-selector :title="$t('businessMine.myClaims')" :options="options" :model="policy" value="index1" @onChange="onChange">
                </r-selector>
            </r-card>
        </r-body>
        <bottom :index="1" />
    </r-page>
</template>

<script>
import Mine from '../components/mine/Mine';
import '../../../i18n/businessMine';
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