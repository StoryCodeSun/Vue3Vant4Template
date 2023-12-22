import { BASE_URL } from "@/service/config";
import "amfe-flexible";
import "normalize.css";
// import "@/assets/theme/theme.scss"
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import VWave from 'v-wave'
import "./assets/index.css";
import i18nConfig, { vantLocales } from "./locale/index";
import router from "./router";
import pinia from "./stores";
import utils from './utils';
const i18n = createI18n(i18nConfig);
const app = createApp(App);

globalThis.codeSun = 'codeSun'

// app.provide("Global", utils);

app.config.globalProperties.httpUrl = BASE_URL;
app.config.globalProperties.vantLocales = vantLocales;
app.use(pinia).use(router).use(i18n).use(utils).use(VWave);
app.mount("#app");
