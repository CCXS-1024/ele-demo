import axios from 'axios'
import { showDialog } from 'vant'

const instance = axios.create({
  baseURL: '/api',
})

instance.interceptors.response.use((response) => {
  const { data: _data } = response
  const { code, data, msg } = _data
  
  if (code !== 0) {
    showDialog({
      message: '服务器请求有问题',
    }).then(() => {})
    return Promise.reject(msg)
  }
  return data
})
export default instance
