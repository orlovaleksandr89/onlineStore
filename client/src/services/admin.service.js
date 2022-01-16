import httpServise from './http.service'

const adminEndpoint = '/admin'

const adminService = {
  get: async () => {
    const { data } = await httpServise.get(adminEndpoint)
    return data
  },
  createItem: async (item) => {
    const data = await httpServise.post(adminEndpoint + '/createitem', item)
    return data
  },
  delete: async (id) => {
    const data = await httpServise.delete(adminEndpoint + '/deleteitem/' + id)
    return data
  },
  update: async (id, payload) => {
    const data = await httpServise.post(adminEndpoint + '/updateitem', {
      id,
      payload
    })
    return data
  },
  createType: async (type) => {
    const { data } = await httpServise.post(adminEndpoint + '/createtype', {
      type
    })
    return data
  }
}

export default adminService
