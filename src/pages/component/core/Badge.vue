<template>
  <r-page>
       <top :title="$t('common.badge')" :showBack="true"/>
       <r-body>
        <r-card :title="$t('common.basic')">
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
import '../../../i18n/row';

export default {

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

