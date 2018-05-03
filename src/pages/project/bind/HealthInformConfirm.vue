<template>
  <r-page>
    <top :showBack="true" :title="$t('healthInform.title')" />
    <r-body>
      <r-card>
        <tree-test :dataList="dataList" :disabled="disabled"/>
      </r-card>
    </r-body>
    <r-tab-bar>
      <r-button type="primary">{{$t('common.confirm')}}</r-button>
    </r-tab-bar>
  </r-page>
</template>

<script>
import TreeTest from '../../../components/TreeTest';
import '../../../i18n/healthInform';
export default {
  components: { TreeTest },
  data() {
    return {
      disabled: true,
      dataList: [
        {
          name:
            'HI1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;',
          selected: false,
          hasChild: false,
          child: {}
        },
        {
          name: 'HI2健康告知',
          selected: false,
          hasChild: true,
          child: [
            {
              name:
                'HI2-1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;',
              selected: false,
              hasChild: false
            },
            { name: 'HI2-2健康告知', selected: false, hasChild: false }
          ]
        },
        {
          name: 'HI3健康告知',
          selected: false,
          hasChild: true,
          child: [
            {
              name: 'HI3-1健康告知',
              selected: false,
              hasChild: true,
              child: [
                {
                  name:
                    'HI3-1-1被保险人目前还有货过去曾患过癌症/恶性肿瘤、交界性肿瘤、癌前病变、原位癌或性质未明确的肿块/息肉/结节/肿瘤/新生物;',
                  selected: false,
                  hasChild: false
                },
                { name: 'HI3-1-2健康告知', selected: false, hasChild: false }
              ]
            },
            { name: 'HI3-2健康告知', selected: false, hasChild: false }
          ]
        }
      ]
    };
  }
};
</script>

<style>

</style>
