<template>
  <r-page>
    <top :title="$t('project.studyRisk')" :showBack="true" />
    <r-body>
      <r-card>
        <poi :model="policy.policyData" effectiveDate="effectiveDate" expireDate="expireDate" />
      </r-card>
      <r-card>
        <r-input :title="$t('insuredInfoStudyRisk.babyName')" :placeholder="$t('insuredInfoStudyRisk.inputBabyName')" :model="policy.babyInfo" value="name" :required="true" :novalidate="false" />
        <r-selector :title="$t('insuredInfoStudyRisk.babyCertificateType')" :options="options" :model="policy.babyInfo" value="certificateId" :onChange="onChangeCertiType.bind(this,'baby')" :required="true"></r-selector>
        <r-input v-if="isValidateNumBaby == false" :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="policy.babyInfo" value="certificateNum" :validator="validateNumInputBaby" :novalidate="false" :required="true" />
        <r-input v-else-if="isValidateNumBaby == true" :title="$t('insuredInfoStudyRisk.babyCertificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputBabyCertificateNum')" :model="policy.babyInfo" value="certificateNum" :required="true" :novalidate="false" />
        <r-date-time :title="$t('insuredInfoStudyRisk.babyBirth')" :model="policy.babyInfo" value="birthdate" :required="true" :readonly="!isValidateNumBaby"></r-date-time>
        <r-input :title="$t('insuredInfoStudyRisk.babySchool')" :placeholder="$t('insuredInfoStudyRisk.inputSchool')" :model="policy.babyInfo" value="school" />
        <r-input :title="$t('insuredInfoStudyRisk.babyClass')" :placeholder="$t('insuredInfoStudyRisk.inputClass')" :model="policy.babyInfo" value="class" />
        <r-selector :title="$t('insuredInfoStudyRisk.relationShip')" :options="options1" :model="policy.babyInfo" value="relationToHolder" :required="true"></r-selector>

      </r-card>
      <r-card>
        <r-input :title="$t('insuredInfoStudyRisk.name')" :placeholder="$t('insuredInfoStudyRisk.inputName')" :model="policy.holderInfo" value="name" :required="true" :novalidate="false" />
        <r-selector :title="$t('insuredInfoStudyRisk.certificateType')" :options="options" :model="policy.holderInfo" value="certificateId" :onChange="onChangeCertiType.bind(this, 'parent')" :required="true"></r-selector>
        <r-input v-if="isValidateNumParent == false" :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="policy.holderInfo" value="certificateNum" :validator="validateNumInputParent" :novalidate="false" :required="true" />
        <r-input v-else-if="isValidateNumParent == true" :title="$t('insuredInfoStudyRisk.certificateNum')" :placeholder="$t('insuredInfoStudyRisk.inputCertificateNum')" :model="policy.holderInfo" value="certificateNum" :required="true" :novalidate="false" />
        <r-date-time :title="$t('insuredInfoStudyRisk.birth')" :model="policy.holderInfo" value="birthdate" :required="true" :readonly="!isValidateNumParent"></r-date-time>
        <r-input :title="$t('insuredInfoStudyRisk.phoneNum')" :placeholder="$t('insuredInfoStudyRisk.inputPhoneNum')" :model="policy.holderInfo" value="mobileNum" :isPhone="true" :novalidate="false" :required="true" />
        <r-input :title="$t('insuredInfoStudyRisk.email')" :placeholder="$t('insuredInfoStudyRisk.inputEmail')" :model="policy.holderInfo" value="email" :isEmail="true" :novalidate="false" />
      </r-card>

    </r-body>

    <r-tab-bar>
      <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
    </r-tab-bar>
  </r-page>

</template>

<script>
import ProposalConfirm from '../../../components/ProposalConfirm';
import Poi from '../../../components/Poi';
import Validate from '../../../components/utils/Valitate';
import Getbirthday from '../../../components/utils/Getbirthday';
import '../../../i18n/insuredInfoStudyRisk';
import '../../../i18n/input';
import '../../../i18n/project';
export default {
  components: {
    ProposalConfirm,
    Poi
  },
  data() {
    return {
      buttonName: 'proposalConfirm.immediatelyInsure',
      amount: '100',
      options: [
        { key: '10000', value: '身份证' },
        { key: '10002', value: '护照' }
      ],
      isValidateNumBaby: false,
      isValidateNumParent: false,
      options1: [
        { key: '10000', value: '父母' },
        { key: '10001', value: '祖父母' }
      ],
      policy: {
        holderInfo: {
          // name: "王小明",
          // certificateId: "10000",
          // certificateNum: "",
          // birthdate: "2000-01-01",
          // mobileNum: "18398768724",
          // email: "wangxm@outlook.com"
        },
        babyInfo: {
          relationToHolder: '10000'
          // name: "王小明",
          // certificateId: "10000",
          // certificateNum: "",
          // birthdate: "2000-01-01",
          // email: "wangxm@outlook.com",
          // school: "",
          // class: ""
        },
        policyData: {
          // effectiveDate: "",
          // expireDate: ""
        }
      }
    };
  },
  methods: {
    onClick: function() {
      sessionStorage.setItem('policy', JSON.stringify(this.policy));
      let route = JSON.parse(sessionStorage.getItem('ROUTE_TYPE'));
      // this.$router.push("/project/proposal/ah/InsuredInfoConfirmStudyRisk");
      if (route && route.route3 && route.route3 != '') {
        this.$router.push({
          path: '/bind/' + route.route3,
          query: this.$route.query
        });
      }
    },
    validateNumInputBaby(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && this.policy.babyInfo.certificateId == '10000') {
        this.policy.babyInfo.birthdate = Getbirthday.getBirthdayByIdCard(value);
      }
      return {
        valid: isCertification === true,
        msg: this.$t('input.validate')
      };
    },
    validateNumInputParent(value) {
      var isCertification = Validate.validateIdNo(value);
      if (isCertification && this.policy.holderInfo.certificateId == '10000') {
        this.policy.holderInfo.birthdate = Getbirthday.getBirthdayByIdCard(
          value
        );
      }
      return {
        valid: isCertification === true,
        msg: this.$t('input.validate')
      };
    },
    onChangeCertiType: function(value1, value2) {
      switch (value1) {
        case 'baby':
          if (
            this.policy.babyInfo.certificateId &&
            this.policy.babyInfo.certificateId === '10000'
          ) {
            this.isValidateNumBaby = false;
            this.validateNumInputBaby(this.policy.babyInfo.certificateNum);
          } else {
            this.isValidateNumBaby = true;
          }
          break;
        case 'parent':
          if (
            this.policy.holderInfo.certificateId &&
            this.policy.holderInfo.certificateId === '10000'
          ) {
            this.isValidateNumParent = false;
            this.validateNumInputParent(this.policy.holderInfo.certificateNum);
          } else {
            this.isValidateNumParent = true;
          }
          break;
      }
    }
  },
  computed: {}
};
</script>


<style>

</style>

