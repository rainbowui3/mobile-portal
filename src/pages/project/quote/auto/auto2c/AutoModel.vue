<template>
    <r-page>
        <top :showBack="true" :title="$t('AutoModel.models')" />
        <r-body>
           <div v-if="carModelList">
               <r-checker :max="1" :model="this" value="carModelKey" :data='inlineDescList'  type="list"/>
           </div>
           <div v-if="str">              
              <r-dialog  :model="this" value="show1">
                  <r-input :title="$t('AutoModel.vcode')" :model="this" value="checkCode" :right="true" :required="true">
                      <img class="weui-vcode-img" :src="str"/>
                  </r-input>
                  <div>
                      <r-button type="primary" :mini="true" :onClick="confirm">{{$t('common.confirm')}}</r-button>
                  </div>
              </r-dialog>
           </div>      
            <r-toast :model="this" value="toastShow" :text="$t('AutoModel.error')" type='text'/>
        </r-body>
        <r-tab-bar>
            <r-button type="primary" :onClick="submit">{{$t('AutoModel.submit')}}</r-button>
        </r-tab-bar>
    </r-page>
</template>

<script>
import '../../../../../i18n/AutoModel';
import {SubmissionStore} from 'rainbow-foundation-sdk';
import {UrlUtil} from 'rainbow-foundation-tools';
import {LoadingApi} from 'rainbow-mobile-core';
export default {
  data() {
      return {
          show1: false,
          carModelKey: undefined,
          carModelList: undefined,
          CarModelListDatas: undefined,
          str: undefined,
          toastShow: false,
          checkCode: '',
          pmQueryNo: ''
      };
  },
  methods: {
      async submit() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        // debugger;
        const submission = SubmissionStore.getSubmission();
        const submissionProductList = SubmissionStore.getPolicy(submission);
        const policyComp = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DFA';
        });
        let policyRiskComp = policyComp['PolicyLobList'][0]['PolicyRiskList'][0];
        const policyComm = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DEA';
        });
        let policyRiskComm = policyComm['PolicyLobList'][0]['PolicyRiskList'][0];
        const carModelItem = _.find(this.CarModelListDatas, (item) => {
            return item['JyVehicleList'][0]['VehicleCode'] == this.carModelKey;
        });
        const jyVehicleItem = carModelItem['JyVehicleList'][0];
        const requestParam = {
            RequestBody: {
                VinNo: policyRiskComm['Vin'],
                ComCode: '34010904',
                MotorTypeCode: policyRiskComm['VehicleKindTcCode'],
                LimitLoadPerson: carModelItem['RatedPassengerCapacity'],
                LimitLoad: carModelItem['tonnage'],
                IndustryModelCode: jyVehicleItem['vehicleHyCode'],
                EngineNo: policyRiskComm['EngineNo'],
                MotorUsageTypeCode: 85,
                EffectiveDate: policyComm['EffectiveDate'],
                PurchasePrice: jyVehicleItem['Price'],
                FirstRegisterDate: policyRiskComm['VehicleInitialRegDate']
            }
        };
        const url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'POLICY_API', 'AUTO_VALIDATE_VEHICLE')}`;
        AjaxUtil.call(url, requestParam, { 'method': 'POST' }).then((response) => {
            // debugger;
            if (response.ResponseBody && response.ResponseBody.SameFlag == 'Y') {
                const carModelBody = response['ResponseBody']['CarModelList'][0];
                policyRiskComm['CarName'] = carModelBody['CarName'];// 车款名称
                policyRiskComm['Power'] = jyVehicleItem['Power'];// 功率
                policyRiskComm['VehicleQuality'] = jyVehicleItem['FullWeight'];// 整备质量
                policyRiskComm['VehicleCode'] = jyVehicleItem['VehicleCode'];// 车型代码
                policyRiskComm['IndustryModelCode'] = jyVehicleItem['VehicleHyCode'];// 行业车型编码
                policyRiskComm['GasType'] = jyVehicleItem['PowerTypeCode'];// 能源种类
                policyRiskComm['AnnouncedModel'] = jyVehicleItem['IndustryVehicleCode'];// 公告型号
                policyRiskComm['NewVehiclePurchasePrice'] = jyVehicleItem['Price'];// 新车购置价
                policyRiskComm['ApprovalSeatCount'] = jyVehicleItem['Seat'];// 核定载客/核定座位数
                policyRiskComm['ApprovalQuality'] = jyVehicleItem['Tonnage'];// 核定载质量
                policyRiskComm['Displacement'] = jyVehicleItem['Displacement'];// 排量
                if (jyVehicleItem['PowerTypeCode'] && (jyVehicleItem['PowerTypeCode'] == 'D12' || jyVehicleItem['PowerTypeCode'] == 'D9')) {
                    policyRiskComm['LicenseType'] = '16';// 号牌种类
                } else {
                    policyRiskComm['LicenseType'] = '02';// 号牌种类
                }
                policyRiskComp['Power'] = policyRiskComm['Power'];
                policyRiskComp['VehicleQuality'] = policyRiskComm['VehicleQuality'];
                policyRiskComp['VehicleCode'] = policyRiskComm['VehicleCode'];
                policyRiskComp['IndustryModelCode'] = policyRiskComm['IndustryModelCode'];
                policyRiskComp['GasType'] = policyRiskComm['GasType'];
                policyRiskComp['AnnouncedModel'] = policyRiskComm['AnnouncedModel'];
                policyRiskComp['NewVehiclePurchasePrice'] = policyRiskComm['NewVehiclePurchasePrice'];
                policyRiskComp['ApprovalSeatCount'] = policyRiskComm['ApprovalSeatCount'];
                policyRiskComp['ApprovalQuality'] = policyRiskComm['ApprovalQuality'];
                policyRiskComp['CarName'] = policyRiskComm['CarName'];
                policyRiskComp['LicenseType'] = policyRiskComm['LicenseType'];
                policyRiskComp['Displacement'] = policyRiskComm['Displacement'];
                SubmissionStore.setSubmission(submission);

                this.$router.push({
                    path: '/quote/autoModel',
                    query: this.$route.query
                });
            } else if (response.ResponseBody && response.ResponseBody.SameFlag == 'N') {
                // 当校验没通过，会返回多个精友数据供客户选择

            } else {
                this.toastShow = true;
            }
            LoadingApi.hide(this);
        });
      },
      async confirm() {
        this.show1 = false;
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        const submission = SubmissionStore.getSubmission();
        const submissionProductList = SubmissionStore.getPolicy(submission);
        const policyComm = _.find(submissionProductList, (policyItem) => {
            return policyItem['ProductCode'] == 'DEA';
        });
        let policyRisk = policyComm['PolicyLobList'][0]['PolicyRiskList'][0];
        const requestParam = {
            RequestBody: {
                VinNo: policyRisk['Vin'],
                ComCode: '34010904',
                CheckCode: this.checkCode,
                PmQueryNo: this.pmQueryNo
            }
        };
        const url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'POLICY_API', 'AUTO_QUERY_VEHICLE')}`;
        AjaxUtil.call(url, requestParam, { 'method': 'POST' }).then((response) => {
            if (response.ResponseBody) {
                this.getData(response.ResponseBody.CarModelList);
            } else {
                // 验证码输入错误
                this.toastShow = true;
            }
            LoadingApi.hide(this);
        });
      },
      getData(value) {
        let carModelList = [];
        this.CarModelListDatas = value;
        _.each(value, (carModelItem) => {
            if (carModelItem['JyVehicleList'] && carModelItem['JyVehicleList'].length > 0) {
                const jyVehicleItem = carModelItem['JyVehicleList'][0];
                const listItem = {
                    key: jyVehicleItem['VehicleCode'],
                    value: `${jyVehicleItem['VehicleName']}&nbsp${jyVehicleItem['CarRemark']}&nbsp${jyVehicleItem['Seat']}${this.$t('AutoModel.seat')}&nbsp${jyVehicleItem['MarketDate']}${this.$t('AutoModel.style')}`,
                    inlineDesc: `${this.$t('AutoModel.newCarPrice')}${jyVehicleItem['Price']}`
                };
                carModelList.push(listItem);
            }
        });
        this.carModelList = carModelList;
      }
  },
  async created() {
      LoadingApi.show(this, {
          text: this.$t('common.processing')
      });
      const submission = SubmissionStore.getSubmission();
      const submissionProductList = SubmissionStore.getPolicy(submission);
      const policyComm = _.find(submissionProductList, (policyItem) => {
          return policyItem['ProductCode'] == 'DEA';
      });
      let policyRisk = policyComm['PolicyLobList'][0]['PolicyRiskList'][0];
      const requestParam = {
          RequestBody: {
              VinNo: policyRisk['Vin'],
              ComCode: '34010904'
          }
      };
      const url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'POLICY_API', 'AUTO_QUERY_VEHICLE')}`;
      AjaxUtil.call(url, requestParam, { 'method': 'POST' }).then((response) => {
          if (response.ResponseBody && response.ResponseBody.checkCode) {
              this.pmQueryNo = response.ResponseBody.PmQueryNo;
              let str = `data:image/png;base64,${response.ResponseBody.CheckCode}`;
              this.str = str;
              this.show1 = true;
          } else if (response.ResponseBody && response.ResponseBody.CarModelList) {
              this.getData(response.ResponseBody.CarModelList);
          } else {
              this.toastShow = true;
          }
          LoadingApi.hide(this);
      });
  },
  computed: {
    inlineDescList() {
        return this.carModelList;
    }
  }
};
</script>

<style>

</style>
