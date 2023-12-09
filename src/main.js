import { BASE_URL } from "@/service/config";
import * as vant from "@/utils/vant";
import "amfe-flexible";
import "normalize.css";
// import "@/assets/theme/theme.scss"
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/index.css";
import i18nConfig, { vantLocales } from "./locale/index";
import router from "./router";
import pinia from "./stores";
import * as utils from "./utils";
const i18n = createI18n(i18nConfig);
const app = createApp(App);
Object.keys(utils).forEach((key) => {
  app.config.globalProperties[key] = utils[key];
});
Object.keys(vant).forEach((key) => {
  app.config.globalProperties[key] = vant[key];
});
// const modules = import.meta.glob("./components/**/*.vue");
// Object.keys(modules).forEach(async (path) => {
//   const componentConfig = await modules[path]();
//   const componentName = path
//     .split("/")
//     .pop()
//     .replace(/\.\w+$/, "");
//   app.component(componentName, componentConfig.default || componentConfig);
// });
app.config.globalProperties.httpUrl = BASE_URL;
app.config.globalProperties.vantLocales = vantLocales;
app.use(pinia).use(router).use(i18n);
app.mount("#app");
