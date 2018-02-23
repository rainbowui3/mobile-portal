<template>
  <page>
       <top :title="$t('component.search')" :showBack="true"/>
          <r-image :list="images"/>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RImage} from 'rainbow-mobile-core';
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

