import { response } from './helpers'
import RequestModel from './models/Request'

export const createRequest = async ({ body, queryStringParameters }) => {
  const { email, roofType, message } = JSON.parse(body)
  const request = await RequestModel.create({ email, message, roofType })
  return response({ request })
}
