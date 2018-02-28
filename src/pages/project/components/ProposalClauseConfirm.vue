// 投保条款确认组件
<template>
    <card>
        <cell type="row">
            <cell :span="1">
                <div class="proposalClauseConfirmRaido">
                    <checker :model="proposalClauseConfirm" value="value" type="icon" :onChange="onChange" />
                </div>
            </cell>
            <cell>
                <box :padding="padding">
                    <r-button :mini="true" v-for="(item, idx) in items" :key="idx">{{item.clauseName}}</r-button>
                </box>
            </cell>
        </cell>
    </card>
</template>
<script>
import { RButton, Cell, Card, Checker, Box } from "rainbow-mobile-core";
export default {
    components: {
        Checker,
        Card,
        Cell,
        RButton,
        Box
    },
    data: function() {
        return {
            padding:"10px 10px",
            items:[
                {clauseName:"XXX条约"},
                {clauseName:"XXX合规"},
                {clauseName:"XXX规章"},
                {clauseName:"XXX制度"},
                {clauseName:"XXX文件"},
            ],
            proposalClauseConfirm: {
                value: false
            },
        };
    },
    methods: {
        onChange() {
            console.log("onRadioChange:");
        }
    },
    computed: {
    }
};
</script>
<style>
.proposalClauseConfirmRaido {
    text-align: left;
}
</style>
<i18n>

</i18n>