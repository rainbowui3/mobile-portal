'use strict';
let API_GATEWAY_PROXY = sessionStorage.getItem('project_config') ? JSON.parse(sessionStorage.getItem('project_config')).API_GATEWAY_PROXY : undefined;

module.exports = {
    DEFAULT_DATE_FORMATER: 'YYYY-MM-DD',
    DEFAULT_DATETIME_FORMATER: 'YYYY-MM-DD HH:mm',
    DEFAULT_DATETIME_SUBMIT_FORMATER: 'YYYY-MM-DD[T]HH:mm:ss',
    DEFAULT_YEAR_FORMATER: 'YYYY',
    DEFAULT_HOURS_FORMATER: 'YYYY-MM-DD HH',
	API_GATEWAY_PROXY: API_GATEWAY_PROXY,
    PRODUCT_API: {
        GET_PLANE_CODES_BY_PRODUCTID_AH: 'product/plan/v1/getPlanDefCodesByPrdIdForAH',
        GET_PLAN_DEF_BY_CODES: 'product/plan/v1/getPlanDefByCodes'
    },
    POLICY_API: {
        ACCURATE_QUOTE: 'auto/accurateQuote',
        QUOTE_TO_PROPOSAL: 'auto/quoteToProposal',
        AUTO_QUERY_VEHICLE: 'auto/queryVehicleInfo'
    },
    ROUTE_INFO: {
        GET_ROUTE: '/ratetable/public/ratetable/v1/lookupForList?code=mobileRouteConfig'
    },
    // 主险
    VEHICLE_LOSS_MIANCODE: 'C100121', // 机动车损失保险
    THIRD_DUTY_MAINCODE: 'C100122', // 第三者责任保险
    CAR_ROBBERY_MIANCODE: 'C100125', // 全车盗抢保险
    DRIVER_DUTY_MAINCODE: 'C100123', // 车上人员责任保险（司机）
    PASSENGER_DUTY_MAINCODE: 'C100124', // 车上人员责任保险（乘客）
    // 附加险
    GLASS_CRUSH_ADDITIONAL_CODE: 'C100126', // 玻璃单独破碎险
    NATURAL_LOSS_ADDITIONAL_CODE: 'C100127', // 自燃损失险
    CAR_BODY_SCRATCH_LOSS_ADDITIONAL_CODE: 'C100129', // 车身划痕损失险
    ENGINE_WAD_LOSS_ADDITIONAL_CODE: 'C100130', // 发动机涉水损失险
    REPAIR_COMPENSTORY_PAYMENT_ADDITIONAL_CODE: 'C100131', // 修理期间费用补偿险
    APPOINT_REPAIRSHOP_ADDITIONAL_CODE: 'C100135', // 指定修理厂险
    // 不计免赔附加险
    NONVEHICLE_LOSS_ADDITIONAL_CODE: 'C100136', // 不计免赔率险-机动车损失保险
    NONTHIRD_DUTY_ADDITIONAL_CODE: 'C100137', // 不计免赔率险-第三者责任保险
    NONDRIVER_DUTY_ADDITIONAL_CODE: 'C100138', // 不计免赔率险-车上人员责任保险（司机）
    NONPASSENGER_DUTY_ADDITIONAL_CODE: 'C100139', // 不计免赔率险-车上人员责任保险（乘客）
    PRIVATE_PLAN_CODE: 'DEA180064',
    CUSTOMER_PLAN_FLAG: '1'
};
