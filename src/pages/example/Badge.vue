<template>
  <r-page>
       <top :title="$t('common.badge')" :showBack="true"/>
       <r-body>
        <r-card :title="$t('common.basic')">
                    <r-badge text="1"></r-badge>
                    <br>
                    <r-badge text="123"></r-badge>
        </r-card>
        <r-card :title="$t('common.row')">
                <r-row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <r-badge></r-badge>
                </r-row>
                <r-row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <r-badge text="1"></r-badge>
                </r-row>
                 <r-row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <r-badge text="123"></r-badge>
                </r-row>
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import {Page, Card, Badge, Row, RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import '../../i18n/row';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Badge,
    Row,
    RBody
  }
};
</script>
<style scoped>
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>

