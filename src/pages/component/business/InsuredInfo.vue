<template>
  <r-page>
       <top :title="$t('business.insuredInfo')" :showBack="true"/>
       <r-body>
         <r-card>
       <insured-info  v-bind:model="policy.insuredInfo"/>
         </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>
import InsuredInfo from '../../../components/InsuredInfo';
import '../../../i18n/business';

export default {
  components: {
    InsuredInfo
  },
  data() {
    return {
      policy: {
        holderInfo: {
          name: '王小明',
          certificateId: '身份证',
          certificateNum: '295792200001018271',
          birthdate: '2000-01-01',
          mobileNum: '18398768724',
          email: 'wangxm@outlook.com'
        },
        insuredInfo: {
          relationToHolder: '本人',
          name: '王小明',
          certificateId: '身份证',
          certificateNum: '295792200001018271',
          birthdate: '2000-01-01',
          mobileNum: '18398768724',
          email: 'wangxm@outlook.com'
        },
        dubsidiaryInsuranceInfo: {
          relationToHolder: '10000',
          relationToMainInsured: '本人',
          name: '王小明',
          certificateId: '身份证',
          certificateNum: '295792200001018271',
          birthdate: '2000-01-01',
          mobileNum: '18398768724',
          email: 'wangxm@outlook.com'
        }
      }
    };
  }
};
</script>

<style lang="less">

</style>

