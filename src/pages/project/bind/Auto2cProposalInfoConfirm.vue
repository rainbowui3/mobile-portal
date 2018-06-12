<template>
  <r-page>
    <top :showBack="true" :title="$t('autoProposalInfoConfirm.title')" />
    <r-body>
      <!-- 添加递送地址 -->
      <r-card >
          <div v-if="holderCustomer && holderCustomer.Address" class="address_show_card">       
            <r-cell :type="row" :vertical="true">
                <r-cell :top='top' :type="row">
                    <r-cell :span="2"></r-cell>
                    <r-cell :span="8" :type="row">
                      <r-cell :span="6"><div class="address_text_left"><span>{{$t('auto2cProposalInfoConfirm.consignee')}}</span><span>{{relationCustomer.CustomerName}}</span></div></r-cell>
                      <r-cell><div class="address_text_right"><span >{{relationCustomer.IndiMobile}}</span></div></r-cell>
                    </r-cell>
                    <r-cell></r-cell>
                </r-cell>
                <r-cell :top='top':type="row">
                  <r-cell :span="2"><div class="address_icon"><span class="fa fa-map-marker fa-2x"></span></div></r-cell>  
                    <r-cell :span="8"> 
                        <div class="address_text_left"><span>{{$t('auto2cProposalInfoConfirm.address')}}</span><span>{{holderCustomer.Address}}</span></div>                 
                    </r-cell>
                  <r-cell><div v-on:click="addAddress" class="address_icon"><span class="fa fa-angle-right fa-2x" ></span></div></r-cell>
                </r-cell>
            </r-cell>  
            <!--<r-cell :type ="row">
              <r-cell :span="2"><div class="address_icon"><span class="fa fa-map-marker fa-2x"></span></div></r-cell>  
                <r-cell :span="8"> 
                    <r-cell :type="row" :vertical="true">
                        <r-cell :top='top' :type="row">
                            <r-cell :span="6"><div class="address_text_left"><span>{{$t('auto2cProposalInfoConfirm.consignee')}}</span><span>{{holderCustomer.Address}}</span></div></r-cell>
                            <r-cell><div class="address_text_right"><span>{{holderCustomer.IndiMobile}}</span></div></r-cell>
                        </r-cell>
                        <r-cell :top='top'><div class="address_text_left"><span>{{$t('auto2cProposalInfoConfirm.address')}}</span><span>{{holderCustomer.Address}}</span></div></r-cell>
                    </r-cell>          
                </r-cell>
              <r-cell :onClick="addAddress"><div class="address_icon"><span class="fa fa-angle-right fa-2x" ></span></div></r-cell>
            </r-cell>   -->
       </div>
       <div v-else class="addressRow" v-on:click="addAddress">
         <span>{{$t('auto2cProposalInfoConfirm.addAdd')}}</span>
       </div>
      </r-card>
      <!-- 车辆信息 -->
      <r-card v-if="policyRisk">
        <r-row :model="pageModel" :title="$t('carInfo.carInfo')" class="cardTitle">
          <div>
            <span class="fa fa-edit" v-on:click="gotoCarInfo" />
          </div>
        </r-row>
        <r-input v-if="policyRisk.IsNewVehicle && policyRisk.IsNewVehicle != 'Y'" :title="$t('insuredInfoEntryPassenger.licenseNo')" :model="policyRisk" value="LicenseNo" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.model')" :model="policyRisk" value="Model" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.vin')" :model="policyRisk" value="Vin" :readonly="true" />
        <r-input :title="$t('carInfo.engineNo')" :model="policyRisk" value="EngineNo" :readonly="true" />
        <r-date-time :title="$t('carInfo.regiDate')" :model="policyRisk" value="VehicleInitialRegDate" :readonly="true" />
      </r-card>
      <!-- 投保详情 -->
      <r-card>
        <r-row :model="pageModel" :title="$t('autoProposalInfoConfirm.proposalDetail')" class="cardTitle">
          <div>
            <span class="fa fa-edit" v-on:click="editDetail"/>
          </div>
        </r-row>
        <r-input :title="$t('auto2cProposalInfoConfirm.proposalRegion')" :model="this" value="Region" :readonly="true"/>
        <r-date-time v-if="policyComp && IsRealProposal && IsRealProposal == 'Y'" :title="$t('auto2cProposalInfoConfirm.compStart')" :model="policyComp" value="EffectiveDate" :readonly="true"></r-date-time>
        <r-date-time v-if="policyComm" :title="$t('auto2cProposalInfoConfirm.commStart')" :model="policyComm" value="EffectiveDate" :readonly="true"></r-date-time>
      </r-card>
      <r-card>
        <r-list v-if="policyComm && deductibleList && deductibleList.length > 0" :title="$t('auto2cProposalInfoConfirm.commericalInsurance')" :value="policyComm.DuePremium" :data="deductibleList" />
        <r-list v-if="nondeductibleList && nondeductibleList.length > 0" :data="nondeductibleList" />
        <r-input v-if="policyComp && IsRealProposal && IsRealProposal == 'Y'" :title="$t('auto2cProposalInfoConfirm.compulsoryInsurance')" :model="policyComp" value="DuePremium" :readonly="true" />
        <r-input v-if="policyComp && IsRealProposal && IsRealProposal == 'Y' && vehicleTax" :title="$t('auto2cProposalInfoConfirm.carShipTax')" :model="vehicleTax" value="TotalTax" :readonly="true" />
        <r-input :title="$t('auto2cProposalInfoConfirm.sumPremium')" :model="this" value="sumPremium" :readonly="true" />
      </r-card>
      <!-- 条款确认 -->
      <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
      <!-- 未确认条款后弹出的提示框 -->
      <r-toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
    </r-body>
    <r-tab-bar>
      <r-button type="primary" :onClick="gotoPay">{{$t('auto2cProposalInfoConfirm.payNow')}}</r-button>
    </r-tab-bar>
  </r-page>
