<template>
  <r-page>
    <top :showBack="true" :title="$t('autoProposalInfoConfirm.title')" />
    <r-body>
      <!-- 添加递送地址 -->
      <r-card>
        <div class="addressRow" v-on:click="addAddress">
          <!-- <r-row :model="pageModel" :title="$t('auto2cProposalInfoConfirm.addAdd')" :isLink="true" /> -->
          <span>{{$t('auto2cProposalInfoConfirm.addAdd')}}</span>
        </div>
      </r-card>
      <!-- 车辆信息 -->
      <r-card>
        <r-row :model="pageModel" :title="$t('carInfo.carInfo')" class="cardTitle">
          <div>
            <span class="fa fa-edit" v-on:click="gotoCarInfo" />
          </div>
        </r-row>
        <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :model="model" value="licenseNo" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.model')" :model="model" value="model" :readonly="true" />
        <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="model" value="vehicleCode" :readonly="true" />
        <r-input :title="$t('carInfo.engineNo')" :model="model" value="engineNo" :readonly="true" />
        <r-input :title="$t('carInfo.regiDate')" :model="model" value="VehicleInitialRegDate" :readonly="true" />
      </r-card>
      <!-- 投保详情 -->
      <r-card>
        <r-row :model="pageModel" :title="$t('autoProposalInfoConfirm.proposalDetail')" class="cardTitle">
          <div>
            <span class="fa fa-edit" />
          </div>
        </r-row>
        <r-input :title="$t('auto2cProposalInfoConfirm.proposalRegion')" :model="model" value="region" />
        <insurance-duration-short-term type="second" :model="model" effectiveDate="effectiveDate" expireDate="expireDate" :readonlyEx="true" :readonlyEf="true"/>
      </r-card>
      <r-card>
        <r-list title="商业险" value="4682.56元" :data="model.policy[0].policyPlan" />
        <r-input title="交强险" :model="model.policy[1]" value="premium" :readonly="true" />
        <r-input title="车船税" :model="model.policy[0]" value="vehicleAndVesselTax" :readonly="true" />
        <r-input title="畅行无忧(A款)" :model="model.policy[0]" value="a" :readonly="true" />
        <r-input title="保费共计" :model="model" value="sumPremium" :readonly="true" />
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
// import '../../../../i18n/autoProposalInfoConfirm';
import '../../../i18n/insuredInfoEntryPassenger';
import '../../../i18n/insuredInfoEntryHealthSub';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import InsuranceDurationShortTerm from '../components/InsuranceDurationShortTerm';
export default {
  components: {
    ProposalClauseConfirm,
    InsuranceDurationShortTerm
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      model: {
        sumPremium: '6832.56元',
        policy: [
          {
            effectiveDate: '2018-01-01',
            vehicleAndVesselTax: '450元',
            a: '150元',
            policyPlan: [
              {
                label: '车辆损失保险(23.09万)',
                value: '1703.79元'
              },
              {
                label: '第三者责任保险(50万)',
                value: '1958.00元'
              },
              {
                label: '车上人员责任保险(司机)',
                value: '410.00元'
              },
              {
                label: '不计免赔特约险',
                value: '610.77元'
              }
            ]
          },
          {
            premium: '950元'
          }
        ]
      }
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
      this.$router.push({
        path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
        name: 'Auto2cDrivingLicenseInfo'
      });
    },
    gotoPay() {
      if (this.pageModel.clauseConfirm) {
        this.$router.push({
          path: '/project/proposal/auto2c//project/proposal/auto2e/AutoPay',
          name: 'AutoPay'
        });
      } else {
        this.pageModel.toastShow = true;
      }
    }
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
</style>
