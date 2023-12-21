import { getSto } from "@/utils/general/index.js";
import { BASE_URL, BASE_API, TIME_OUT } from "./config";
import request from "./request";
const MODE = import.meta.env.MODE;
// 后端解决跨域 BASE_API | http
// 前端代理跨域 BASE_URL | 相对路径 /api
const beginRequest = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 请求拦截器
      const token = getSto("token");
      if (config.headers && token) {
        config.headers["token"] = token;
      }
      return config;
    },
    responseSuccessFn: (response) => {
      if (MODE == "development" && response.data?.code != 200) {
        alert(`后端接口出错啦-_-||༼ つ ◕_◕ ༽つ=code:${response.data?.code}=>` + response.data?.msg ?? response.data?.message);
      }
      // 响应拦截器
      return response.data;
    },
  },
});
export const fileRequest = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 请求拦截器
      const token = getSto("token");
      if (config.headers && token) {
        config.headers["token"] = token;
      }
      return config;
    },
    responseSuccessFn: (response) => {
      // 响应拦截器
      return response.data;
    },
  },
});
// 接口多域名的情况
export const xxxRequest = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 请求拦截器
      const token = getSto("token");
      if (config.headers && token) {
        config.headers["token"] = token;
      }
      return config;
    },
    responseSuccessFn: (response) => {
      // 响应拦截器
      return response.data;
    },
  },
});

export default beginRequest;
