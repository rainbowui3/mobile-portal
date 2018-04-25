<template>
    <r-page>
        <top :title="$t('project.studyRisk')" :showBack="true" />
        <r-body>
            <r-card>
                <insurance-duration-short-term type="minute" :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
            </r-card>
            <r-card>
                <r-input :title="$t('insuredInfoStudyRisk.babyName')" :placeholder="$t('insuredInfoStudyRisk.inputBabyName')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <r-selector :title="$t('insuredInfoStudyRisk.babyCertificateType')" :options="options" :model="policy.holderInfo" value="certificateId" :readonly="readonly"></r-selector>
                <r-input :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <r-date-time :title="$t('insuredInfoStudyRisk.babyBirth')" :model="policy.holderInfo" value="birthdate" :required="true" :readonly="readonly"></r-date-time>
                <r-input :title="$t('insuredInfoStudyRisk.babySchool')" :placeholder="$t('insuredInfoStudyRisk.inputSchool')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <r-input :title="$t('insuredInfoStudyRisk.babyClass')" :placeholder="$t('insuredInfoStudyRisk.inputClass')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <r-selector :title="$t('insuredInfoStudyRisk.relationShip')" :options="options1" :model="policy.babyInfo" value="relationToHolder" :readonly="readonly"></r-selector>

            </r-card>
            <r-card>
                <r-input :title="$t('insuredInfoStudyRisk.name')" :placeholder="$t('insuredInfoStudyRisk.inputName')" :model="policy.holderInfo" value="name" :readonly="readonly" />
                <r-selector :title="$t('insuredInfoStudyRisk.certificateType')" :options="options" :model="policy.holderInfo" value="certificateId" :readonly="readonly"></r-selector>
                <r-input :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="policy.holderInfo" value="certificateNum" :readonly="readonly" />
                <r-date-time :title="$t('insuredInfoStudyRisk.birth')" :model="policy.holderInfo" value="birthdate" :required="true" :readonly="readonly"></r-date-time>
                <r-input :title="$t('insuredInfoStudyRisk.phoneNum')" :placeholder="$t('insuredInfoStudyRisk.inputPhoneNum')" :model="policy.holderInfo" value="mobileNum" :isPhone="true" :readonly="readonly" />
                <r-input :title="$t('insuredInfoStudyRisk.email')" :placeholder="$t('insuredInfoStudyRisk.inputEmail')" :model="policy.holderInfo" value="email" :isEmail="false" :readonly="readonly" />
            </r-card>
            <proposal-clause-confirm :model="pageModel" value="clauseConfirm" />
            <!-- 未确认条款后弹出的提示框 -->
            <r-toast :model="pageModel" value="toastShow" :text="$t('insuredInfoEntryHealthSub.toast')" type="text" />
        </r-body>

        <r-tab-bar>
            <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
        </r-tab-bar>
    </r-page>

</template>

<script>
import ProposalConfirm from '../components/ProposalConfirm';
import InsuranceDurationShortTerm from '../components/InsuranceDurationShortTerm';
// import Validate from '../../utils/Valitate';
// import Getbirthday from '../../utils/Getbirthday';
import ProposalClauseConfirm from '../components/ProposalClauseConfirm';
import '../../../i18n/insuredInfoStudyRisk';
import '../../../i18n/insuredInfoEntryHealthSub';
export default {
  components: {
    ProposalConfirm,
    InsuranceDurationShortTerm,
    ProposalClauseConfirm
  },
  data() {
    return {
      pageModel: {
        clauseConfirm: false,
        toastShow: false
      },
      // holderInfo: {
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "295792200001018271",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // insuredInfo: {
      //   relationToHolder: "1",
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "295792200001018271",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      buttonName: 'proposalConfirm.submitPay',
      amount: '100',
      options: [
        { key: '10000', value: '身份证' },
        { key: '10002', value: '护照' }
      ],
      options1: [
        { key: '10000', value: '父母' },
        { key: '10001', value: '祖父母' }
      ],
      isValidateNum: false,
      readonly: true,
      policy: {
        // effectiveDate: "",
        // expireDate: ""
      }
    };
  },
  methods: {
    onClick: function() {
      if (this.pageModel.clauseConfirm) {
        sessionStorage.removeItem('policy');
        let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
        // this.$router.push("/project/proposal/payStatus");
        if (route && route.route4 && route.route4 != '') {
          this.$router.push({
            path: '/issue/' + route.route4,
            query: this.$route.query
          });
        }
      } else {
        this.pageModel.toastShow = true;
      }
    }
  },
  created: function() {
    this.policy = JSON.parse(sessionStorage.getItem('policy'));
  }
};
</script>


<style>

</style>

