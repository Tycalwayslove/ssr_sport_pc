/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 20:49:42
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-20 06:03:01
 */
import qs from 'querystring'
import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://120.78.74.49:8080/api',
  timeout: 30000,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  data: {
    token: '',
    os: '',
    timestamp: '',
    nonce: ''
  }
})

// POST传参序列化
Axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回状态判断
Axios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    Axios(options)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
