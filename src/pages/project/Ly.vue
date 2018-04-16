<template>
  <page>
        <top :title="$t('project.jtyw')" :showBack="true"/>
        <r-body>
            <card>
              <product-top :productImgSrc="productImgSrc"
                          :productDes="productDes">
              </product-top>
            </card>

            <!--<card :title="$t('project.poi')" >
                <date-time  :title="$t('datetime.startDate')"  ></date-time>
                <date-time  :title="$t('datetime.endDate')"  ></date-time>
            </card>-->

             <!--<card>
                   <tab :tabItems="swTabItems"/>
                   <swiper :model="index">
                    <swiper-item >
                         <card>
                                  <r-table :data="data"/>
                         </card>
                    </swiper-item>
                    <swiper-item >
                          <card>
                                  <r-table :data="data1"/>
                         </card>
                    </swiper-item>
                    <swiper-item >
                          <card>
                                  <r-table :data="data2"/>
                         </card>
                    </swiper-item>
                  </swiper>
            </card>-->
            
            <card>
              <plan-selection></plan-selection>
            </card>
            <card>
              <insurance-duration-currency></insurance-duration-currency>
            </card>
            <!--<card :title="$t('project.notes')">
                          <list :data="list"/>
            </card>-->

            <!--<card :title="$t('project.other')" >
                <r-switch  :title="$t('project.social')"  :model="social" ></r-switch>
                <selector  :title="$t('project.copy')" :options="options" ></selector>
            </card>-->

        </r-body>
        <tab-bar>
      <proposal-confirm 
                :buttonName="buttonName"
                :amount="amount"
                :onClick="onClick"></proposal-confirm>
        </tab-bar>
  </page>
</template>

<script>
import {Page, RBody, Card, RImage, RButton, Swiper, RSwitch, DateTime, Tab, SwiperItem, RTable, List, Selector, TabBar, Cell} from 'rainbow-mobile-core';
import Bottom from '../../components/Bottom';
import Top from '../../components/Top';
import Jtgj from '../../assets/jtgj.jpg';
import InsuranceDurationCurrency from './components/InsuranceDurationCurrency';
import PlanSelection from './components/PlanSelection';
import ProductTop from './components/ProductTop';
import ProposalConfirm from './components/ProposalConfirm';

export default {
  components: {
    Top,
    Card,
    Bottom,
    Page,
    RImage,
    Swiper,
    DateTime,
    Tab,
    SwiperItem,
    RTable,
    List,
    Selector,
    TabBar,
    Cell,
    RButton,
    RSwitch,
    RBody,
    InsuranceDurationCurrency,
    PlanSelection,
    ProductTop,
    ProposalConfirm

  },
  data() {
    return {
      productImgSrc: Jtgj,
      index: 0,
      social: false,
      options: [{'key': '1', 'value': '1份'}, {'key': '2', 'value': '2份'}, {'key': '3', 'value': '3份'}],
      productDes: '保险期间内，不限次数的保障交通意外。各类交通工具全方位保障。',
      amount: '100',
      buttonName: '确定投保'

    };
  },
  methods: {
      goto(index) {
          this.index = index;
      },
      onClick() {

      }
  },
  computed: {
    swTabItems() {
          return [
            { 'selected': true, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('project.plan1'), 'onClick': this.goto},
            { 'selected': false, 'showdot': true, 'disabled': false, 'badge': '', 'text': this.$t('project.plan2'), 'onClick': this.goto},
            { 'selected': false, 'showdot': false, 'disabled': false, 'badge': '', 'text': this.$t('project.plan3'), 'onClick': this.goto}
          ];
    },
    data() {
        return {
          'head': [
            [{'text': this.$t('project.ct')}, {'text': this.$t('project.premuim')}]
          ],
          'body': [
            [{'text': this.$t('project.driver')}, {'text': '10'}],
            [{'text': this.$t('project.passengers')}, {'text': '20'}]
          ],
          InsuranceTerm: [
            { key: 'oneYear', value: '一年' },
            { key: 'twoYear', value: '两年' },
            { key: 'threeYear', value: '三年' }
          ]
        };
    },
    data1() {
        return {
          'head': [
            [{'text': this.$t('project.ct')}, {'text': this.$t('project.premuim')}]
          ],
          'body': [
            [{'text': this.$t('project.driver')}, {'text': '100'}],
            [{'text': this.$t('project.passengers')}, {'text': '200'}]
          ]
        };
    },
    data2() {
        return {
          'head': [
            [{'text': this.$t('project.ct')}, {'text': this.$t('project.premuim')}]
          ],
          'body': [
            [{'text': this.$t('project.driver')}, {'text': '1000'}],
            [{'text': this.$t('project.passengers')}, {'text': '2000'}]
          ]
        };
    },
    list() {
      return [{
          label: this.$t('project.desc1'),
          value: this.$t('project.desc1Value')
        }, {
          label: this.$t('project.desc2'),
          value: this.$t('project.desc2Value')
        }, {
          label: this.$t('project.poi'),
          value: this.$t('project.poiValue')
        }, {
          label: this.$t('project.desc3'),
          value: this.$t('project.desc3Value')
        }];
    }
  }
};
</script>

<style>
.card-padding {
  padding: 15px;
  text-align: left;
}
.card-padding p:last-of-type{
  text-align: right;
}
.demo{
    text-align: center;
    color: #04BE02;
    font-size: 18px;
}


</style>

