<template>
    <page>
        <r-body>
            <top :title="$t('businessPlan.title')" :showBack="true" />
            <nav-tab />
            <bottom :index="3" />
        </r-body>
    </page>
</template>

<script>
import { Page, Card, RBody } from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import NavTab from '../project/components/nav/NavTab';
import '../../i18n/businessNavTab';
export default {
    components: {
        Bottom,
        Top,
        Page,
        Card,
        RBody,
        NavTab
    },
    data() {}
};
</script>

<style lang="less">

</style>
