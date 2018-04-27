<template>
  <r-page>
       <top :title="$t('common.component')" :showBack="true"/>
       <r-body>
         <r-tab :tabItems="tabItems"/>
         <r-grid :cols="3" :data="gridItems"/>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/business';
import '../../../i18n/component';
export default {
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
          link: '/component/business/holderInfo'
        },
        {
          icon: 'fa fa-warning ',
          text: this.$t('business.insuranceDurationCurrency'),
          link: '/component/business/insuranceDurationCurrency'
        },

        {
          icon: 'fa fa-square-o ',
          text: this.$t('business.insuredInfo'),
          link: '/component/business/insuredInfo'
        },
        {
          icon: 'fa fa-window-maximize ',
          text: this.$t('business.planSelection'),
          link: '/component/business/planSelection'
        },
        {
          icon: 'fa fa-server ',
          text: this.$t('business.productTop'),
          link: '/component/business/productTop'
        },
        {
          icon: 'fa fa-th-list ',
          text: this.$t('business.proposalClauseConfirm'),
          link: '/component/business/proposalClauseConfirm'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.proposalCopies'),
          link: '/component/business/proposalCopies'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.homeContent'),
          link: '/component/business/homeContent'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.pay'),
          link: '/component/business/payment'
        },

         {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.plan'),
          link: '/component/business/businessPlan'
        },

        {
          icon: 'fa fa-info-circle ',
          text: this.$t('business.businessSignIn'),
          link: '/component/business/businessSignIn'
        }

        // {
        //   icon: 'fa fa-info-circle ',
        //   text: this.$t('business.navTab'),
        //   link: '/component/business/businessNavTab'
        // }
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

