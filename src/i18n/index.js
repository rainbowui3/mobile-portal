import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';
import {zh_CN,en_US} from 'rainbow-mobile-core'
Vue.use(VueI18n);
_.merge(messages.zh, zh_CN);
_.merge(messages.en, en_US);
const i18n = new VueI18n({
    locale: "zh", 
    messages, 
})
export default i18n;
