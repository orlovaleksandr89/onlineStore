import axios from 'axios'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndpoint

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

const httpServise = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
export default httpServise
