import httpServise from './http.service'

const adminEndpoint = '/admin'

const adminService = {
  get: async () => {
    const { data } = await httpServise.get(adminEndpoint)
    return data
  },
  post: async (url, item) => {
    const data = await httpServise.post(adminEndpoint + url, item)
    return data
  },
  delete: async (id) => {
    const data = await httpServise.delete(adminEndpoint + '/deleteitem/' + id)
    return data
  }
}

export default adminService
