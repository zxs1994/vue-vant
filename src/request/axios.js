import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://oa.guyuan.link'
  : 'https://oa.guyuan.link'

const request = axios.create({
  baseURL,
  headers: {}
})

request.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('全局拦截', error)
    return Promise.reject(error)
  }
)

// module.exports = request
export default request

