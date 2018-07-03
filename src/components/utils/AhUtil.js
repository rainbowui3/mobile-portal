
import {PolicyStore, SchemaUtil} from 'rainbow-foundation-sdk';
export default{

    // 获取保单模型上的personInsured节点的param
    getRiskParam(newPolicy) {
      const policySchema = PolicyStore.getPolicySchema(newPolicy);
      let riskSchemaList = SchemaUtil.getSchemaByModelName({ 'ModelName': 'PolicyRisk' }, policySchema);
      let riskSchema = {};
      _.each(riskSchemaList, (item) => {
          if (item.ObjectCode != 'InsuredGroup') {
              riskSchema = item;
          }
      });
      let riskParam = {
          'ModelName': 'PolicyRisk',
          'ObjectCode': riskSchema.ObjectCode
      };
      return riskParam;
    }
};
