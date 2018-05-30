<template>
    <r-page>
        <top :title="$t('project.accident')" :showBack="true" />
        <r-body>
            <r-card :title="$t('insuredInfoAccident.passengerInfo')">
                <holder-info :model="policy.passengerInfo" :required="required"/>
                <r-input :title="$t('insuredInfoAccident.trainNo')" :model="policy.passengerInfo" value="rainNo" />
                <r-input :title="$t('insuredInfoAccident.seatNo')" :model="policy.passengerInfo" value="seatNum" />
                <r-switch :title="$t('insuredInfoAccident.sameWithHolder')" :model="policy.passengerInfo" value="relationToHolder" :onClick="changeRelationToHolder"></r-switch>
            </r-card>
            <r-card :title="$t('common.holderInfo')">
                <holder-info :model="policy.holderInfo" :required="required"/>
            </r-card>

        </r-body>

        <r-tab-bar>
            <proposal-confirm :buttonName="buttonName" :amount="amount" :onClick="onClick"></proposal-confirm>
        </r-tab-bar>
    </r-page>

</template>

<script>
import ProposalConfirm from '../../../components/ProposalConfirm';
import HolderInfo from '../../../components/HolderInfo';
import '../../../i18n/insuredInfoAccident';
import '../../../i18n/input';
import {SessionContext} from 'rainbow-foundation-cache';
export default {
  components: {
    ProposalConfirm,
    HolderInfo
  },
  data() {
    return {
      policy: {},
      // holderInfo: {
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // insuredInfo: {
      //   relationToHolder: "1",
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   email: "wangxm@outlook.com"
      // },
      // passengerInfo: {
      //   relationToHolder: true,
      //   name: "王小明",
      //   certificateId: "10000",
      //   certificateNum: "65300119520705283x",
      //   birthdate: "2000-01-01",
      //   mobileNum: "18398768724",
      //   rainNo: "G203",
      //   seatNum: "12C",
      //   email: "wangxm@outlook.com"
      // },
      buttonName: 'proposalConfirm.immediatelyInsure',
      amount: '100',
      required: true
    };
  },
  watch: {
    'policy.passengerInfo': {
      handler() {
        if (this.policy.passengerInfo.relationToHolder) {
          this.policy.holderInfo.name = this.policy.passengerInfo.name;
          this.policy.holderInfo.certificateId = this.policy.passengerInfo.certificateId;
          this.policy.holderInfo.certificateNum = this.policy.passengerInfo.certificateNum;
          this.policy.holderInfo.birthdate = this.policy.passengerInfo.birthdate;
          this.policy.holderInfo.mobileNum = this.policy.passengerInfo.mobileNum;
          this.policy.holderInfo.email = this.policy.passengerInfo.email;
        }
      },
      deep: true
    }
  },
  methods: {
    changeRelationToHolder() {
      this.policy.passengerInfo.relationToHolder = !this.policy.passengerInfo
        .relationToHolder;
      if (this.policy.passengerInfo.relationToHolder) {
        this.policy.holderInfo.name = this.policy.passengerInfo.name;
        this.policy.holderInfo.certificateId = this.policy.passengerInfo.certificateId;
        this.policy.holderInfo.certificateNum = this.policy.passengerInfo.certificateNum;
        this.policy.holderInfo.birthdate = this.policy.passengerInfo.birthdate;
        this.policy.holderInfo.mobileNum = this.policy.passengerInfo.mobileNum;
        this.policy.holderInfo.email = this.policy.passengerInfo.email;
      } else {
        this.policy.holderInfo = {
        name: '',
        certificateId: '',
        certificateNum: '',
        birthdate: '',
        mobileNum: '',
        email: ''
        };
      }
    },
    onClick: function() {
      SessionContext.put('policy', JSON.stringify(this.policy), true);
      let route = JSON.parse(SessionContext.get('ROUTE_TYPE'));
      if (route && route.route3 && route.route3 != '') {
        this.$router.push({
          path: '/bind/' + route.route3,
          query: this.$route.query
        });
      }
      // this.$router.push({
      //   path:"/project/proposal/ah/InsuredInfoConfirmAccident",
      //   name:"InsuredInfoConfirmAccident",
      //   // params:{relationToHolder:this.passengerInfo.relationToHolder}
      // });
    }
  },
  created: function() {
    this.policy = JSON.parse(SessionContext.get('policy'));
    this.policy.passengerInfo = {relationToHolder: true};
    this.policy.holderInfo = {
        name: '',
        certificateId: '',
        certificateNum: '',
        birthdate: '',
        mobileNum: '',
        email: ''
    };
  }
};
</script>


<style>

</style>

