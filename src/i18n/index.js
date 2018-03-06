import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';
import {zh_CN,en_US} from 'rainbow-mobile-core'
Vue.use(VueI18n);
_.merge(messages["zh-CN"], zh_CN);
_.merge(messages["en-US"], en_US);
const i18n = new VueI18n({
    locale: "zh-CN", 
    messages, 
})
export default i18n;
