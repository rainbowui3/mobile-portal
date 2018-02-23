<template>
  <page>
       <top :title="$t('component.row')" :showBack="true"/>
            <card :title="$t('component.basic')">
                      <row :title="$t('row.account')" :value="$t('row.protected')" :onClick="onClick"></row>
                      <row :title="$t('row.money')"  :isLoading="!money" :value="money"></row>
                      <row :title="$t('row.withdraw')"  :onClick="goto" :isLink="true"></row>
                      <row :title="$t('row.money')"  link='/component/example/preview' ></row>
                      <row :title="$t('row.withdraw')" :disabled="true" :onClick="goto"  :isLink="true"></row>
            </card>
            <card :title="$t('row.title')">
                      <row  :value="$t('row.protected')" :isLink="true">
                        <span style="color:#4D93E4;"><span style="vertical-align:middle;">{{ $t('row.withdraw') }}</span></span>
                      </row>
                      <row  :value="$t('row.protected')" :isLink="true">
                         <span class="fa fa-lock fa-2x"></span>
                      </row>
            </card>
             <card :title="$t('row.longValue')">
                   <row :title="$t('row.account')" primary="content"   value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></row>
            </card>
             <card :title="$t('row.collapse')">
                 <row :title="$t('row.account')" :isLink="true" :arrowFlag="flag" :onClick="open"></row>
                 <template v-if="flag">
                    <card :title="$t('card.example1Title')" :list="cardList"/>
                </template>
                <row :title="$t('row.account')" :isLink="true" :arrowFlag="flag1" :onClick="open1"></row>
                <template v-if="flag1">
                      <row :title="$t('row.account')" :value="$t('row.protected')" :onClick="onClick"></row>
                      <row :title="$t('row.money')"  :isLoading="!money" :value="money"></row>
                      <row :title="$t('row.withdraw')"  :onClick="goto" :isLink="true"></row>
                      <row :title="$t('row.withdraw')" :disabled="true" :onClick="goto"  :isLink="true"></row>
                </template>
                <row :title="$t('row.account')" :isLink="true" :arrowFlag="flag2" :onClick="open2"></row>
                 <template v-if="flag2">
                                 <previewer :title="$t('preview.totle')" :value="`${this.$t('common.currency')} 1024`" :data="list" />
                </template>
            </card>
             <card :title="$t('common.custom')">
                   <row :title="$t('row.account')" >
                         <div>
                            <span style="color: red">{{`${this.$t('common.currency')} 1024`}}</span>
                        </div>
                   </row>
            </card>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,Row} from 'rainbow-mobile-core';
import {Previewer} from 'rainbow-mobile-previewer';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
export default {
  components: {
    Bottom,
    Top,
    Page,
    Row,
    Card,
    Previewer
  },
  data(){
      return {
           money:null,
           flag:false,
           flag1:false,
           flag2:false,
      }
  },
  methods:{
      onClick(event){
          console.log("===",event)
      },
      goto(event){
          window.location.hash='/component/example/preview'
      },
      open(){
          this.flag= !this.flag;
      },
      open1(){
          this.flag1= !this.flag1;
      },
      open2(){
          this.flag2= !this.flag2;
      }
  },
  mounted () {
    setTimeout(() => {
      this.money = '-1024'
    }, 2000)
  },
  computed :{
    cardList(){
      return [
        { 'link': '/home', 'number': '40','text': this.$t('component.core') },
        { 'link': '/component', 'number': '16','text': this.$t('component.advanced') },
        { 'link': '/example', 'number': '1','text': this.$t('component.business') },
        { 'link': '/donate', 'number': '1','text': this.$t('component.project') },
      ]
    },
    list(){
      return [{
        label: this.$t('preview.goods'),
        value: this.$t('preview.machine')
      }, {
        label: this.$t('preview.title'),
        value: this.$t('preview.title')
      }, {
        label: this.$t('preview.name'),
        value: this.$t('preview.longName')
      }]
    }
  }
};
</script>

