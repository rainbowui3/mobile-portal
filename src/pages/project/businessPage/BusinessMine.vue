<template>
    <page>
        <r-body>
            <div class="sign">
                <Mine />
            </div>
        </r-body>
        <bottom :index="1" />
    </page>
</template>

<script>
import { Page, Card, RBody } from 'rainbow-mobile-core';
import Bottom from '../../../components/Bottom';
import Mine from '../components/mine/Mine';
import '../../../i18n/businessMine';
export default {
    components: {
        Page,
        RBody,
        Card,
        Mine,
        Bottom
    },
    data() {
        return {};
    }
};
</script>

<style >

</style>