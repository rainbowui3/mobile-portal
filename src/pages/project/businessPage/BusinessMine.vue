<template>
    <r-page>
        <r-body>
            <div class="sign">
                <Mine />
            </div>
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
        return {};
    }
};
</script>

<style >

</style>