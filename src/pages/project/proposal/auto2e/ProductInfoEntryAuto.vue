<template>
   <page>
       <top  :title="$t('project.jtyw')" :showBack="true"/>
       <r-body>
           <card>           
               <product-top :productImgSrc="productImgSrc" :productDes="productDes" />
           </card>
           <card>
               <r-switch :title="$t('代理业务')" :model="policy" value="isAgent" :onClick="onClick"/>
               <auto-agent v-show="policy.isAgent"></auto-agent>
           </card>
           <card>
                <picker :title="$t('业务风险分类')" :model="policy" :value="value" :options="q" ></picker>
                <picker :title="$t('业务编码')" :model="policy" :value="value" :options="q" ></picker>
                <r-input :v-if="true" :title="$t('项目编码')" :placeholder="$t('请先选择业务编码')"  ></r-input>
                <picker :title="$t('项目编码')" :model="policy" :value="value" :options="q" :v-else="productImgSrc"></picker>
           </card>

       </r-body>
       <tab-bar>
           <cell type="row" >
              <cell><r-button type="primary" :onClick="_onClick">{{$t('下一步')}}</r-button></cell>
           </cell>
       </tab-bar>

   </page>
  
</template>
<script>
import {Page,RBody,Card,RSwitch,Picker,RInput,TabBar,RButton} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import Jtgj from "../../../../assets/jtgj.jpg";
import ProductTop from "../../components/ProductTop";
import AutoAgent from "../../components/AutoAgent";

export default {
    components:{
        Page,
        RBody,
        Card,
        Top,
        RSwitch,
        Picker,
        RInput,
        AutoAgent,
        ProductTop,
        TabBar,
        RButton
        
    },
    data(){
        return{
            productImgSrc: Jtgj,
            productDes:"车险",
            row:"row",
            policy:{
                isAgent:true,
                value1:"12"
            }
        }

    },
    methods:{
        onClick(value){
            this.policy.isAgent = !value;

        }
    }
  
}
</script>

<style>

</style>

