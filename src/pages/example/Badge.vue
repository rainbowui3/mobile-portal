<template>
  <page>
       <top :title="$t('common.badge')" :showBack="true"/>
       <r-body>
        <card :title="$t('common.basic')">
                    <badge text="1"></badge>
                    <br>
                    <badge text="123"></badge>
        </card>
        <card :title="$t('common.row')">
                <row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <badge></badge>
                </row>
                <row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <badge text="1"></badge>
                </row>
                 <row :title="$t('row.account')" :isLink="true" primary="content">
                      <div class="vertical-middle">{{ $t('row.protected') }}&nbsp;</div>
                      <badge text="123"></badge>
                </row>
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Badge,Row,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/row";

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Badge,
    Row,
    RBody
  },
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

