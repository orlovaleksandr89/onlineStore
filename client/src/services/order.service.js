import httpService from './http.service'

const orderEndpoint = '/orders'

const orderServise = {
  get: async (userId) => {
    const data = await httpService.get(orderEndpoint + '/' + userId)
    return data
  },
  create: async (userId, orderItems, paymentId, totalPrice) => {
    const data = await httpService.post(
      orderEndpoint + '/' + userId + '/create',
      {
        orderItems,
        paymentId,
        totalPrice
      }
    )
    return data
  }
}

export default orderServise
