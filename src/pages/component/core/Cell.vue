<template>
  <r-page>
       <top :title="$t('component.cell')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                    <r-cell :type="row">
                        <r-cell><div class="flex-demo">1</div></r-cell>
                        <r-cell><div class="flex-demo">2</div></r-cell>
                    </r-cell>
                    <br/>
                    <r-cell :type="row">
                        <r-cell><div class="flex-demo">1</div></r-cell>
                        <r-cell><div class="flex-demo">2</div></r-cell>
                        <r-cell><div class="flex-demo">3</div></r-cell>
                    </r-cell>
                    <br/>
                    <r-cell :type="row">
                        <r-cell><div class="flex-demo">1</div></r-cell>
                        <r-cell><div class="flex-demo">2</div></r-cell>
                        <r-cell><div class="flex-demo">3</div></r-cell>
                        <r-cell><div class="flex-demo">4</div></r-cell>
                    </r-cell>
            </r-card>
            <r-card :title="$t('cell.padding')">
                    <r-cell :type="row">
                        <r-cell :padding="padding"><div class="flex-demo">1</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo">2</div></r-cell>
                    </r-cell>
                    <br/>
                    <r-cell :type="row">
                        <r-cell :padding="padding"><div class="flex-demo">1</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo">2</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo">3</div></r-cell>
                    </r-cell>
                    <br/>
                    <r-cell :type="row">
                        <r-cell :padding="padding"><div class="flex-demo" >1</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo" >2</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo" >3</div></r-cell>
                        <r-cell :padding="padding"><div class="flex-demo" >4</div></r-cell>
                    </r-cell>
            </r-card>

            <r-card :title="$t('cell.vertical')" >
                    <r-cell :type="row" :vertical="true">
                        <r-cell :top='top2'><div class="flex-demo">1</div></r-cell>
                        <r-cell :top='top2'><div class="flex-demo">2</div></r-cell>
                    </r-cell>
            </r-card>

            <r-card :title="`${$t('cell.vertical')}${$t('cell.padding')}`" >
                    <r-cell :type="row" :vertical="true">
                        <r-cell :top='top'><div class="flex-demo">1</div></r-cell>
                        <r-cell :top='top'><div class="flex-demo">2</div></r-cell>
                    </r-cell>
            </r-card>

             <r-card :title="$t('cell.cell')" >
                    <r-cell :type="row">
                        <r-cell :span="4"><div class="flex-demo">1/3</div></r-cell>
                        <r-cell ><div class="flex-demo">2/3</div></r-cell>
                    </r-cell>
                     <br/>
                     <r-cell :type="row">
                        <r-cell :span="6"><div class="flex-demo">6/12</div></r-cell>
                        <r-cell :span="2"><div class="flex-demo">2/12</div></r-cell>
                        <r-cell ><div class="flex-demo">rest</div></r-cell>
                    </r-cell>
            </r-card>

       </r-body>   
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/cell';

export default {
  data() {
      return {
          row: 'row',
          padding: '0px',
          top: '0px',
          top2: '8px'
      };
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
