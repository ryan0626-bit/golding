import { response } from './helpers';
import RequestModel from './models/Request';
import { sendEmail, sendText } from './aws';
import startCase from 'lodash/startCase';

export const createRequest = async ({ body, queryStringParameters }) => {
  const { name, phoneNumber, email, roofType, message = 'No Message' } = JSON.parse(body);
  const request = await RequestModel.create({ email, message, roofType });
  const sentEmail = await sendEmail({
    name,
    email,
    phoneNumber,
    message: `Roof Type Selected: ${startCase(roofType)}\n\n Additional Message: ${message}`,
  });
  return response({ sentEmail });
};

export const sendTextMessage = async ({ body }) => {
  const { name, phoneNumber, message } = JSON.parse(body);
  const sentMessage = await sendText({ name, phoneNumber, message });

  return response({ sentMessage });
};
