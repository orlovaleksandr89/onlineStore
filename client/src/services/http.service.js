import axios from 'axios'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndpoint

const token = localStorage.getItem('token')

axios.interceptors.request.use(
  (config) => {
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
