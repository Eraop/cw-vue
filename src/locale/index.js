import Vue from "vue";
import VueI18n from "vue-i18n";
import locales from "./locale";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import enLocale from "element-ui/lib/locale/lang/en";
import store from "../store/store.js";
Vue.use(VueI18n);
const lang = store.state.user.language;
// 自动设置语言
// const navLang = navigator.language;
// window.localStorage.setItem("language", navLang);
// const localLang = navLang === "zh-CN" || navLang === "en-US" ? navLang : false;
// const lang = localLang || window.localStorage.getItem("language") || "zh-CN";
// const lang = "en-US";
const messages = {
  "en-US": {
    message: locales["en-US"],
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  "zh-CN": {
    message: locales["zh-CN"],
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages: messages // set locale messages
});

export default i18n;

// 5.x版本
// Vue.config.lang = lang;

// 多语言配置
// const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
// const mergeEN = Object.assign(enLocale, locales['en-US']);
// Vue.locale('zh-CN', mergeZH);
// Vue.locale('en-US', mergeEN);
