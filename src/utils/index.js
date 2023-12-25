import * as general from './general/index.js'
import * as vant from './vant/index.js'

export default {
  install: function (app) {
    Object.keys(general).forEach((key) => {
      app.config.globalProperties[key] = general[key]
    })
    Object.keys(vant).forEach((key) => {
      app.config.globalProperties[key] = vant[key]
    })
  }
}
