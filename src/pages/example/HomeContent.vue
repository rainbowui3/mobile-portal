<template>
    <page>
        <r-body>
            <top :title="$t('businessHome.home')" :showBack="true" />
            <show-one :show="show" />
            <show-one />
            <show-two />
            </top>
        </r-body>
    </page>
</template>

<script>
import { Page, Card, RBody } from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import ShowOne from "../project/components/businessHome/ShowOne";
import ShowTwo from "../project/components/businessHome/ShowTwo";
import "../../i18n/businessHome";

export default {
    components: {
        Bottom,
        Top,
        Page,
        Card,
        RBody,
        ShowOne,
        ShowTwo
    },
    data(){
    return {
            show: true,
           
        };
    }
};
</script>

<style lang="less">

</style>
