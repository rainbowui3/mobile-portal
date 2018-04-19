<template>
    <r-page>
        <r-body>
            <top :title="$t('businessHome.home')" :showBack="true" />
            <r-tab :tabItems="swTabItems" />
            <r-swiper :model="index" :height="height">
                <r-swiper-item>
                    <!--<div class="line">
                        <r-divider>{{$t('businessHome.product')}}</r-divider>
                    </div>-->
                    <show-one :show="show" :showOne="showOne" :img="img" :onClick='goToUrl' />
                    <div class="modal">
                        <show-one :showOne="showOne" :img="img" :onClick='goToUrl' />
                    </div>
                    <div class="line">
                        <r-divider>{{$t('businessHome.selectProduct')}}</r-divider>
                    </div>
                    <div class="modal">
                        <show-two :showTwo="showTwo" :picture="picture" />
                    </div>
                    <div class="modal">
                        <show-two :showTwo="showTwo" :picture="picture" />
                    </div>
                    <div class="modal">
                        <show-two :showTwo="showTwo" :picture="picture" />
                    </div>
                    <div class="end">没有更多了</div>
                </r-swiper-item>
                <r-swiper-item>
                </r-swiper-item>
                <r-swiper-item>
                </r-swiper-item>
            </r-swiper>
            <bottom :index="1" />
        </r-body>
    </r-page>
</template>

<script>
import ShowOne from '../components/businessHome/ShowOne';
import ShowTwo from '../components/businessHome/ShowTwo';
import banner from '../../../assets/u17.png';
import pacture from '../../../assets/u92.png';

import '../../../i18n/businessHome';

export default {
    components: {
        ShowOne,
        ShowTwo
    },
    data() {
        return {
            showOne: {
                name: '空中飞人',
                title: '航空意外年度险',
                content: '乘坐飞机造成的意外伤害',
                validity: '全年有效',
                price: '38'
            },
            showTwo: {
                name: '驴友旅行意外伤害保险',
                title: '为专业驴友们设计的短期旅行保险',
                content: '保障跳伞、登山、热气球、滑雪等意外',
                loveNum: '1299',
                price: '22'
            },
            show: true,
            img: banner,
            picture: pacture,
            height: '1050px',
            index: 0
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
                    text: this.$t('businessHome.home'),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: true,
                    disabled: false,
                    badge: '1',
                    text: this.$t('businessHome.life'),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: '',
                    text: this.$t('businessHome.accident'),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: '',
                    text: this.$t('businessHome.cargo'),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: '',
                    text: this.$t('businessHome.health'),
                    onClick: this.goto
                }
            ];
        }
    },
    methods: {
        core() {
            window.location.hash = '/component/example/tab';
        },
        advanced() {
            window.location.hash = '/component/example/tab';
        },
        business() {
            window.location.hash = '/component/example/tab';
        },
        goto(index) {
            this.index = index;
        },
        goToUrl() {
            this.$router.push({
                path: '/proposal/LoadingPage/7/1'
            });
        }
    }
};
</script>

<style scoped="businessHome">
.line {
    margin-top: 10px;
}
.end {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #868686;
}
</style>
