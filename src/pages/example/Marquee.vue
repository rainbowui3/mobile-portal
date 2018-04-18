<template>
  <r-page>
       <top :title="$t('component.marquee')" :showBack="true"/>
       <r-body>
        <r-card :title="$t('component.basic')">
                    <r-marquee :data="list"/>
        </r-card>
        <r-card :title="$t('component.row')">
                   <r-row :title="$t('row.title')">
                        <r-marquee :data="list"/>
                   </r-row>    
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, Marquee, Row, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/component';
import '../../i18n/row';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Marquee,
    Row,
    RBody
  },
  data() {
      return {
          list: [{'text': 'rainbow mobile 1', 'onClick': this.onClick}, {'text': 'rainbow mobile 2', 'onClick': this.onClick}, {'text': 'rainbow mobile 3', 'onClick': this.onClick}]
      };
  },
  methods: {
      onClick(item) {
          console.log(item);
      }
  }
};
</script>

