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

import timg from '../../assets/timg.jpg';
import '../../i18n/component';

export default {

  data() {
      return {
        images: [
          {'class': 'image', 'src': timg}
        ]
      };
  }
};
</script>

