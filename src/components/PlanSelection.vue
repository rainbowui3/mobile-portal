//方案选择组件
<template>
  <div>
    <div v-if="showPlanList.length < 4">
      <r-tab :tabItems="tabItems" />
      <r-swiper height="400px" :model="index">
        <r-swiper-item v-for="(item,PlanCode) in showPlanList[index]" :key="PlanCode">
          <r-card :title="$t('planSelection.guaranteeRate')">
            <r-table :data="planData" :class="{table:classStatus}" />
            <div v-for="(ctItem, ProductElementCode) in planItemSelector" :key="ProductElementCode">
              <div v-if='!ctItem.ProductPlanCoverageDetail.ctDesc'>
               <r-row :model="ctItem.ProductPlanCoverageDetail" value="SumInsuredDefualt">
                <span>{{ctItem.ProductElementCode}}</span>
              </r-row>
              </div>
              <div v-else>
                <r-row :model="ctItem.ProductPlanCoverageDetail" value="SumInsuredDefualt" :onClick="openCoverageDescription.bind(this, ctItem)">
                  <span v-if='!ctItem.ProductPlanCoverageDetail.showDes' class="fa fa-angle-down fa-1x">{{ctItem.ProductElementCode}}</span>
                  <span v-else class="fa fa-angle-up fa-1x">{{ctItem.ProductElementCode}}</span>
                </r-row>
                <template v-if="ctItem.ProductPlanCoverageDetail.showDes">
                  <div>
                    <p class="coverageDescription">{{ctItem.ProductPlanCoverageDetail.ctDesc}}</p>
                  </div>
                </template>
              </div>
            </div>
          </r-card>
          <r-card :title="$t('planSelection.notes')">
            <r-list :data="getListData" />
          </r-card>
        </r-swiper-item>
      </r-swiper>
    </div>
    <div v-else>
      <r-card :title="$t('planSelection.guaranteeRate')">
        <r-selector :title="$t('planSelection.plan')" :options="options" :model="model" value="PlanCode" class="planSelectionSelector" :onChange="changePlan"></r-selector>
        <r-table :data="planData" :class="{table:classStatus}" />
        <div v-for="(ctItem, ProductElementCode) in planItemSelector" :key="ProductElementCode">
          <!-- <r-row :value="$t('row.protected')" :model="coverage" :isLink="true">
          <span class="fa fa-lock fa-2x">{{$t('dfdsa')}}</span>
        </r-row> -->
          <div v-if='!ctItem.ProductPlanCoverageDetail.ctDesc'>
            <r-row :model="ctItem.ProductPlanCoverageDetail" value="SumInsuredDefualt">
              <span>{{ctItem.ProductElementCode}}</span>
            </r-row>
          </div>
          <div v-else>
            <r-row :model="ctItem.ProductPlanCoverageDetail" value="SumInsuredDefualt" :onClick="openCoverageDescription.bind(this, ctItem)">
              <span v-if='!ctItem.ProductPlanCoverageDetail.showDes' class="fa fa-angle-down fa-1x">{{ctItem.ProductElementCode}}</span>
              <span v-else class="fa fa-angle-up fa-1x">{{ctItem.ProductElementCode}}</span>
            </r-row>
            <template v-if="ctItem.ProductPlanCoverageDetail.showDes">
              <div>
                <p class="coverageDescription">{{ctItem.ProductPlanCoverageDetail.ctDesc}}</p>
              </div>
            </template>
          </div>
        </div>
      </r-card>
      <r-card :title="$t('planSelection.notes')">
        <r-list :data="getListData" />
      </r-card>
    </div>
    <slot></slot>
    <div v-if="showNum">
      <r-number :title="$t('planSelection.insuredNum')" :model="model" styleClass="round" :min="copyMin" :max="copyMax" value="NumberOfCopies"/>
    </div>
  </div>
