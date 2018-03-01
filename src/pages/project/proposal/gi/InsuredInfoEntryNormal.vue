<template>
    <page>
        <top />
        <holder-info/>
        
    </page>
</template>

<script>
import {Page} from "rainbow-mobile-core";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import HolderInfo from "../../components/HolderInfo"

export default {
    components: {
        Top,
        Bottom,
        Page,
        HolderInfo,
    }
};
</script>

<style>

</style>
