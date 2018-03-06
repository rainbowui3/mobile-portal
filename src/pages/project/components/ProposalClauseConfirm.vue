// 投保条款确认组件
<template>
  <div>
    <!-- <card> -->
    <cell type="row">
      <cell :span="1">
        <div class="proposalClauseConfirmRaido">
          <checker :model="proposalClauseConfirm" value="value" type="icon" :onChange="onChange" />
        </div>
      </cell>
      <!-- <cell :span="2">
        <div>
          我已阅读
        </div>
      </cell> -->
      <cell type="row">
        <!-- <box :padding="padding">
          <r-button :mini="true" :plain="true" v-for="(item,idx) in items" :key="idx" :model="componentSelf.dialogNameList[idx]" value="dialogStatus" :onClick="showDialog.bind(this, item, idx)">
            {{item.clauseName}}
          </r-button>
        </box> -->
        <h5>
          <span>我已阅读</span>
          <span v-for="(item, idx) in items" :key="idx" value="dialogStatus" @click="showDialog(this, item, idx)">
            <span>《</span>
            <a href="javascript:void(0);">{{item.clauseName}}</a>
            <span>》</span>
          </span>
        </h5>
        <!-- </box> -->
      </cell>
    </cell>
    <div v-for="(item, idx) in items" :key="idx">
      <r-dialog :model="componentSelf.dialogNameList[idx]" value="dialogStatus">
        <!-- <div>
          我是一个萌萌的{{item.clauseName}}
        </div> -->
        <div>{{item.clauseName}}</div>
        <div>
          <ol v-bind:class="{link:isLink}">
            <li>1.本产品投保年龄为：出生满30天-80周岁</li><br/>
            <li>2.本产品生效日期为投保次日零时起保</li><br/>
            <li>3.未成年人身故保险金额以保险事故发生时中国保监会规定的未成年人身故保险金额限额为准</li><br/>
            <li>4.本条款使用条款《大地通达公共交通工具意外伤害保险条款》</li><br/>
          </ol>
        </div>
        <div @click="componentSelf.dialogNameList[idx].dialogStatus=false">
          <span class="vux-close">X</span>
        </div>
      </r-dialog>
    </div>
    <!-- </card> -->
  </div>
</template>
<script>
import {
  RButton,
  Cell,
  Card,
  Checker,
  Box,
  RDialog,
  RImage
} from "rainbow-mobile-core";
export default {
  components: {
    Checker,
    Card,
    Cell,
    RButton,
    Box,
    RDialog,
    RImage
  },
  data: function() {
    return {
      padding: "10px 10px",
      items: [
        { clauseName: "投保人须知及声明" },
        { clauseName: "保险条款" }
        // { clauseName: "XXX规章" },
        // { clauseName: "XXX制度" },
        // { clauseName: "XXX文件" }
      ],
      proposalClauseConfirm: {
        value: false
      },
      componentSelf: {
        //组件自带的一些属性放在这里面
        dialogNameList: []
      },
      isLink: true
    };
  },
  methods: {
    onChange() {
      console.log("onRadioChange:");
    },
    showDialog(event, item, idx) {
      this.componentSelf.dialogNameList[idx].dialogStatus = true;
    }
  },
  computed: {},
  beforeCreate: function() {},
  created: function() {
    //在模板渲染成html前调用，通常初始化 某些属性值，然后再渲染成视图
    let i = 0;
    this.items.forEach(element => {
      let map = {
        dialogName: "dialog" + i,
        dialogStatus: false
      };
      this.componentSelf.dialogNameList.push(map);
    });
  },
  mounted: function() {
    //在模板渲染成html之后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
  }
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
}
</style>
<i18n>

</i18n>