</template>
<script>
import '../i18n/planSelection';
import {LoadingApi} from 'rainbow-mobile-core';
import {RNumber} from 'rainbow-mobile-number';
export default {
  components: {
    RNumber
  },
  data: function() {
    return {
      index: 0,
      classStatus: true,
      options: undefined,
      tabItems: undefined,
      planData: {
        head: [[{ text: '保险责任' }, { text: '保险金额' }]]
      },
      planItemSelector: undefined,
      copyMax: 0,
      copyMin: 0
    };
  },
  props: {
    showPlanList: Array,
    model: Object,
    selectedCode: String,
    showNum: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getListData() {
      return [
        {
          label: this.$t('planSelection.approvalCrowd'),
          value: '各个年龄段人群'
        },
        { label: this.$t('planSelection.limitPurchase'), value: '10份' },
        { label: this.$t('planSelection.term'), value: '1年' },
        {
          label: this.$t('planSelection.specialInstructions'),
          value: '本产品最终解释权由中国大地保险所有'
        }
      ];
    }
  },
  methods: {
    onTabItemClicked: function(index) {
      this.index = index;
      this.planItemSelector = this.showPlanList[index].PlanCoverageList[0].ChildPlanCoverageList;
      this.copyMinAndMax(this.showPlanList[index].PlanCode);
    },
    openCoverageDescription(ctItem, event) {
      ctItem.ProductPlanCoverageDetail.showDes = !ctItem.ProductPlanCoverageDetail.showDes;
    },
    changePlan(value) {
      this.model.PlanCode = value;
      const selectPlanItem = _.find(this.showPlanList, (planItem) => {
        return planItem.PlanCode == value;
      });
      this.planItemSelector = selectPlanItem.PlanCoverageList[0].ChildPlanCoverageList;
      this.copyMinAndMax(value);
    },
    copyMinAndMax(value) {
      const showPlanItem = _.find(this.showPlanList, (planItem) => {
        return planItem.PlanCode == value;
      });
      this.copyMax = showPlanItem.ProductPlanInfo.CopyMax;
      this.copyMin = showPlanItem.ProductPlanInfo.CopyMin;
      if (this.model.NumberOfCopies) {
        if (this.model.NumberOfCopies < this.copyMin) {
          this.model.NumberOfCopies = this.copyMin;
        } else if (this.model.NumberOfCopies > this.copyMax) {
          this.model.NumberOfCopies = this.copyMax;
        }
      } else {
        this.model.NumberOfCopies = this.copyMin;
      }
    }
  },
  async created() {
    LoadingApi.show(this, {
        text: this.$t('common.processing')
    });
    if (this.showPlanList.length < 4) {
      let tabItems = [];
      let i = 0;
      _.each(this.showPlanList, (item) => {
        let tabItem = {
          showdot: false,
          disabled: false,
          bage: '',
          text: item.PlanName,
          onClick: this.onTabItemClicked
        };
        if ((!this.selectedCode && i == 0) || (this.selectedCode && this.selectedCode == item.PlanCode)) {
          this.index = i;
          tabItem['selected'] = true;
        } else {
          tabItem['selected'] = false;
        }
        tabItems.push(tabItem);
        i++;
      });
      this.tabItems = tabItems;
      this.planItemSelector = this.showPlanList[this.index].PlanCoverageList[0].ChildPlanCoverageList;
      this.copyMinAndMax(this.showPlanList[this.index].PlanCode);
    } else {
      let options = [];
      let j = 0;
      _.each(this.showPlanList, (item) => {
        options.push({
          key: item.PlanCode,
          value: item.PlanName
        });
        if ((!this.model.PlanCode && j == 0) || (this.model.PlanCode && this.model.PlanCode == item.PlanCode)) {
          this.changePlan(item.PlanCode);
        }
        j++;
      });
      this.options = options;
    }
    LoadingApi.hide(this);
  }
};
</script>
<style scoped>
.weui-panel__hd {
  text-align: left;
}
.table > table > thead > tr > th:first-child {
  float: left;
  margin-left: 15px;
  color: #999999;
  border: none;
}
.table > table > thead > tr > th:last-child {
  float: right;
  margin-right: 15px;
  color: #999999;
  border: none;
}
.table > table > thead > tr {
  border-bottom: 1px solid #e5e5e5;
}
.coverageDescription {
  margin-left: 20px;
  text-align: left;
  margin-right: 20px;
  font-size: 14px;
}
.swiperHeight {
  min-height: 300px;
}
.planSelectionSelector >div>.weui-cell__ft>span{
  color:green;
}
.fa{
  color: black;
}
</style>
<i18n>

</i18n>