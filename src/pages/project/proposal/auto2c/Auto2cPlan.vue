<template>
    <page>
        <top :title="$t('auto2cPlan.title')" :showBack="true" />
        <r-body>
            <card>
                <tab :tabItems="swTabItems" class="tab"/>
                <swiper :model="index">
                <swiper-item v-for="(item,key) in items" :key="key">
                    <list :data="item.list"/>
                    
                </swiper-item>
                </swiper>
            </card>
            <div>
                <r-button type="default" :mini="true" :onClick="modifyPlanClick">{{$t('auto2cPlan.modifyPlan')}}</r-button>              
            </div>

        </r-body>
        <tab-bar>         
            <r-button type="primary" :onClick="confirmClick">{{$t('common.confirm')}}</r-button>          
        </tab-bar>

  </page>
</template>
<script>
import {
  Page,
  RBody,
  Card,
  RSwitch,
  Picker,
  RInput,
  TabBar,
  RButton,
  Tab,
  Swiper,
  SwiperItem,
  List
} from "rainbow-mobile-core";
import Top from "../../../../components/Top";
import "../../../../i18n/auto2cPlan";;

export default {
    components:{
        Page,
        RBody,
        Card,
        Top,
        RSwitch,
        Picker,
        RInput,
        TabBar,
        RButton,
        Tab,
        Swiper,
        SwiperItem,
        List

    },
    data(){
      return {   
          index:0,
          items:[{
              key:1,
              list:[{
                label: "交强险",
                value: "投保"
            }, {
                label: "车辆损失保险",
                value: ""
            }, {
                label: "第三者责任险",
                value: "100万"
            }, {
                label: "车上人员责任保险(司机)",
                value: "5万"
            }]
          },{
              key:2,
              list:[{
                label: "交强险",
                value: "投保"
            }, {
                label: "车辆损失保险",
                value: ""
            }, {
                label: "第三者责任险",
                value: "100万"
            }, {
                label: "车上人员责任保险(司机)",
                value: "5万"
            }]
          },{
              key:3,
              list:[{
                label: "交强险",
                value: "投保"
            }, {
                label: "车辆损失保险",
                value: ""
            }, {
                label: "第三者责任险",
                value: "100万"
            }, {
                label: "车上人员责任保险(司机)",
                value: "5万"
            }]
          }]
        // swTabItems(){
        // return [
        //     { 'selected':true,'showdot':false, 'disabled': false, 'badge': '','text': this.$t('component.core'),"onClick":this.goto},
        //     { 'selected':false, 'showdot':true, 'disabled': false, 'badge': '1','text': this.$t('component.advanced'),"onClick":this.goto},
        //     { 'selected':false, 'showdot':false, 'disabled': false, 'badge': '', 'text': this.$t('component.business'),"onClick":this.goto },
        // ]
        // }

      }

    },
    computed:{
        list(){
            return[{
                label: "交强险",
                value: "投保"
            }, {
                label: "车辆损失保险",
                value: ""
            }, {
                label: "第三者责任险",
                value: "100万"
            }, {
                label: "车上人员责任保险(司机)",
                value: "5万"
            }]
        },
        
    //Tab选项卡的名称
    swTabItems: function() {
      return [
        {
          selected: true,
          showdot: false,
          disabled: false,
          bage: "",
          text: "热销方案",
          onClick: this.onTabItemClicked
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          bage: "",
          text: "基础方案",
          onClick: this.onTabItemClicked
        },
        {
          selected: false,
          showdot: false,
          disabled: false,
          bage: "",
          text: "高端方案",
          onClick: this.onTabItemClicked
        }
      ];
    },
        
},
methods:{
    confirmClick(){    
        this.$router.push("/project/proposal/auto2c/Auto2cProposalInfoConfirm");
    },
    modifyPlanClick(){
        this.$router.push("/project/proposal/auto2C/Auto2cCustomPlan");
    }
}
  
}
</script>
<style>
.tab > div{
    height: 100px;
}
.tab>.vux-tab>.vux-tab-item{
    line-height: 100px;
}

</style>