</template>

<script>
import '../../../i18n/auto2cProposalInfoConfirm';
import '../../../i18n/autoProposalInfoConfirm';
import '../../../i18n/carInfo';
import '../../../i18n/insuredInfoEntryPassenger';
import '../../../i18n/insuredInfoEntryHealthSub';
import ProposalClauseConfirm from '../../../components/ProposalClauseConfirm';
import {SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {LoadingApi} from 'rainbow-mobile-core';
import config from 'config';
import {SessionContext} from 'rainbow-foundation-cache';

export default {
  components: {
    ProposalClauseConfirm
  },
  data() {
    return {
      Region: '上海',
      IsRealProposal: undefined,
      policyRisk: undefined,
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      vehicleTax: undefined,
      nondeductibleList: undefined,
      policyComp: undefined,
      sumPremium: undefined,
      policyComm: undefined,
      deductibleList: [],
      holderCustomer: undefined,
      relationCustomer: undefined,
      row: 'row',
      top: '0px'
    };
  },
  methods: {
    addAddress: function() {
      this.$router.push({
        path: '/project/proposal/auto2c/Auto2cUserAddr',
        name: 'Auto2cUserAddr'
      });
    },
    gotoCarInfo: function() {
      let planFlag = JSON.parse(SessionContext.get('PLAN_FLAG'));
      if (planFlag && planFlag == config['CUSTOMER_PLAN_FLAG']) {
        this.$router.go(-3);
      } else {
        this.$router.go(-2);
      }
    },
    editDetail() {
      this.$router.go(-1);
    },
    gotoPay() {
      if (this.pageModel.clauseConfirm) {
        const routerType = JSON.parse(SessionContext.get('ROUTE_TYPE'));

        this.$router.push({
          path: `/issue/${routerType.route4}`,
          query: this.$route.query
        });
      } else {
        this.pageModel.toastShow = true;
      }
    },
    add(sum, addNum) {
        let d = 0;// 定义小数位的初始长度，默认为整数，即小数位为0
        d = this.getDecimalLength(sum, d);
        d = this.getDecimalLength(addNum, d);
        // 计算需要乘的数值
        var m = Math.pow(10, d);
        // 遍历所有参数并相加
        sum = sum * m + addNum * m;
        return sum / m;
    },
    getDecimalLength(value, length) {
        let str = value.toString();
        if (str.indexOf('.') != -1) { // 判断数字是否为小数
            // 获取小数位的长度
            let temp = str.split('.')[1].length;
            // 比较此数的小数位与原小数位的长度，取小数位较长的存储到d中
            length = length < temp ? temp : length;
        }
        return length;
    }
  },
  async created() {
      LoadingApi.show(this, {
          text: this.$t('common.processing')
      });
      const submission = SubmissionStore.getSubmission();
      const IsRealProposal = submission['SubmissionProductList'][0]['IsRealProposal'];
      this.IsRealProposal = IsRealProposal;
      // console.log(submission);
      const submissionProductList = SubmissionStore.getPolicy(submission);
      const policyComm = _.find(submissionProductList, (policyItem) => {
          return policyItem['ProductCode'] == 'DEA';
      });
      this.policyComm = policyComm;

      // 拿到被保险人的联系地址
     this.holderCustomer = _.find(policyComm['PolicyCustomerList'], (customer) => {
        return customer['CustomerRoleCode'] == '1';
      });

      // 拿到联系人的姓名和电话
      this.relationCustomer = _.find(policyComm['PolicyCustomerList'], (customer) => {
          return customer['CustomerRoleCode'] == '4';
      });
      const policyRiskParam = {'ModelName': 'PolicyRisk', 'ObjectCode': 'R10005'};
      const policyRisk = PolicyStore.getChild(policyRiskParam, policyComm);
      this.policyRisk = policyRisk;
      if (policyRisk['PolicyPlanList'] && policyRisk['PolicyPlanList'].length > 0) {
        const policyCoverageList = policyRisk['PolicyPlanList'][0]['TempPolicyCoverageList'][0]['PolicyCoverageList'];
        let nondeductiblePremium = 0;
        let deductibleList = [];
        _.each(policyCoverageList, (policyCoverageItem) => {
          let deductibleItem = {};
          if (policyCoverageItem['ProductElementCode'] == config['NONVEHICLE_LOSS_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONTHIRD_DUTY_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONDRIVER_DUTY_ADDITIONAL_CODE'] ||
              policyCoverageItem['ProductElementCode'] == config['NONPASSENGER_DUTY_ADDITIONAL_CODE']) {
                if (policyCoverageItem['DuePremium']) {
                  nondeductiblePremium = this.add(nondeductiblePremium, policyCoverageItem['DuePremium']);
                }
              // nondeductiblePremium = nondeductiblePremium + policyCoverageItem['DuePremium'];
            } else {
              if (policyCoverageItem['SumInsured']) {
                let temp = 0;
                if (policyCoverageItem['SumInsured'].toString().indexOf('.') != -1) {
                  temp = policyCoverageItem['SumInsured'].toString().split('.')[0].length;
                } else {
                   temp = policyCoverageItem['SumInsured'].toString().length;
                }
                if (temp > 4) {
                  let sumInsuredDivided = policyCoverageItem['SumInsured'] / 10000;
                  deductibleItem['label'] = `${policyCoverageItem['ProductElementCode']}(${sumInsuredDivided}${this.$t('auto2cProposalInfoConfirm.thousand')})`;
                } else {
                  deductibleItem['label'] = `${policyCoverageItem['ProductElementCode']}(${policyCoverageItem['SumInsured']})`;
                }
              } else {
                deductibleItem['label'] = policyCoverageItem['ProductElementCode'];
              }
              deductibleItem['value'] = policyCoverageItem['DuePremium'];
              deductibleList.push(deductibleItem);
            }
            // else if (policyCoverageItem['ProductElementCode'] == config['VEHICLE_LOSS_MIANCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['THIRD_DUTY_MAINCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['DRIVER_DUTY_MAINCODE'] ||
            //   policyCoverageItem['ProductElementCode'] == config['PASSENGER_DUTY_MAINCODE']) {
            //     if (policyCoverageItem['SumInsured']) {
            //       deductibleItem['label'] = policyCoverageItem['ProductElementCode'] + '(' + policyCoverageItem['SumInsured'] + ')';
            //     } else {
            //       deductibleItem['label'] = policyCoverageItem['ProductElementCode'];
            //     }
            //   deductibleItem['value'] = policyCoverageItem['DuePremium'];
            //   deductibleList.push(deductibleItem);
            // }
        });
        this.deductibleList = deductibleList;
        if (nondeductiblePremium > 0) {
          let nondeductibleList = [];
          let nondeductibleItem = {};
          nondeductibleItem['label'] = '不计免赔特约险';
          nondeductibleItem['value'] = nondeductiblePremium;
          nondeductibleList.push(nondeductibleItem);
          this.nondeductibleList = nondeductibleList;
        }
      }
      // 算保费合计
      let sumPremium = 0;
      if (policyComm['DuePremium']) {
        sumPremium = this.add(sumPremium, policyComm['DuePremium']);
        // sumPremium = sumPremium + policyComm['DuePremium'];
      }
      let policyComp = null;
      if (IsRealProposal == 'Y') {
        policyComp = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DFA';
        });
        this.policyComp = policyComp;
        if (policyComp && policyComp['DuePremium']) {
          sumPremium = this.add(sumPremium, policyComp['DuePremium']);
          // sumPremium = sumPremium + policyComp['DuePremium'];
        }
      }
      if (policyComp) {
        let param = {'ModelName': 'VehicleTax', 'ObjectCode': 'VehicleTax'};
        const vehicleTax = PolicyStore.getChild(param, policyComp);
        if (vehicleTax['TotalTax']) {
          sumPremium = this.add(sumPremium, vehicleTax['TotalTax']);
          // sumPremium = sumPremium + vehicleTax['TotalTax'];
        }
        this.vehicleTax = vehicleTax;
      }
      this.sumPremium = sumPremium;
      LoadingApi.hide(this);
  }
};
</script>

<style>
.addressRow {
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.cardTitle {
  color: #999;
}
.address_icon{
  text-align: center;
}
.address_text_left{
  text-align: left;
}
.address_text_right{
  text-align: right;
}
.address_show_card{
  height: 80px;
  text-align: center;
  margin-top: 10px;
}
</style>
