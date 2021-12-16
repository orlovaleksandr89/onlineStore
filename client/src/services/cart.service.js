import httpService from './http.service'

const cartEndpoint = '/cart'

const cartService = {
  get: async (userId) => {
    const data = await httpService.get(cartEndpoint + '/' + userId)

    return data
  },
  addItem: async (userId, item) => {
    const data = await httpService.post(
      cartEndpoint + '/' + userId + '/addItem',
      {
        ...item
      }
    )
    return data
  },
  deleteItemFromCart: async (userId, _id) => {
    const data = await httpService.delete(
      cartEndpoint + '/' + userId + '/delete/' + _id
    )
    return data
  }
}

export default cartService
