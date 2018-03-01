<<template>
  <card title="被保险人" class="weui-panel__hd" >
      <selector  :title="$t('与投保人关系:')" :options="options" :model="certificate" value="certificateId" :onChange="onChange"></selector>
      <r-input :title="$t('姓名:')" :placeholder="$t('请填写姓名')" :model="policy" value="value2" />    
      <selector  :title="$t('证件类型:')" :options="options" :model="certificate" value="certificateId" :onChange="onChange"></selector>
      <r-input :title="$t('证件号码:')" :placeholder="$t('请填写证件号码')" :model="policy" value="value2" />      
      <date-time  :title="$t('出生日期')" :model="policy" value="nullDate" :required="true" :onChange="onChange"></date-time>
      <r-input :title="$t('手机号码:')" :placeholder="$t('请填写手机号码')" :model="policy" value="value2" />
      <r-input :title="$t('电子邮箱：')" :placeholder="$t('email@email.com')" :model="policy" value="value2" :isEmail="true" :validate="false" />   
  </card>
</template>

<<script>
import { Page, Card, RInput, RButton,Selector,DateTime } from "rainbow-mobile-core";
export default {
    components:{
        Card,
        RInput,
        Selector,
        DateTime

    },
    data() {
        return{
            policy:{
                value2:''
            },
            options:[{"key":"10000","value":"省份证"},{"key":"10001","value":"军官证"},{"key":"10002","value":"护照"}],
            certificate:{
                "certificateId":"10000",
            }

        };
    },
    method:{
        onChange:function(val) {
        this.certificate.effortDate=val;
        }
    }
  
}
</script>
<style>
.weui-panel__hd {
    text-align: left;
}
</style>
