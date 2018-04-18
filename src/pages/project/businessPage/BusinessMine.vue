<template>
    <page>
        <r-body>
            <div class="sign">
                <Mine />
            </div>
            <card>
                <selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" @onChange="onChange"></selector>
                <selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" @onChange="onChange"></selector>
                <selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" @onChange="onChange"></selector>
                <selector :header="$t('selector.sum')" :title="$t('selector.sum')" :options="options" :model="policy" value="index1" @onChange="onChange"></selector>
            </card>
        </r-body>
        <bottom :index="1" />
    </page>
</template>

<script>
import { Page, Card, RBody, Selector } from 'rainbow-mobile-core';
import Bottom from '../../../components/Bottom';
import Mine from '../components/mine/Mine';
import '../../../i18n/businessMine';
export default {
    components: {
        Page,
        RBody,
        Card,
        Mine,
        Bottom,
        Selector
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