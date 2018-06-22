/**车险提交核保失败页面 */
<template>
    <r-page>
        <top :title="$t('common.uwFeedback')" />
        <r-body>
            <r-card>
                <div class="card-padding" style="height:150px;">
                    <div id="autoUWFailHint">{{$t('autoUWFail.hint')}}</div>
                </div>
            </r-card>
        </r-body>
    </r-page>
</template>

<script>
import '../../../i18n/autoUWFail';
export default {};
</script>

<style>
#autoUWFailHint{
    padding-top: 45px;
    /* font-weight: bold; */
}
</style>
