<template>
  <page>
    <r-body>
      <top :title="$t('businessHome.home')" :showBack="true" />
      <tab :tabItems="swTabItems" />
      <swiper :model="index" :height="height">
        <swiper-item>
          <divider>{{$t('businessHome.product')}}</divider>
          <show-one :show="show" />
          <div>
            <show-one />
          </div>
        </swiper-item>
        <swiper-item>
          <div class="black">
            <h2 class="title fadeInUp animated">达到理想不太易</h2>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="black">
            <h2 class="title fadeInUp animated">自信打不死的心态活到老</h2>
          </div>
        </swiper-item>
      </swiper>
      <bottom :index="1" />
    </r-body>
  </page>
</template>

<script>
import {
    Page,
    Tab,
    Card,
    SwiperItem,
    Swiper,
    RBody,
    Divider
} from "rainbow-mobile-core";
import Bottom from "../../../components/Bottom";
import Top from "../../../components/Top";
import ShowOne from "../components/businessHome/ShowOne";
import "../../../i18n/businessHome";

export default {
    components: {
        Bottom,
        Top,
        Page,
        Tab,
        Card,
        Swiper,
        SwiperItem,
        RBody,
        ShowOne,
        Divider
    },
    data() {
        return {
            show: true,
            height: "1000px",
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
                    badge: "",
                    text: this.$t("businessHome.home"),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: true,
                    disabled: false,
                    badge: "1",
                    text: this.$t("businessHome.life"),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: "",
                    text: this.$t("businessHome.accident"),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: "",
                    text: this.$t("businessHome.cargo"),
                    onClick: this.goto
                },
                {
                    selected: false,
                    showdot: false,
                    disabled: false,
                    badge: "",
                    text: this.$t("businessHome.health"),
                    onClick: this.goto
                }
            ];
        }
    },
    methods: {
        core() {
            window.location.hash = "/component/example/tab";
        },
        advanced() {
            window.location.hash = "/component/example/tab";
        },
        business() {
            window.location.hash = "/component/example/tab";
        },
        goto(index) {
            this.index = index;
        }
    }
};
</script>

<style lang="less">

</style>
