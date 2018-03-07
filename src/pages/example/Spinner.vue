<template>
  <page>
       <top :title="$t('component.spinner')" :showBack="true"/>
       <r-body>
        <card>
            <row :title="$t('row.account')">
                <spinner type="android"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="ios"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="ios-small" size="30px"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="bubbles"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="circles"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="crescent"/>
            </row>  
            <row :title="$t('row.account')">
                <spinner type="dots"/>
            </row>  
            <row :title="$t('row.account')">
                <spinner type="lines"/>
            </row>  
            <row :title="$t('row.account')">
                <spinner type="ripple"/>
            </row>
            <row :title="$t('row.account')">
                <spinner type="spiral"/>
            </row>
        </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Spinner,Row,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Spinner,
    Row,
    RBody
  },
};
</script>
 
