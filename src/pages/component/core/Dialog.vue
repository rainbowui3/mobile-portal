<template>
  <r-page>
       <top :title="$t('component.dialog')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
              <r-switch :title="$t('dialog.show')" :model="policy" value="show1" :onClick="click"></r-switch>
              <r-switch :title="`${$t('common.disable')}${$t('component.masker')}`" :model="policy" value="show2" :onClick="click"></r-switch>
              <r-switch :title="$t('common.style')" :model="policy" value="show3" :onClick="click"></r-switch>
              <r-switch :title="$t('row.longValue')" :model="policy" value="show4" :onClick="click"></r-switch>
              <r-dialog  :model="policy" value="show1">
                  <img :src="dialogImage" class='image'/>
                  <div @click="policy.show1=false">
                    <span class="vux-close">X</span>
                  </div>
              </r-dialog>
               <r-dialog  :model="policy" value="show2" :disableMask="false">
                  <img :src="dialogImage" class='image'/>
                  <div @click="policy.show2=false">
                    <span class="vux-close">X</span>
                  </div>
              </r-dialog>
              <r-dialog  :model="policy" value="show3" :disableMask="false" :dialogStyle="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
                  <p style="color:#fff;text-align:center;" @click="policy.show3=false">
                    <span style="font-size:30px;">Rainbow Mobile</span>
                  </p>
              </r-dialog>

               <r-dialog  :model="policy" value="show4">
                  <div style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
                  <p v-for="i in 20" :key="i">{{i}}</p>
                </div>
                  <div @click="policy.show4=false">
                    <span class="vux-close">X</span>
                  </div>
              </r-dialog>
              
            </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import dialog from '../../../assets/dialog.jpg';
import '../../../i18n/component';
import '../../../i18n/row';
import '../../../i18n/dialog';

export default {
  data() {
    return {
      dialogImage: dialog,
      policy: {}
    };
  },
  methods: {
    click() {
      /* eslint-disable */
      console.log(this.policy);
      /* eslint-disable */
    }
  }
};
</script>

<style>
  .image{
    height: 350px;
    width: 100%;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>

