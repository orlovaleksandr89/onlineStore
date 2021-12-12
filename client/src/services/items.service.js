import httpService from './http.service'

const itemsEndpoint = '/items'

const itemsService = {
  get: async () => {
    const { data } = await httpService.get(itemsEndpoint)
    return data
  },
  getItemById: async (id) => {
    const { data } = await httpService.get(itemsEndpoint + `/${id}`)
    return data
  }
}
export default itemsService
