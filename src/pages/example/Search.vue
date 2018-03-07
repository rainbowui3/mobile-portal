<template>
  <page>
       <top :title="$t('component.search')" :showBack="true"/>
       <r-body>
          <r-image :list="images"/>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RImage,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import timg from '../../assets/timg.jpg';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    RImage
  },
  data(){
      return {
        images:[
          {"class":"image","src":timg},
        ]
      }
  },
};
</script>

