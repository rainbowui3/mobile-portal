<template>
    <r-page>
        <top :showBack="true" :title="$t('autoProposalInfoConfirm.title')" />
        <r-body>
            <r-card>
                <r-row :title="$t('carInfo.carInfo')" :model="pageModel" class="cardTitle" :onClick="gotoCorrect.bind(this,'carInfo')">
                    <div>
                        <span class="fa fa-edit fa-1x" />
                    </div>
                </r-row>
                <r-input :title="$t('insuredInfoEntryPassenger.licenseNo')" :model="model" value="licenseNo" :readonly="true" />
                <r-input :title="$t('autoProposalInfoConfirm.model')" :model="model" value="model" :readonly="true" />
                <r-input :title="$t('autoProposalInfoConfirm.vehicleCode')" :model="model" value="vehicleCode" :readonly="true" />
                <r-input :title="$t('carInfo.engineNo')" :model="model" value="engineNo" :readonly="true" />
                <r-input :title="$t('carInfo.regiDate')" :model="model" value="VehicleInitialRegDate" :readonly="true" />
            </r-card>
            <r-card>
                <r-row :title="$t('autoProposalInfoConfirm.proposalDetail')" :model="pageModel" class="cardTitle" :onClick="gotoCorrect.bind(this,'proposaoDetail')">
                    <div>
                        <span class="fa fa-edit fa-1x" />
                    </div>
                </r-row>
                <r-cell type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('autoProposalInfoConfirm.effectiveDate_comm')" :model="model.policy[0]" value="effectiveDate" :readonly="true" />
                    </r-cell>
                    <r-cell>
                        <r-switch :title="$t('autoProposalInfoConfirm.effectiveImmediately')" :model="model.policy[0]" value="isEffectiveImmediately" :readonly="true" />
                    </r-cell>
                </r-cell>
                <r-input :title="$t('autoProposalInfoConfirm.expireDate_comm')" :model="model.policy[0]" value="expireDate" :readonly="true" />
                <r-cell type="row">
                    <r-cell :span="7">
                        <r-input :title="$t('autoProposalInfoConfirm.effectiveDate_comp')" :model="model.policy[1]" value="effectiveDate" :readonly="true" />
                    </r-cell>
                    <r-cell>
                        <r-switch :title="$t('autoProposalInfoConfirm.effectiveImmediately')" :model="model.policy[1]" value="isEffectiveImmediately" :readonly="true" />
                    </r-cell>
                </r-cell>
                <r-input :title="$t('autoProposalInfoConfirm.expireDate_comp')" :model="model.policy[1]" value="expireDate" :readonly="true" />
            </r-card>
            <r-card>
                <list title="商业险" value="4682.56元" :data="model.policy[0].policyPlan" />
                <r-input title="交强险" :model="model.policy[1]" value="premium" :readonly="true" />
                <r-input title="车船税" :model="model.policy[0]" value="vehicleAndVesselTax" :readonly="true" />
                <r-input title="畅行无忧(A款)" :model="model.policy[0]" value="a" :readonly="true" />
                <r-input title="保费共计" :model="model" value="sumPremium" :readonly="true" />
            </r-card>
            <r-card>
                <r-row :title="$t('autoProposalInfoConfirm.specialAgreement')" :model="pageModel" class="cardTitle" :onClick="gotoCorrect.bind(this,'special')">
                    <div>
                        <span class="fa fa-edit fa-1x" />
                    </div>
                </r-row>
            </r-card>
            <r-card v-for="(item,idx) in specialAgreementList" :key="idx" @click.native="onDetailClick(item)">
                <r-row :title="$t('autoSupplementInfo.specialAgreement')" :model="item" value="ProductElementCode" />
                <r-row :title="$t('autoProposalInfoConfirm.specialAgreementName')" :model="item" value="ProductElementName" />
                <r-row :title="$t('autoProposalInfoConfirm.usageScope')" :model="item" value="usage" />
                <r-dialog :model="item" value="show" :disableMask="false">
                    <r-row :title="$t('autoSupplementInfo.agreementContent')" :model="pageModel" value="title" />
                    <div class="agreementContent">{{item.Content}}</div>
                    <div @click="closeDialog(item, idx)">
                        <span class="vux-close">X</span>
                    </div>
                </r-dialog>
            </r-card>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="goto">{{$t('button.submit')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../i18n/autoProposalInfoConfirm';
import '../../../../i18n/carInfo';
import '../../../../i18n/insuredInfoEntryPassenger';
import '../../../../i18n/autoSupplementInfo';
import '../../../../i18n/button';
export default {
  data() {
    return {
      pageModel: {},
      model: {
        sumPremium: '6832.56元',
        policy: [
          {
            effectiveDate: '2018-01-01',
            vehicleAndVesselTax: '450元',
            a: '150元',
            policyPlan: [
              {
                label: '车辆损失保险(23.09万)',
                value: '1703.79元'
              },
              {
                label: '第三者责任保险(50万)',
                value: '1958.00元'
              },
              {
                label: '车上人员责任保险(司机)',
                value: '410.00元'
              },
              {
                label: '不计免赔特约险',
                value: '610.77元'
              }
            ]
          },
          {
            premium: '950元'
          }
        ]
      },
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
          CanBeDelete: 'Y',
          usage: '商业险、交强险'
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
          CanBeDelete: 'Y',
          usage: '商业险、交强险'
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
          SystemCode: 'TC00001',
          usage: '商业险、交强险'
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
          SystemCode: 'TC0004',
          usage: '商业险、交强险'
        }
      ],
      specialAgreementListPreviewer: []
    };
  },
  methods: {
    onDetailClick: function(data) {
      data.show = true;
      this.$forceUpdate();
    },
    closeDialog: function(data, idx) {
      this.specialAgreementList[idx].show = !data.show;
      this.$forceUpdate();
    },
    goto: function() {
      // Todo:跳转到下一个页面
    },
    gotoCorrect(des, event) {
      switch (des) {
        case 'carInfo':
            // Todo:跳转到carInfo页面
            this.$router.push({
              path: '/project/proposal/auto2e/CarAndOwnerInfoEntry',
              name: 'CarAndOwnerInfoEntry'
            });
          break;
        case 'proposaoDetail':
            this.$router.push({
              path: '/project/proposal/auto2e/AutoPlan',
              name: 'AutoPlan'
            });
          break;
        case 'special':
            this.$router.push({
              path: '/project/proposal/auto2e/AutoSupplementInfo',
              name: 'AutoSupplementInfo'
            });
          break;
      }
    }
  },
  created: function() {
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
