<template>
  <r-page>
       <top :title="$t('component.search')" :showBack="true"/>
       <r-body>
          <r-image :list="images"/>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, RImage, RBody} from 'rainbow-mobile-core';

import timg from '../../assets/timg.jpg';
import '../../i18n/component';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RImage,
    RBody
  },
  data() {
      return {
        images: [
          {'class': 'image', 'src': timg}
        ]
      };
  }
};
</script>

