<template>
  <page>
       <top :title="$t('component.badge')" :showBack="true"/>
        <card :title="$t('component.basic')">
                    <badge text="1"></badge>
                    <br>
                    <badge text="123"></badge>
        </card>
        <card :title="$t('component.row')">
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
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Badge,Row} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Badge,
    Row
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

