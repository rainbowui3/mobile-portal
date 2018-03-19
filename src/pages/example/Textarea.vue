<template>
  <page>
       <top :title="$t('component.textarea')" :showBack="true"/>
       <r-body>
            <card :title="$t('component.basic')">
                    <r-textarea :title="$t('preview.title')" :model="policy" value="value" ></r-textarea>
                    <r-textarea :title="$t('preview.title')" :model="policy" value="value" :placeholder="$t('input.placeholder')" ></r-textarea>
                    <r-textarea :title="$t('preview.title')" :max="200" :model="policy" value="value" ></r-textarea>
                    <r-textarea :title="$t('preview.title')" :max="20" :model="policy" value="value" :showCounter="false"></r-textarea>
            </card>
            <card :title="$t('common.event')">
                    <r-textarea :title="$t('preview.title')" :model="policy" value="value"  :onFocus="onFocus" :onBlur="onBlur"></r-textarea>
            </card>
             <card :title="$t('common.group')">
                       <r-input :title="$t('preview.title')" :model="policy" value="value1" ></r-input>
                    <r-textarea :placeholder="$t('input.placeholder')" :model="policy" value="value" :max="200"></r-textarea>
            </card>
            <card :title="$t('common.height')">
                    <r-textarea :title="$t('preview.title')" :placeholder="$t('input.placeholder')" :model="policy" value="value"  :showCounter="false" :rows="1" :autoSize="true"></r-textarea>
                    <r-textarea :placeholder="$t('input.placeholder')" :model="policy" value="value" :showCounter="false" :rows="1" :autoSize="true"></r-textarea>
                    <r-textarea  :title="$t('preview.title')" :max="200" :model="policy" value="value"   :height="150" :rows="8" :cols="30"></r-textarea>
            </card>
       </r-body>
       <bottom :index="2"/>
  </page>
</template>

<script>
import {Page,Card,RTextarea,RInput,RBody} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import "../../i18n/component";
import "../../i18n/preview";
export default {
  components: {
    Bottom,
    Top,
    Page,
    RTextarea,
    RInput,
    Card,
    RBody
  },
  data(){
      return {
          policy:{
              value:null,
          value1:null,
          }
      }
  },
  methods:{
      validateInput(value) {
        return {
          valid: value === '12345',
          msg: this.$t('input.validate')
        }
      },
      onFocus(){
          console.log("this is onFocus");
      },
      onBlur(){
          console.log("this is onBlur");
      },
      onChange(value){
          console.log("this is onChange",value);
      },
      onEnter(){
          console.log("this is onEnter");
      }
  }
};
</script>
