import { apiConfig } from '../api.config'

export class Http {
  static get (url, params, successCb, errorCb) {
    const reqUrl = apiConfig[url][process.env.NODE_ENV]
    const reqObj = {
      url: reqUrl,
      data: params,
      method: 'GET',
      success: successCb,
      fail: errorCb
    }
    wx.request(reqObj)
  }

  static post (url, params, successCb, errorCb) {
    const reqUrl = apiConfig[url][process.env.NODE_ENV]
    const reqObj = {
      reqUrl,
      params,
      method: 'POST',
      success: successCb,
      fail: errorCb
    }
    wx.request(reqObj)
  }
}
