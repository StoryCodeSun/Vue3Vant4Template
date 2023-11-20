import { getSto } from "@/utils";
import { BASE_URL, TIME_OUT } from "./config";
import request from "./request";

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
      const token = getSto("token");
      if (config.headers && token) {
        config.headers["token"] = token;
      }
      return config;
    },
    responseSuccessFn: (response) => {
      return response;
    },
  },
});

export default beginRequest;
