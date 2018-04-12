<template>
    <page>
        <r-body>
            <top :title="$t('businessPlan.title')" :showBack="true" />
               <plan />
            </top>
        </r-body>
    </page>
</template>

<script>
import { Page, Card, RBody } from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import Plan from "../project/components/plan/Plan";
import "../../i18n/businessPlan";

export default {
    components: {
        Bottom,
        Top,
        Page,
        Card,
        RBody,
        Plan
    },
    data(){
    return {
           
        };
    }
};
</script>

<style lang="less">

</style>
