<template>
    <r-page>
        <top :title="$t('businessCategory.title')" :showBack="true" />
        <r-body>
            <div class="category">
                <r-tab :tabItems="swTabItems" />
                <r-swiper :model="index" :height="height">
                    <r-swiper-item>
                        <r-nav-tab :listTab="listTab" :contentItems="contentItems" />
                    </r-swiper-item>
                    <r-swiper-item>
                        ...
                    </r-swiper-item>

                </r-swiper>
            </div>
        </r-body>
        <r-tab-bar>
            <r-button type="default">{{$t('businessCategory.concel')}}</r-button>
            <r-button type="primary">{{$t('businessCategory.confirm')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import NavTab from '../components/nav/NavTab';

import '../../../i18n/businessCategory';
export default {
    components: {
        NavTab
    },
    data() {
        return {
            height: '570px',
            index: 0,
            listTab: [{ text: '意外保险' }, { text: '健康保险' }],
            contentItems: [
                {
                    content: {
                        title: '类别',
                        content1: '意外身故',
                        content2: '意外医疗'
                    }
                },
                {
                    content: {
                        title: '保险期限',
                        content1: '短期',
                        content2: '定期'
                    }
                }
            ]
        };
    },
    computed: {
        swTabItems() {
            return [
                {
                    selected: true,
                    showdot: false,
                    disabled: false,
                    badge: '',
                    text: this.$t('businessCategory.one')
                },
                {
                    selected: false,
                    showdot: true,
                    disabled: false,
                    text: this.$t('businessCategory.two')
                }
            ];
        }
    }
};
</script>

<style >
.category > div > .vux-tab-warp {
    margin: 10px 10px 10px 10px;
    padding-top: 28px;
}
.vux-tab-item,
.vux-tab-container,
.vux-tab {
    height: 28px !important;
    line-height: 28px !important;
}
.vux-tab-item {
    color: #fac246 !important;
}
.vux-tab-selected {
    background: linear-gradient(
        180deg,
        rgba(250, 194, 70, 1) 0%,
        rgba(250, 194, 70, 1) 0%,
        rgba(255, 148, 20, 1) 100%,
        rgba(255, 148, 20, 1) 100%
    ) !important;
    color: #fff !important;
    border: none !important;
}
.vux-tab-container {
    border: 2px solid rgba(253, 171, 45, 1) !important;
}
.vux-tab-ink-bar,
.vux-tab-ink-bar-transition-backward {
    height: 0 !important;
    background-color: rgb(77, 147, 228);
}
.weui-btn + .weui-btn {
    margin-top: 0px;
}
</style>