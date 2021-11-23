import httpService from './http.service'

const itemsEndpoint = '/items'
const singleItemEndpoint = '/singleitem'

const itemsService = {
  get: async () => {
    const { data } = await httpService.get(itemsEndpoint)
    return data
  },
  getItemById: async (id) => {
    const { data } = await httpService.get(singleItemEndpoint + `/${id}`)
    return data
  }
}
export default itemsService
