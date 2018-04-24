// 投保条款确认组件
<template>
  <div>
    <!-- <r-card> -->
    <r-cell type="row">
      <r-cell :span="1">
        <div class="proposalClauseConfirmRaido">
          <r-checker :model="model" :value="value" type="icon" :onClick="onClick" />
        </div>
      </r-cell>
      <r-cell type="row">
        <h5>
          <span>{{$t('proposalClauseConfirm.readed')}}</span>
          <span v-for="(item, idx) in items" :key="idx" value="dialogStatus" @click="showDialog(this, item, idx)">
            <span>《</span>
            <a href="javascript:void(0);">{{item.clauseName}}</a>
            <span>》</span>
          </span>
        </h5>
        <!-- </r-box> -->
      </r-cell>
    </r-cell>
    <div v-for="(item, idx) in items" :key="idx">
      <r-dialog :model="componentSelf.dialogNameList[idx]" value="dialogStatus">
        <div v-bind:class="{dialogCSS:isLink}">
          <div>
            <h3>{{item.clauseName}}</h3>
          </div>
          <div v-bind:class="{clauseInfoCSS:clauseInfoCSS}">
            <ul v-bind:class="{link:isLink}">
              <li>1.本产品投保年龄为：出生满30天-80周岁</li>
              <li>2.本产品生效日期为投保次日零时起保</li>
              <li>3.未成年人身故保险金额以保险事故发生时中国保监会规定的未成年人身故保险金额限额为准</li>
              <li>4.本条款使用条款《大地通达公共交通工具意外伤害保险条款》</li>
              <li>1.本产品投保年龄为：出生满30天-80周岁</li>
              <li>2.本产品生效日期为投保次日零时起保</li>
              <li>3.未成年人身故保险金额以保险事故发生时中国保监会规定的未成年人身故保险金额限额为准</li>
              <li>4.本条款使用条款《大地通达公共交通工具意外伤害保险条款》</li>
              <li>1.本产品投保年龄为：出生满30天-80周岁</li>
              <li>2.本产品生效日期为投保次日零时起保</li>
              <li>3.未成年人身故保险金额以保险事故发生时中国保监会规定的未成年人身故保险金额限额为准</li>
              <li>4.本条款使用条款《大地通达公共交通工具意外伤害保险条款》</li>
              <li>1.本产品投保年龄为：出生满30天-80周岁</li>
              <li>2.本产品生效日期为投保次日零时起保</li>
              <li>3.未成年人身故保险金额以保险事故发生时中国保监会规定的未成年人身故保险金额限额为准</li>
              <li>4.本条款使用条款《大地通达公共交通工具意外伤害保险条款》</li>
            </ul>
          </div>
          <div @click="componentSelf.dialogNameList[idx].dialogStatus=false">
            <span class="vux-close">X</span>
          </div>
        </div>
      </r-dialog>
    </div>
    <!-- </r-card> -->
  </div>
</template>
<script>
import '../../../i18n/proposalClauseConfirm';
export default {
  props: {
    model: {
      type: Object
    },
    value: {
      type: String,
      default: 'value'
    }
  },
  data: function() {
    return {
      defaultModel: {},
      padding: '10px 10px',
      items: [
        { clauseName: '投保人须知及声明' },
        { clauseName: '保险条款' }
        // { clauseName: "XXX规章" },
        // { clauseName: "XXX制度" },
        // { clauseName: "XXX文件" }
      ],
      proposalClauseConfirm: {
        value: false
      },
      componentSelf: {
        // 组件自带的一些属性放在这里面
        dialogNameList: []
      },
      isLink: true,
      clauseInfoCSS: true
    };
  },
  methods: {
    onClick() {
    },
    showDialog(event, item, idx) {
      this.componentSelf.dialogNameList[idx].dialogStatus = true;
    }
  },
  computed: {},
  beforeCreate: function() {},
  created: function() {
    // 在模板渲染成html前调用，通常初始化 某些属性值，然后再渲染成视图
    let i = 0;
    this.items.forEach(element => {
      let map = {
        dialogName: 'dialog' + i,
        dialogStatus: false
      };
      this.componentSelf.dialogNameList.push(map);
    });
  },
  mounted: function() {
    // 在模板渲染成html之后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
  }
  // watch:{
  //   'proposalClauseConfirm.value':{
  //     handler:function(newVal, oldVal){
  //       console.log(this.proposalClauseConfirm.value);
  //     }
  //   }
  // }
};
</script>
<style>
.proposalClauseConfirmRaido {
  text-align: left;
}
/* .links>.link>div {
  float: left;
} */
.link {
  text-align: left;
  list-style: none;
}
.clauseInfoCSS {
  border-bottom: rgb(39, 112, 223) solid;
  border-top: rgb(39, 112, 223) solid;
  /* border-left: rgb(39, 112, 223) solid;
  border-right: rgb(39, 112, 223) solid; */
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  height: 500px;
}
li {
  margin-left: 5px;
  line-height: 18px;
  padding: 4px 0px;
  font-size: 12px;
}
h3 {
  padding-top: 10px;
}
ul {
  padding: 15px;
}
</style>
<i18n>

</i18n>