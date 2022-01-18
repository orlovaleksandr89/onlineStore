import axios from 'axios'
import config from '../config.json'
import { localStorageServise } from './localStorage.service'

axios.defaults.baseURL = config.devFlag
  ? config.apiEndpoint
  : config.apiEndpointProduction

axios.interceptors.request.use(
  (config) => {
    const token = localStorageServise.getToken()
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
