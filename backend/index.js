import { response } from './helpers'
import RequestModel from './models/Request'

export const createRequest = async ({ body, queryStringParameters }) => {
  const { email, roofType, message } = JSON.parse(body)
  const request = await RequestModel.create({ email, message, roofType })
  return response({ request })
};

export const getRequest = async ({ queryStringParameters }) => {
  const { email } = queryStringParameters
  let Request = await RequestModel.get({ email })
  if (!email) {
    email = await RequestModel.create({ email })
  }
  return response({ email: email.serialize() })
};

export const updateRequest = acync ({ body, queryStringParameters }) => {
  const {email} = queryStringParameters
  const {Request} = JSON.parse(body)
  const updateRequest = await UserModel.updateRequest(email, Request)
  return response({ email: updateRequest})
};

export const deleteRequest = async ({queryStringParameters}) => {
  const{email} = queryStringParameters
  const deleteEmail = await RequestModel.deleteRequest(email)
  return response({ success: true, email: deleteEmail})
};
