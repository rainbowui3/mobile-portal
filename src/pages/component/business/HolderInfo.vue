<template>
  <r-page>
       <top :title="$t('business.holderInfo')" :showBack="true"/>
       <r-body>
        <r-card>
          <holder-info  :model="policy.holderInfo"/>
       </r-card>
       </r-body>
       <bottom :index="2"/>
  </r-page>
</template>

<script>

import HolderInfo from '../../project/components/HolderInfo';
import '../../../i18n/business';

export default {
  components: {
    HolderInfo
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

