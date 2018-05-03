<template>
    <r-page>
        <top :title="$t('autoSupplementInfo.title')" :showBack="true" />
        <r-body>
            <!-- 投保人信息 -->
            <r-card>
                <r-cell type="row">
                    <r-cell :span="6">
                        <r-row :title="$t('common.holderInfo')" :model="pageModel" value="holderInfo" class="cardTitle" />
                    </r-cell>
                    <r-cell>
                        <r-switch :title="$t('autoSupplementInfo.sameWithOwner')" :model="pageModel" value="holderIsOwner" />
                    </r-cell>
                </r-cell>
                <r-selector :title="$t('carOwner.customerType')" :options="options_cusType" :model="model" value="customerType" :required="true" :novalidate="false" />
                <car-owner :model="model" :required="true" :novalidate="false" v-if="pageModel.holderIsOwner == false"/>
            </r-card>
            <!-- 被保人信息 -->
            <r-card>
                <r-cell type="row">
                    <r-cell :span="6">
                        <r-row :title="$t('common.insuredInfo')" :model="pageModel" value="holderInfo" class="cardTitle" />
                    </r-cell>
                    <r-cell>
                        <r-switch :title="$t('autoSupplementInfo.sameWithOwner')" :model="pageModel" value="insuredIsOwner" />
                    </r-cell>
                </r-cell>
                <car-owner :model="model" :required="true" :novalidate="false" v-if="pageModel.insuredIsOwner == false"/>
            </r-card>
            <!-- 验车信息 -->
            <r-card>
                <r-row :title="$t('autoSupplementInfo.inspectionInfo')" :model="pageModel" value="holderInfo" class="cardTitle" />
                <r-selector :title="$t('autoSupplementInfo.inspectionCondition')" :options="inspectionConditionList" :model="model" value="inspectionCondition" />
                <r-input :title="$t('autoSupplementInfo.inspectionChecker')" :model="model" value="inspectionChecker" :placeholder="$t('autoSupplementInfo.inputChecker')" />
                <r-date-time :title="$t('autoSupplementInfo.inspectionTime')" :model="model" value="inspectionTime" type="date" />
                <r-selector :title="$t('autoSupplementInfo.inspectionResult')" :model="model" value="inspectionResultCode" :options="inspectionResultCodeList" />
                <r-selector :title="$t('autoSupplementInfo.vehicleDamageLocation')" :model="model" value="vehicleDamageLocationCode" :options="vehicleDamageLocationCodeList" />
                <r-textarea :title="$t('autoSupplementInfo.inspectionDescription')" :model="model" value="inspectionDescription" :max="255" />
                <r-cell type="row">
                    <r-cell :span="6">
                        <r-checker :text="$t('autoSupplementInfo.photoUploadLater')" :model="model" value="isPhotoUploadLater" type="icon" />
                    </r-cell>
                    <r-cell :span="6">
                        <r-selector :title="$t('autoSupplementInfo.photoDelayDate')" :model="model" value="maxPhotoDelayDays" :options="maxPhotoDelayDaysList" />
                    </r-cell>
                </r-cell>
                <r-selector :title="$t('autoSupplementInfo.argueSolutionType')" :model="model" value="argueSolutionType" :options="argueSolutionTypeList" />
                <r-selector v-if="model.argueSolutionType && model.argueSolutionType == '1'" :title="$t('autoSupplementInfo.arbitrationCommissionCode')" :model="model" value="arbitrationCommissionCode" :options="arbitrationCommissionCodeList" />
            </r-card>
            <!-- 特别约定 -->
            <r-card>
                <r-row :title="$t('autoSupplementInfo.specialAgreement')" :model="pageModel" value="holderInfo" class="cardTitle" />
                <div v-for="(item, idx) in specialAgreementList" :key="idx">
                    <r-cell type="row">
                        <r-cell :span="1">
                            <span @click="modifyAgreement(item)">
                                <r-checker type="icon" :model="item" value="selected" />
                            </span>
                        </r-cell>
                        <r-cell>
                            <r-row :model="item" value="ProductElementCode" />
                        </r-cell>
                    </r-cell>
                    <r-cell>
                        <r-row :model="item" value="ProductElementName" :isLink="true" :onClick="onClick.bind(this,item,idx)" />
                    </r-cell>
                    <r-dialog :model="item" value="show" :disableMask="false">
                        <r-row :title="$t('autoSupplementInfo.agreementContent')" :model="pageModel" value="title" />
                        <div class="agreementContent">{{item.Content}}</div>
                        <div @click="closeDialog(item, idx)">
                            <span class="vux-close">X</span>
                        </div>
                    </r-dialog>
                </div>
            </r-card>
            <!-- 开票信息 -->
            <r-card>
                <r-row :title="$t('autoSupplementInfo.invoiceInfo')" :model="pageModel" value="holderInfo" class="cardTitle" />
                <r-selector :title="$t('autoSupplementInfo.copyDataFromType')" :model="model" value="copyDataFromData" :options="copyDataFromTypeList" />
                <r-input :title="$t('autoSupplementInfo.invoiceHead')" :model="model" value="companyName" />
                <r-switch :title="$t('autoSupplementInfo.needEInovice')" :model="model" value="needEIvoice" />
                <r-input :title="$t('common.mobile')" :model="model" value="mobile" :placeholder="$t('common.inputMobile')" />
                <r-input :title="$t('autoSupplement.taxPayerNumber')" :model="model" value="taxPayerNumber" :placeholder="$t('autoSupplement.inputTaxPayerNumber')" />
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="goto">{{$t('proposalConfirm.confirmInsure')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import CarOwner from '../../../../../components/CarOwner';
import '../../../../../i18n/autoSupplementInfo';
import '../../../../../i18n/proposalConfirm';
export default {
  components: {
    CarOwner
  },
  data() {
    return {
      // 存储一些页面上才会用到的模型
      pageModel: {
          holderIsOwner: false,
          insuredIsOwner: false
      },
      model: {},
      options_cusType: [
        { key: '1', value: '个人' },
        { key: '2', value: '机关' },
        { key: '3', value: '企业' }
      ],
      inspectionConditionList: [
        { key: '1', value: '验车情况1' },
        { key: '2', value: '验车情况2' }
      ],
      inspectionResultCodeList: [
        { key: '1', value: '验车结果1' },
        { key: '2', value: '验车结果2' }
      ],
      vehicleDamageLocationCodeList: [
        { key: '1', value: '车损位置1' },
        { key: '2', value: '车损位置2' }
      ],
      maxPhotoDelayDaysList: [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' },
        { key: '6', value: '6' },
        { key: '7', value: '7' }
      ],
      argueSolutionTypeList: [
        { key: '1', value: '仲裁' },
        { key: '2', value: '诉讼' }
      ],
      arbitrationCommissionCodeList: [
        { key: '1', value: '浦东新区仲裁委员会' },
        { key: '2', value: '洋泾仲裁委员会' }
      ],
      copyDataFromTypeList: [
        { key: '1', value: '同投保人' },
        { key: '2', value: '同被保人' },
        { key: '3', value: '第三方' }
      ],
      specialAgreementList: [
        {
          '@pk': 26001894428,
          '@type': 'ProductElement-ProductSpecialAgreement',
          BusinessObjectId: 200038639,
          BusinessUUID: '301132390_-12_A00155',
          Content: '空白特约',
          DefinitionSuperObjectName: 'PolicyForm',
          DiscriminatorValue: -12,
          ExtendsId: 26001894422,
          IsAutoGenerateChild: 'N',
          ProductElementCode: 'A00155',
          ProductElementId: 26001894428,
          ProductElementName: '空白特约',
          ProductId: 301132390,
          EffectiveFlag: 'Y',
          DefaultChoose: 'Y',
          ContentCanBeEdit: 'Y',
          CanBeDelete: 'Y'
        },
        {
          '@pk': 26001894453,
          '@type': 'ProductElement-ProductSpecialAgreement',
          BusinessObjectId: 200038639,
          BusinessUUID: '301132390_-12_A00156',
          Content:
            '本保单第一受益人为{BankName}银行。未经第一受益人书面同意，本保单不得做任何涉及或不涉及金额变化的批改，也不得支付任何赔款。',
          DefinitionSuperObjectName: 'PolicyForm',
          DiscriminatorValue: -12,
          ExtendsId: 26001894425,
          IsAutoGenerateChild: 'N',
          ProductElementCode: 'A00156',
          ProductElementId: 26001894453,
          ProductElementName: '第一受益人约定',
          ProductId: 301132390,
          EffectiveFlag: 'Y',
          DefaultChoose: 'N',
          ContentCanBeEdit: 'N',
          CanBeDelete: 'Y'
        },
        {
          '@pk': 26000023638,
          '@type': 'ProductElement-ProductSpecialAgreement',
          BusinessObjectId: 200038639,
          BusinessUUID: '301132390_-12_A00029',
          Content:
            '尊敬的客户：投保次日起，您可以通过本公司网页（www.95590.cn），客户服务电话\n（95590），营业网点核实保单及理赔信息，若对查询结果有异议，请致电本公司客户\n服务电话。',
          DiscriminatorValue: -12,
          ExtendsId: 300333480,
          IsAutoGenerateChild: 'N',
          ProductElementCode: 'A00029',
          ProductElementId: 26000023638,
          ProductElementName: '保单查询制度特别约定',
          ProductId: 301132390,
          DefaultChoose: 'N',
          ContentCanBeEdit: 'N',
          CanBeDelete: 'N',
          Required: 'N',
          SystemCode: 'TC00001'
        },
        {
          '@pk': 26001522004,
          '@type': 'ProductElement-ProductSpecialAgreement',
          BusinessObjectId: 200038639,
          BusinessUUID: '301132390_-12_A00031',
          Content:
            '通赔提示\n被保险车辆出险后，被保险人可选择保险人在国内的任意一家车险全国通赔网点，就近接受查勘定损服务，并就近递交索赔资料、领取保险赔款，保险人不另外收取费用。被保险人可以通过登录www.95590.cn网站，查询各车险全国通赔网点的信息，查询赔案的处理进展情况，并对保险人的理赔服务进行监督。',
          DiscriminatorValue: -12,
          ExtendsId: 300333486,
          IsAutoGenerateChild: 'N',
          ProductElementCode: 'A00031',
          ProductElementId: 26001522004,
          ProductElementName: '通赔提示',
          ProductId: 301132390,
          DefaultChoose: 'N',
          ContentCanBeEdit: 'N',
          Required: 'Y',
          SystemCode: 'TC0004'
        }
      ]
    };
  },
  methods: {
    modifyAgreement: function(data) {
      // Todo:将选中的特别约定挂在保单模型上，或者从保单模型上取下特约
    },
    onClick: function(data, idx) {
      // Todo:展示特别约定详细信息

      this.specialAgreementList[idx].show = !data.show;
      // 因为这样走完之后，模板并没有发生改变，导致不会走钩子函数，不会触发update组件。
      this.$forceUpdate();
    },
    closeDialog: function(data, idx) {
      this.specialAgreementList[idx].show = !data.show;
      this.$forceUpdate();
    },
    goto: function() {
        // Todo:跳转到下一个页面
    }
  },
  computed: {},
  created: function() {
    // 给特约加上标识字段，与后台交互前需要删掉
    this.specialAgreementList.forEach(element => {
      element.show = false;
    });
  }
};
</script>

<style>
.cardTitle {
  color: #999;
}
.agreementContent {
  text-align: left;
  padding: 5px;
  margin: 5px;
}
</style>
