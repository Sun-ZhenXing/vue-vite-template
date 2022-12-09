import axios from 'axios'

const request = axios.create({
  baseURL: '/api/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(config => {
  if (config.headers === undefined || config.headers.Authorization !== undefined) {
    return config
  }
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  // TODO: 错误处理
  console.log(error, '请求错误：请替换为你的错误处理逻辑')
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  if (response.data.code !== 0) {
    // TODO: 错误处理
    console.log(response.data, '响应错误：请替换为你的错误处理逻辑')
    return Promise.reject(response)
  }
  return response
}, error => {
  console.log(error)
  if (error.response && error.response.status === 401) {
    // TODO: 错误处理
    console.log(error, '未授权错误：请替换为你的错误处理逻辑')
  } else {
    // TODO: 各种不同类型的错误处理
    console.log(error, '网络错误：请替换为你的错误处理逻辑')
  }
  return Promise.reject(error)
})

export default request
