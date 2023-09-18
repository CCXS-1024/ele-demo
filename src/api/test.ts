import axios from './index'

export const fetchTest = () => {
  return axios.get('test')
}
