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
        GET_PLANE_CODES_BY_PRODUCTID_AH: API_GATEWAY_PROXY + 'product/plan/v1/getPlanDefCodesByPrdIdForAH',
        GET_PLAN_DEF_BY_CODES: API_GATEWAY_PROXY + 'product/plan/v1/getPlanDefByCodes'
    }
};
