import beginRequest from "..";
// 登录验证码
export const changeCodeApi = (data) =>
  beginRequest.request({
    method: "GET",
    url: "/xxxxxx",
    params: data,
  });
