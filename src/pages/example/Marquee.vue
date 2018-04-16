<template>
  <page>
       <top :title="$t('component.marquee')" :showBack="true"/>
       <r-body>
        <card :title="$t('component.basic')">
                    <marquee :data="list"/>
        </card>
        <card :title="$t('component.row')">
                   <row :title="$t('row.title')">
                        <marquee :data="list"/>
                   </row>    
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
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

