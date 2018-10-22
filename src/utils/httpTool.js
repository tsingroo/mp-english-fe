import Axios from 'axios'
import { apiConfig } from '../api.config'

export class Http {
  static get(url, params, withCredential = false) {
    const reqUrl = apiConfig[url][process.env.NODE_ENV]
    return Axios.get(reqUrl, params, withCredential)
  }

  static post(url, params, withCredential = false) {
    const reqUrl = apiConfig[url][process.env.NODE_ENV]
    return Axios.post(reqUrl, params, withCredential)
  }
}