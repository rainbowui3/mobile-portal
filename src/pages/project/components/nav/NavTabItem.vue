<template>
    <div>
        <slot />
    </div>
</template>
<script>
export default {
    props: ['cuindex'],
    name: 'swiper-item',
    mounted() {
        this.$nextTick(() => {
            this.$parent.rerender();
        });
    },
    beforeDestroy() {
        const $parent = this.$parent;
        this.$nextTick(() => {
            $parent.rerender();
        });
    }
};
</script>