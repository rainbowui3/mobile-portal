<template>
  <r-page>
       <top :title="$t('component.actionsheet')" :showBack="true"/>
        <r-body>
            <r-card :title="$t('common.basic')">
              <r-switch :title="$t('common.basic')" :model="policy" value="show1"  :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.android')" :model="policy" value="show2" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.showCannel')" :model="policy" value="show3" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.useArray')" :model="policy" value="show4" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.clickMask')" :model="policy" value="show5" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.tips')" :model="policy" value="show6" :onClick="click"></r-switch>
              <r-switch :title="$t('actionsheet.title')" :model="policy" value="show7" :onClick="click"></r-switch>
            </r-card>
            <r-actionsheet :model="policy" value="show1" :menuList="menus1" :onClick="click" :onClickMask="click"></r-actionsheet>
            <r-actionsheet :model="policy" value="show2" :menuList="menus1" :onClick="click" :onClickMask="click" theme="android"></r-actionsheet>
            <r-actionsheet :model="policy" value="show3" :menuList="menus1" :onClick="click" :onClickMask="click" :showCancel="true"></r-actionsheet>
            <r-actionsheet :model="policy" value="show4" :menuArrary="menu5" :onClick="click" :onClickMask="click" :showCancel="true"></r-actionsheet>
            <r-actionsheet :model="policy" value="show5" :menuList="menus1" :onClick="click"  :showCancel="true" 　:isClickMask="false"></r-actionsheet>
            <r-actionsheet :model="policy" value="show6" :menuList="menus1" :onClick="showToast"  :showCancel="true" 　:isClickMask="false"></r-actionsheet>
            <r-actionsheet :model="policy" value="show7" :menuList="menus2" :onClick="click"  :showCancel="true" 　:isClickMask="false" :isHeaderHtml="true">
                      <p>{{$t('common.sure')}}?<br/><span style="color:red;font-size:12px;">{{$t('common.delete')}}</span></p>
            </r-actionsheet>
            <r-toast :model="policy" value="show8" :text="toastText"/>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/actionSheet';
export default {
  data() {
    return {
      policy: {
        show8: false
      },
      autoClose: false,
      toastText: this.$t('common.success'),
      menus1: {
        menu1: this.$t('actionsheet.friends'),
        menu2: this.$t('actionsheet.timeline')
      },
      menus2: {
        menu1: this.$t('common.yes'),
        menu2: this.$t('common.no')
      },
      menu5: [
        {
          label: this.$t('actionsheet.title'),
          type: 'info'
        },
        {
          label: 'Primary',
          type: 'primary',
          value: 'primary',
          otherProp: 'hey'
        },
        {
          label: 'Warn',
          type: 'warn'
        },
        {
          label: 'Disabled',
          type: 'disabled'
        },
        {
          label: 'Default'
        }
      ]
    };
  },
  methods: {
    click(key) {
      /* eslint-disable */
      console.log('click key=', key);
      /* eslint-disable */
    },
    showToast(key) {
      RLoadingApi.show(this, {
        transition: '',
        text: this.$t('common.processing')
      });
      setTimeout(() => {
        RLoadingApi.hide(this);
        this.policy.show8 = true;
      }, 2000);
    }
  }
};
</script>


