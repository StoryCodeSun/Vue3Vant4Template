import { getSto } from "@/utils/general/index.js";
import enUS from "./en-US.json"; // 英语
import zhCN from "./zh-CN.json"; // 简体中文
import zhHK from "./zh-HK.json"; // 繁体中文
// vant 语言包 更多语言: https://vant-contrib.gitee.io/vant/#/zh-CN/locale
import { Locale } from "vant";
import enUSV from "vant/lib/locale/lang/en-US"; // 英语
import zhCNV from "vant/lib/locale/lang/zh-CN"; // 简体中文
import zhHKV from "vant/lib/locale/lang/zh-HK"; // 繁体中文
let i18nConfig = {
  locale: getSto("language") ? getSto("language") : "zh-CN",
  globalInjection: true,
  messages: {
    "en-US": { ...enUS, ...enUSV },
    "zh-CN": { ...zhCN, ...zhCNV },
    "zh-HK": { ...zhHK, ...zhHKV },
  },
};

/**
 * 设置 Vant UI 组件库的多语言支持
 * @param {("en-US"|"zh-CN"|"zh-HK")} lang 语言可选项
 * @returns {void}
 * @example 调用示例
 * vantLocales('en-US');
 */
export function vantLocales(lang) {
  Locale.use(lang, i18nConfig.messages[lang]);
}


export default i18nConfig;
