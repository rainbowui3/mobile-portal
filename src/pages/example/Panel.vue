<template>
  <page>
       <top :title="$t('component.panel')" :showBack="true"/>
        <card :title="$t('panel.type1')">
                <panel :data="list" type="1"></panel>
        </card>
        <card :title="$t('panel.type2')">
                <panel :data="list" ></panel>
        </card>
        <card :title="$t('panel.type3')">
                <panel :data="list" type="3"></panel>
        </card> 
        <card :title="$t('panel.type4')">
                <panel :data="list" type="4"></panel>
        </card> 
        <card :title="$t('panel.type5')">
                <panel :data="list" type="5"></panel>
        </card>  
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Panel,Card} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Card,
    Panel
  },
  data () {
    return {
        list: [{
        src: 'http://placeholder.qiniudn.com/60x60/4D93E4/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/example/preview',
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/4D93E4/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/example/preview',
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  computed:{
    
  }
};
</script>


