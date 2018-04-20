<template>
    <r-page>
        <r-body>
            <top :title="$t('businessHome.home')" :showBack="true" />
            <show-one :show="show" />
            <show-one />
            <show-two />
        </r-body>
    </r-page>
</template>

<script>
import ShowOne from '../project/components/businessHome/ShowOne';
import ShowTwo from '../project/components/businessHome/ShowTwo';
import '../../i18n/businessHome';

export default {
    components: {
        ShowOne,
        ShowTwo
    },
    data() {
    return {
            show: true

        };
    }
};
</script>

<style lang="less">

</style>
