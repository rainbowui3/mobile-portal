<template>
    <r-page>
        <top :showBack="true" :title="$t('AutoModel.models')" />
        <r-body>
           <div v-if="carModelList && isFirst">
               <r-checker :max="1" :model="this" value="carModelKey" :data='firstDescCarModelList'  type="list"/>
           </div>
           <div v-if="showValidateJyList && !isFirst">
               <r-checker :max="1" :model="this" value="JyVehicleValidateKey" :data='secondDescCarModelList'  type="list"/>
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
import {SessionContext} from 'rainbow-foundation-cache';
export default {
  data() {
      return {
          show1: false,
          carModelKey: undefined,
          carModelList: undefined,
          qureyCarModelList: undefined,
          str: undefined,
          toastShow: false,
          checkCode: '',
          pmQueryNo: '',
          isFirst: true,
          JyVehicleValidateKey: undefined,
          showValidateJyList: undefined,
          validateCarModelList: undefined
      };
  },
  methods: {
      async submit() {
        LoadingApi.show(this, {
            text: this.$t('common.processing')
        });
        SessionContext.put('VEHICLE_KEY_SELECTED', this.carModelKey);
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
        if (this.isFirst) {
            const carModelItem = _.find(this.qureyCarModelList, (item) => {
            return item['JyVehicleList'][0]['VehicleCode'] == this.carModelKey;
            });
            const jyVehicleItem = carModelItem['JyVehicleList'][0];
            const requestParam = {
                RequestBody: {
                    VinNo: policyRiskComm['Vin'],
                    ComCode: '34010904',
                    MotorTypeCode: '11',
                    LimitLoadPerson: carModelItem['RatedPassengerCapacity'],
                    LimitLoad: jyVehicleItem['Tonnage'],
                    IndustryModelCode: jyVehicleItem['VehicleHyCode'],
                    EngineNo: policyRiskComm['EngineNo'],
                    MotorUsageTypeCode: '85',
                    EffectiveDate: policyComm['EffectiveDate'],
                    PurchasePrice: jyVehicleItem['Price'],
                    FirstRegisterDate: policyRiskComm['VehicleInitialRegDate']
                }
            };
            // console.log(JSON.stringify(requestParam));
            const url = `${UrlUtil.getConfigUrl('API_GATEWAY_PROXY', 'POLICY_API', 'AUTO_VALIDATE_VEHICLE')}`;
            AjaxUtil.call(url, requestParam, { 'method': 'POST' }).then((response) => {
                // debugger;
                // console.log(JSON.stringify(response));
                if (response.ResponseBody && response.ResponseBody.SameFlag == 'Y') {
                    const carModelBody = response['ResponseBody']['CarModelList'][0];
                    this.setValidateData(submission, policyRiskComm, policyRiskComp, carModelBody, jyVehicleItem);
                    this.pushUrl();
                } else if (response.ResponseBody && response.ResponseBody.SameFlag == 'N') {
                    // 当校验没通过，会返回多个精友数据供客户选择
                    if (response.ResponseBody.CarModelList && response.ResponseBody.CarModelList.length > 0) {
                        // 如果校验只返回一条数据直接跳转到下一个页面
                        if (response.ResponseBody.CarModelList.length == 1 && response.ResponseBody.CarModelList[0].JyVehicleList && response.ResponseBody.CarModelList[0].JyVehicleList.length == 1) {
                            const carModelBody = response.ResponseBody.CarModelList[0];
                            const jyVehicleItem = response.ResponseBody.CarModelList[0].JyVehicleList[0];
                            this.setValidateData(submission, policyRiskComm, policyRiskComp, carModelBody, jyVehicleItem);
                            this.pushUrl();
                        } else {
                            let showValidateJyList = [];
                            _.each(response.ResponseBody.CarModelList, (carModeItem) => {
                                _.each(carModeItem.JyVehicleList, (jyVehicleItem) => {
                                    const showjyListItem = {
                                        key: jyVehicleItem['VehicleCode'],
                                        value: `${jyVehicleItem['VehicleName']}&nbsp${jyVehicleItem['CarRemark']}&nbsp${jyVehicleItem['Seat']}${this.$t('AutoModel.seat')}&nbsp${jyVehicleItem['MarketDate']}${this.$t('AutoModel.style')}`,
                                        inlineDesc: `${this.$t('AutoModel.newCarPrice')}${jyVehicleItem['Price']}`
                                    };
                                    showValidateJyList.push(showjyListItem);
                                });
                            });
                            this.isFirst = false;
                            this.showValidateJyList = showValidateJyList;
                            this.validateCarModelList = response.ResponseBody.CarModelList;
                        }
                    }
                } else {
                    this.toastShow = true;
                }
                LoadingApi.hide(this);
            });
        } else {
            let validateJyVehicleSelect = null;
            let validateCarModelSelect = [];
            _.each(this.validateCarModelList, (validateCarmodelItem) => {
                validateJyVehicleSelect = _.find(validateCarmodelItem.JyVehicleList, (validateJyVehicleItem) => {
                    return validateJyVehicleItem['VehicleCode'] == this.JyVehicleValidateKey;
                });
                if (validateJyVehicleSelect) {
                    validateCarModelSelect = validateCarmodelItem;
                }
            });

            // 车型校验带出的有效值放入submission
            this.setValidateData(submission, policyRiskComm, policyRiskComp, validateCarModelSelect, validateJyVehicleSelect);
            this.pushUrl();
            LoadingApi.hide(this);
        }
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
        this.qureyCarModelList = value;
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
        this.carModelKey = SessionContext.get('VEHICLE_KEY_SELECTED');
      },
      setValidateData(submission, policyRiskComm, policyRiskComp, carModelSelect, JyVehicleSelect) {
            policyRiskComm['CarName'] = carModelSelect['CarName'];// 车款名称 //一丹说本来应该带到jy里面的字段，后期应该会改
            policyRiskComm['Power'] = JyVehicleSelect['Power'];// 功率
            policyRiskComm['VehicleQuality'] = JyVehicleSelect['FullWeight'];// 整备质量
            policyRiskComm['VehicleCode'] = JyVehicleSelect['VehicleCode'];// 车型代码
            policyRiskComm['IndustryModelCode'] = JyVehicleSelect['VehicleHyCode'];// 行业车型编码
            policyRiskComm['GasType'] = JyVehicleSelect['PowerTypeCode'];// 能源种类
            policyRiskComm['AnnouncedModel'] = JyVehicleSelect['IndustryVehicleCode'];// 公告型号
            policyRiskComm['NewVehiclePurchasePrice'] = JyVehicleSelect['Price'];// 新车购置价
            policyRiskComm['ApprovalSeatCount'] = JyVehicleSelect['Seat'];// 核定载客/核定座位数
            policyRiskComm['ApprovalQuality'] = JyVehicleSelect['Tonnage'];// 核定载质量
            policyRiskComm['Displacement'] = JyVehicleSelect['Displacement'];// 排量
            if (policyRiskComm['IsNewVehicle'] == 'N') {
                if (JyVehicleSelect['PowerTypeCode'] && (JyVehicleSelect['PowerTypeCode'] == 'D12' || JyVehicleSelect['PowerTypeCode'] == 'D9')) {
                    policyRiskComm['LicenseType'] = '16';// 号牌种类
                } else {
                    policyRiskComm['LicenseType'] = '02';// 号牌种类
                }
                policyRiskComp['LicenseType'] = policyRiskComm['LicenseType'];
            } else {
                policyRiskComm['LicenseType'] = '';
                policyRiskComp['LicenseType'] = policyRiskComm['LicenseType'];
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
            policyRiskComp['Displacement'] = policyRiskComm['Displacement'];
            SubmissionStore.setSubmission(submission);
      },
      pushUrl() {
        this.$router.push({
            path: '/quote/plan',
            query: this.$route.query
        });
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
    firstDescCarModelList() {
        return this.carModelList;
    },
    secondDescCarModelList() {
        return this.showValidateJyList;
    }
  }
};
</script>

<style>

</style>
