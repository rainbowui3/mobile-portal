<template>
  <r-page>
       <top :title="$t('component.spinner')" :showBack="true"/>
       <r-body>
        <r-card>
            <r-row :title="$t('row.account')">
                <r-spinner type="android"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="ios"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="ios-small" size="30px"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="bubbles"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="circles"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="crescent"/>
            </r-row>  
            <r-row :title="$t('row.account')">
                <r-spinner type="dots"/>
            </r-row>  
            <r-row :title="$t('row.account')">
                <r-spinner type="lines"/>
            </r-row>  
            <r-row :title="$t('row.account')">
                <r-spinner type="ripple"/>
            </r-row>
            <r-row :title="$t('row.account')">
                <r-spinner type="spiral"/>
            </r-row>
        </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../../i18n/component';
import '../../../i18n/row';

export default {

};
</script>
 
