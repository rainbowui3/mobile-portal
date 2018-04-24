<template>
  <r-page>
       <top :title="$t('component.tabbar')" :showBack="true"/>
        <r-body>
       <div class='footer'>
         <r-tab-bar :tabItems="tabItem1" />
       </div>

       <div class='footer'>
         <r-tab-bar :tabItems="tabItems" type="image"/>
       </div>

       <div class='footer'>
         <r-tab-bar :tabItems="tabItem2" type="icon"/>
       </div>

        <r-tab-bar>
              <r-cell type='row' :vertical="true">
                  <r-cell>
                      <r-box>
                          <r-button link='BACK'>{{$t('common.back') }}</r-button>
                      </r-box>  
                  </r-cell> 
              </r-cell>  
        </r-tab-bar>
        </r-body>
  </r-page>
</template>

<script>

import homeOn from '../../../assets/home_on.svg';
import componentOff from '../../../assets/component_off.svg';
import donationOff from '../../../assets/donation_off.svg';
import exampleOff from '../../../assets/example_off.svg';
import '../../../i18n/component';
import '../../../i18n/home';
export default {

  computed: {
    tabItems() {
      return [
        {
          icon: homeOn,
          selected: true,
          showdot: false,
          link: '/',
          badge: '',
          text: this.$t('common.home')
        },
        {
          icon: componentOff,
          selected: false,
          showdot: true,
          link: '/component/core',
          badge: '',
          text: this.$t('component.component')
        },
        {
          icon: exampleOff,
          selected: false,
          showdot: false,
          link: '/demo',
          badge: '2',
          text: this.$t('home.exapmle')
        },
        {
          icon: donationOff,
          selected: false,
          showdot: false,
          link: '/donate',
          badge: '',
          text: this.$t('home.donate')
        }
      ];
    },
    tabItem1() {
      return [
        {
          selected: true,
          showdot: false,
          link: '/',
          badge: '',
          text: this.$t('common.home')
        },
        {
          selected: false,
          showdot: true,
          link: '/component/core',
          badge: '',
          text: this.$t('component.component')
        },
        {
          selected: false,
          showdot: false,
          link: '/demo',
          badge: '2',
          text: this.$t('home.exapmle')
        },
        {
          selected: false,
          showdot: false,
          link: '/donate',
          badge: '',
          text: this.$t('home.donate')
        }
      ];
    },
    tabItem2() {
      return [
        {
          icon: 'fa fa-home',
          selected: false,
          showdot: false,
          link: '/',
          badge: '',
          text: this.$t('common.home')
        },
        {
          icon: 'fa fa-gears',
          selected: true,
          showdot: true,
          link: '/component/core',
          badge: '',
          text: this.$t('component.component')
        },
        {
          icon: 'fa fa-automobile',
          selected: false,
          showdot: false,
          link: '/demo',
          badge: '2',
          text: this.$t('home.exapmle')
        },
        {
          icon: 'fa fa-heart',
          selected: false,
          showdot: false,
          link: '/donate',
          badge: '',
          text: this.$t('home.donate')
        }
      ];
    }
  }
};
</script>
<style>
.footer .weui-tabbar {
  position: relative !important;
  margin-top: 15px;
}
</style>
