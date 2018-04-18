<template>
  <r-page>
        <top :title="$t('project.jtyw')" :showBack="true"/>
        <r-body>
            <r-card>
              <product-top :productImgSrc="productImgSrc"
                          :productDes="productDes">
              </product-top>
            </r-card>

            <!--<r-card :title="$t('project.poi')" >
                <r-date-time  :title="$t('datetime.startDate')"  ></r-date-time>
                <r-date-time  :title="$t('datetime.endDate')"  ></r-date-time>
            </r-card>-->

             <!--<r-card>
                   <r-tab :tabItems="swTabItems"/>
                   <r-swiper :model="index">
                    <r-swiper-item >
                         <r-card>
                                  <r-table :data="data"/>
                         </r-card>
                    </r-swiper-item>
                    <r-swiper-item >
                          <r-card>
                                  <r-table :data="data1"/>
                         </r-card>
                    </r-swiper-item>
                    <r-swiper-item >
                          <r-card>
                                  <r-table :data="data2"/>
                         </r-card>
                    </r-swiper-item>
                  </r-swiper>
            </r-card>-->
            
            <r-card>
              <plan-selection></plan-selection>
            </r-card>
            <r-card>
              <insurance-duration-currency></insurance-duration-currency>
            </r-card>
            <!--<r-card :title="$t('project.notes')">
                          <list :data="list"/>
            </r-card>-->

            <!--<r-card :title="$t('project.other')" >
                <r-switch  :title="$t('project.social')"  :model="social" ></r-switch>
                <r-selector  :title="$t('project.copy')" :options="options" ></r-selector>
            </r-card>-->

        </r-body>
        <r-tab-bar>
      <proposal-confirm 
                :buttonName="buttonName"
                :amount="amount"
                :onClick="onClick"></proposal-confirm>
        </r-tab-bar>
  </r-page>
</template>

<script>
import Jtgj from '../../assets/jtgj.jpg';
import InsuranceDurationCurrency from './components/InsuranceDurationCurrency';
import PlanSelection from './components/PlanSelection';
import ProductTop from './components/ProductTop';
import ProposalConfirm from './components/ProposalConfirm';

export default {
  components: {
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

