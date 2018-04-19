<template>
  <r-page>
       <top :title="$t('component.panel')" :showBack="true"/>
       <r-body>
        <r-card :title="$t('panel.type1')">
                <r-panel :data="list" type="1"></r-panel>
        </r-card>
        <r-card :title="$t('panel.type2')">
                <r-panel :data="list" ></r-panel>
        </r-card>
        <r-card :title="$t('panel.type3')">
                <r-panel :data="list" type="3"></r-panel>
        </r-card> 
        <r-card :title="$t('panel.type4')">
                <r-panel :data="list" type="4"></r-panel>
        </r-card> 
        <r-card :title="$t('panel.type5')">
                <r-panel :data="list" type="5"></r-panel>
        </r-card>  
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import '../../i18n/component';
import '../../i18n/panel';

export default {

  data () {
    return {
        list: [{
        src: 'http://placeholder.qiniudn.com/60x60/cbcbcb/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/example/preview',
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/cbcbcb/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/example/preview',
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    };
  },
  computed: {

  }
};
</script>


