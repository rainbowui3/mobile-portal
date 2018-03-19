import Vue from 'vue';
import VueI18n from 'vue-i18n';
import common from './common';
import {zh_CN,en_US} from 'rainbow-mobile-core'
Vue.use(VueI18n);
_.merge(common["zh-CN"], zh_CN);
_.merge(common["en-US"], en_US);
const i18n = new VueI18n({
    locale: "zh-CN", 
    common, 
})
export default i18n;
