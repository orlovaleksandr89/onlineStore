import httpServise from './http.service'

const adminEndpoint = '/admin'

const adminService = {
  get: async () => {
    const { data } = await httpServise.get(adminEndpoint)
    return data
  },
  post: async (url, data) => {
    const { response } = await httpServise.post(adminEndpoint + url, data)
    return response
  }
}

export default adminService
