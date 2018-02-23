<template>
  <page>
       <top :title="$t('component.cell')" :showBack="true"/>
            <card :title="$t('component.basic')">
                    <cell :type="row">
                        <cell><div class="flex-demo">1</div></cell>
                        <cell><div class="flex-demo">2</div></cell>
                    </cell>
                    <br/>
                    <cell :type="row">
                        <cell><div class="flex-demo">1</div></cell>
                        <cell><div class="flex-demo">2</div></cell>
                        <cell><div class="flex-demo">3</div></cell>
                    </cell>
                    <br/>
                    <cell :type="row">
                        <cell><div class="flex-demo">1</div></cell>
                        <cell><div class="flex-demo">2</div></cell>
                        <cell><div class="flex-demo">3</div></cell>
                        <cell><div class="flex-demo">4</div></cell>
                    </cell>
            </card>
            <card :title="$t('cell.padding')">
                    <cell :type="row">
                        <cell :padding="padding"><div class="flex-demo">1</div></cell>
                        <cell :padding="padding"><div class="flex-demo">2</div></cell>
                    </cell>
                    <br/>
                    <cell :type="row">
                        <cell :padding="padding"><div class="flex-demo">1</div></cell>
                        <cell :padding="padding"><div class="flex-demo">2</div></cell>
                        <cell :padding="padding"><div class="flex-demo">3</div></cell>
                    </cell>
                    <br/>
                    <cell :type="row">
                        <cell :padding="padding"><div class="flex-demo" >1</div></cell>
                        <cell :padding="padding"><div class="flex-demo" >2</div></cell>
                        <cell :padding="padding"><div class="flex-demo" >3</div></cell>
                        <cell :padding="padding"><div class="flex-demo" >4</div></cell>
                    </cell>
            </card>

            <card :title="$t('cell.vertical')" >
                    <cell :type="row" :vertical="true">
                        <cell :top='top2'><div class="flex-demo">1</div></cell>
                        <cell :top='top2'><div class="flex-demo">2</div></cell>
                    </cell>
            </card>

            <card :title="`${$t('cell.vertical')}${$t('cell.padding')}`" >
                    <cell :type="row" :vertical="true">
                        <cell :top='top'><div class="flex-demo">1</div></cell>
                        <cell :top='top'><div class="flex-demo">2</div></cell>
                    </cell>
            </card>

             <card :title="$t('cell.cell')" >
                    <cell :type="row">
                        <cell :span="4"><div class="flex-demo">1/3</div></cell>
                        <cell ><div class="flex-demo">2/3</div></cell>
                    </cell>
                     <br/>
                     <cell :type="row">
                        <cell :span="6"><div class="flex-demo">6/12</div></cell>
                        <cell :span="2"><div class="flex-demo">2/12</div></cell>
                        <cell ><div class="flex-demo">rest</div></cell>
                    </cell>
            </card>

            
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Cell,Card} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';

export default {
  components: {
    Bottom,
    Top,
    Page,
    Cell,
    Card
  },
  data(){
      return {
          row:'row',
          padding:'0px',
          top:'0px',
          top2:"8px"
      }
  }
};
</script>
<style>

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #4D93E4;
  border-radius: 4px;
  background-clip: padding-box;
}

</style>
