<template>
    <r-page>
        <top :showBack="true" :title="$t('auto2cUserAddr.title')" />
        <r-body>
            <div v-if="relationCustomer && holderCustomer">
                <r-input :title="$t('auto2cUserAddr.receiver')" :model="relationCustomer" value="CustomerName" :required="true"/>
                <r-input :title="$t('auto2cUserAddr.mobileNo')" :model="relationCustomer" value="IndiMobile" :isPhone="true" :novalidate="false" :required="true"/>
                <r-row :title="$t('auto2cUserAddr.area')" :model="this" value="value" :isLink="true" :onClick="gotoChooseArea.bind(this)"/>
                <r-textarea :title="$t('auto2cUserAddr.address')" :model="holderCustomer" value="Address" :required="true"/>
            </div>
            <r-toast :model="this" value="toastShow" :text="$t('auto2cUserAddr.addressNotNull')" type='text'/>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="saveAddress">{{$t('common.save')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../../i18n/auto2cUserAddr';
import {SubmissionStore, PolicyStore} from 'rainbow-foundation-sdk';
import {ObjectUtil} from 'rainbow-foundation-tools';
import {LoadingApi} from 'rainbow-mobile-core';
export default {
  data() {
      return {
          value: '',
          relationCustomer: undefined,
          holderCustomer: undefined,
          policyCustomers: undefined,
          toastShow: false
      };
  },
  methods: {
      gotoChooseArea: function() {
        // Todo:跳转到选择地区页面
      },
      async saveAddress() {
        if (!this.holderCustomer.Address) {
            this.toastShow = true;
        } else {
            const submission = SubmissionStore.getSubmission();
            const submissionProductList = SubmissionStore.getPolicy(submission);
            // 商业险
            const policyComm = _.find(submissionProductList, (policyItem) => {
                return policyItem['ProductCode'] == 'DEA';
            });
            const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
            let commCustomers = PolicyStore.getChild(policyCustomerParam, policyComm);
            PolicyStore.deleteChild(commCustomers, policyComm);
            policyComm['PolicyCustomerList'] = this.policyCustomers;
            // 交强险
            const policyComp = _.find(submissionProductList, (policyItem) => {
                return policyItem['ProductCode'] == 'DFA';
            });
            let compCustomers = PolicyStore.getChild(policyCustomerParam, policyComp);
            PolicyStore.deleteChild(compCustomers, policyComp);
            policyComp['PolicyCustomerList'] = this.policyCustomers;
            SubmissionStore.setSubmission(submission);
            this.$router.go(-1);
        }
      }
  },
  async created() {
      LoadingApi.show(this, {
          text: this.$t('common.processing')
      });
      const submission = SubmissionStore.getSubmission();
      const submissionProductList = SubmissionStore.getPolicy(submission);
      const policyComm = _.find(submissionProductList, (policyItem) => {
          return policyItem['ProductCode'] == 'DEA';
      });
      const policyCustomerParam = {'ModelName': 'PolicyCustomer', 'ObjectCode': 'PolicyCustomer'};
      const policyCustomersStore = PolicyStore.getChild(policyCustomerParam, policyComm);
      const policyCustomers = ObjectUtil.clone(policyCustomersStore);
      this.policyCustomers = policyCustomers;
      this.relationCustomer = _.find(policyCustomers, (customer) => {
          return customer['CustomerRoleCode'] == '4';
      });
      this.holderCustomer = _.find(policyCustomers, (customer) => {
          return customer['CustomerRoleCode'] == '1';
      });
      LoadingApi.hide(this);
  }
};
</script>

<style>

</style>
