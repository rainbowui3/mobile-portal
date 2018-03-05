<template>
  
    <cell type="row" >
        <cell><div class="demo">{{`${$t('project.premuim')}: ${$t('common.currency')}`}}{{amount}}</div></cell>
        <cell><r-button type="primary" :link="linkInsuredConfirmUrl" :onClick="_onClick">{{$t('立即投保')}}</r-button></cell>
    </cell>                 
  
</template>

<script>
import  {Card,RButton,Cell} from 'rainbow-mobile-core';
export default {
    components:{
        Card,
        RButton,
        Cell
    },
    data() {
        return{
            amount:100

        };
    },
    props:{
        linkInsuredConfirmUrl:String,
        onClick:Function
    },
    methods:{
        _onClick:function(event){
            this.onClick?this.onClick(event):null;
        }
    }
  
}
</script>

<style>
.demo{
    text-align: center;
    color: #04BE02;
    font-size: 18px;
}
</style>
