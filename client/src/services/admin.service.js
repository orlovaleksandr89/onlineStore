import httpServise from './http.service'

const adminEndpoint = '/admin'

const adminService = {
  get: async () => {
    const { data } = await httpServise.get(adminEndpoint)
    return data
  },
  create: async (item) => {
    const data = await httpServise.post(adminEndpoint + '/createitem', item)
    return data
  },
  delete: async (id) => {
    const data = await httpServise.delete(adminEndpoint + '/deleteitem/' + id)
    return data
  }
}

export default adminService
