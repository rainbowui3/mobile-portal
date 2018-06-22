/**车险提交核保结果为人工核保的页面*/
<template>
    <r-page>
        <top :title="$t('common.uwFeedback')" />
        <r-body>
            <r-card>
                <div class="card-padding" style="height:150px;">
                    <div class="autoMannuallyUWHint">{{$t('autoMannuallyUW.hint')}}</div>
                    <div class="autoMannuallyUWQN">{{quotationNo}}</div>
                </div>
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import '../../../i18n/autoMannuallyUW';
export default {
  props: {
    quotationNo: {
      type: String,
      default: 'TDEAxxxxxxxxxxxxxxxxxxxx'
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.autoMannuallyUWHint {
  padding-top: 30px;
  /* font-weight: bold; */
}
.autoMannuallyUWQN {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
</style>

