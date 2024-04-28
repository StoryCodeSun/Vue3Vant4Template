import axios from 'axios'

/**
 * @class  mainRequest
 * 构造函数
 * @constructor
 * @param {object} config axios配置参数
 * @param {object} config.headers 请求头
 * @param {string} config.url 请求的URL
 * @param {*} config.params GET请求的数据
 * @param {*} config.data POST请求的数据
 * @param {object} config.interceptors 拦截器
 * @param {Function} config.interceptors.requestSuccessFn 请求成功拦截器
 * @param {Function} config.interceptors.requestFailureFn 请求失败拦截器
 * @param {Function} config.interceptors.responseSuccessFn 响应成功拦截器
 * @param {Function} config.interceptors.responseFailureFn 响应成功拦截器 / constructor(config) { this.instance = axios.create(config); this.instance.interceptors.request.use( (config) => { return config; }, (err) => { return err; }, ); this.instance.interceptors.response.use( (res) => { return res; }, (err) => { return err; }, ); this.instance.interceptors.request.use( config.interceptors?.requestSuccessFn, config.interceptors?.requestFailureFn, ); this.instance.interceptors.response.use( config.interceptors?.responseSuccessFn, config.interceptors?.responseFailureFn, ); }
 */

class mainRequest {
  constructor(config) {
    this.instance = axios.create(config)
    // 全局
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
    // 类
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }
  /**
   * @method
   * @param {object} config 配置参数
   * @param {object} config.headers 请求头
   * @param {string} config.url 请求的URL
   * @param {*} config.params GET请求的数据
   * @param {*} config.data POST请求的数据
   * @param {object} config.interceptors 拦截器
   * @param {Function} config.interceptors.requestSuccessFn 请求成功拦截器
   * @param {Function} config.interceptors.requestFailureFn 请求失败拦截器
   * @param {Function} config.interceptors.responseSuccessFn 响应成功拦截器
   * @param {Function} config.interceptors.responseFailureFn 响应成功拦截器
   * @param {("GET"|"POST"|"PUT"|"DELETE"|"PATCH"|"HEAD"|"OPTIONS")} config.method 请求方法
   * @returns {Promise} Promise对象，请求回调 / request(config) { if (config.interceptors?.requestSuccessFn) { console.log("config", config); config = config.interceptors.requestSuccessFn(config); } return new Promise((resolve, reject) => { this.instance .request(config) .then((res) => { if (config.interceptors?.responseSuccessFn) { res = config.interceptors.responseSuccessFn(res); } resolve(res); }) .catch((err) => { reject(err); }); }); }
   */
  request(config) {
    // 类单次
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  /**
   * get请求
   * @param {object} config 配置参数
   * @param {object} config.headers 请求头
   * @param {string} config.url 请求的URL
   * @param {*} config.params GET请求的数据
   * @param {*} config.data POST请求的数据
   * @returns {Promise} Promise
   */
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  /**
   * post请求
   * @param {object} config 配置参数
   * @param {object} config.headers 请求头
   * @param {string} config.url 请求的URL
   * @param {*} config.params GET请求的数据
   * @param {*} config.data POST请求的数据
   * @returns {Promise} Promise
   */
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  /**
   * delete请求
   * @param {object} config 配置参数
   * @param {object} config.headers 请求头
   * @param {string} config.url 请求的URL
   * @param {*} config.params GET请求的数据
   * @param {*} config.data POST请求的数据
   * @returns {Promise} Promise
   */
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  /**
   * patch请求
   * @param {object} config 配置参数
   * @param {object} config.headers 请求头
   * @param {string} config.url 请求的URL
   * @param {*} config.params GET请求的数据
   * @param {*} config.data POST请求的数据
   * @returns {Promise} Promise
   */
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default mainRequest
