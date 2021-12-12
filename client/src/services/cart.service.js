import httpService from './http.service'

const cartEndpoint = '/cart'

const cartService = {
  get: async () => {
    const { data } = await httpService.get(cartEndpoint)
    return data
  },
  addItem: async (item) => {
    const { data } = await httpService.post(cartEndpoint + '/addItem', {
      ...item
    })
    return data
  }
}

export default cartService
