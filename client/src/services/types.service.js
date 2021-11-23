import httpService from './http.service'

const typesEndpoint = '/types'

const typesService = {
  get: async () => {
    const { data } = await httpService.get(typesEndpoint)
    return data
  }
}
export default typesService
