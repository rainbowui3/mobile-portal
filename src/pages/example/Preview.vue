<template>
  <r-page>
       <top :title="$t('component.previewer')" :showBack="true"/>
       <r-body>
          <r-card>
            <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" />
          </r-card>
          <r-card>
            <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`"  :data="list" :buttons="buttons1"/>
          </r-card>
          <r-card>
            <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`"  :data="list" :buttons="buttons2" :param="param"/>
          </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Previewer} from 'rainbow-mobile-previewer';

import '../../i18n/component';
import '../../i18n/preview';

export default {
  components: {
    Previewer
  },
  data() {
    return {
      param: {name: 'Rainbow'}
    };
  },
  computed: {
    list() {
      return [{
        label: this.$t('preview.goods'),
        value: this.$t('preview.machine')
      }, {
        label: this.$t('preview.title'),
        value: this.$t('preview.title')
      }, {
        label: this.$t('preview.name'),
        value: this.$t('preview.longName')
      }];
    },
    buttons1() {
      return [{
        style: 'default',
        text: this.$t('preview.left')
      }, {
        style: 'primary',
        text: this.$t('preview.right'),
        link: '/'
      }];
    },
    buttons2() {
      return [{
        style: 'primary',
        text: this.$t('preview.click'),
        onButtonClick: (param) => {
          alert(`I Love ${param.name} Mobile`);
        }
    }];
}
  }
};
</script>



