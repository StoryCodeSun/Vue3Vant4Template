import beginRequest from "..";

export const requestAddressData = () =>
  beginRequest.request({
    method: "GET",
    url: "/xxx",
  });
