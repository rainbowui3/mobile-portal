<template>
  <page>
       <top :title="$t('common.component')" :showBack="true"/>
       <r-body>
         <tab :tabItems="tabItems"/>
         <grid :cols="3" :data="gridItems"/>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import { Page, Grid, RBody, Tab} from 'rainbow-mobile-core';
import '../../i18n/business';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/component';
export default {
  components: {
    Bottom,
    Top,
    Tab,
    Page,
    Grid,
    RBody
  },
  data() {
    return {};
  },
  computed: {
    tabItems() {
      return [
        {
          selected: false,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('component.core'),
          onClick: this.core
        },
        {
          selected: false,
          showdot: true,
          disabled: false,
          badge: '1',
          text: this.$t('component.advanced'),
          onClick: this.advanced
        },
        {
          selected: true,
          showdot: false,
          disabled: false,
          badge: '',
          text: this.$t('component.business'),
          onClick: this.business
        }
      ];
    },
    gridItems() {
      return [
        { icon: 'fa fa-address-card ', text: this.$t('component.address') },
        {
          icon: 'fa fa-navicon ',
          text: this.$t('business.holderInfo'),
          link: '/component/example/holderInfo'
        },
        {
          icon: 'fa fa-warning ',
          text: this.$t('business.insuranceDurationCurrency'),
          link: '/component/example/insuranceDurationCurrency'
        },

        {
          icon: 'fa fa-square-o ',
          text: this.$t('business.insuredInfo'),
          link: '/component/example/insuredInfo'
        },
        {
          icon: 'fa fa-window-maximize ',
          text: this.$t('business.planSelection'),
          link: '/component/example/planSelection'
        },
        {
          icon: 'fa fa-server ',
          text: this.$t('business.productTop'),
          link: '/component/example/productTop'
        },
        {
          icon: 'fa fa-th-list ',
          text: this.$t('business.proposalClauseConfirm'),
          link: '/component/example/proposalClauseConfirm'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.proposalCopies'),
          link: '/component/example/proposalCopies'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.homeContent'),
          link: '/component/example/homeContent'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.pay'),
          link: '/component/example/payment'
        },

         {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.plan'),
          link: '/component/example/businessPlan'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.businessSignIn'),
          link: '/component/example/businessSignIn'
        }
      ];
    }
  },
  methods: {
    core() {
      window.location.hash = '/component/core';
    },
    advanced() {
      window.location.hash = '/component/advanced';
    },
    business() {
      window.location.hash = '/component/business';
    }
  }
};
</script>

<style lang="less">

</style>

