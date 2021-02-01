import { response } from "./helpers";
import RequestModel from "./models/Request";
import { sendEmail, sendText } from "./aws";

export const createRequest = async ({ body, queryStringParameters }) => {
  const { email, roofType, message } = JSON.parse(body);
  const request = await RequestModel.create({ email, message, roofType });
  let name = "bobby";
  let phoneNumber = "3018888888";
  const sentEmail = await sendEmail({
    name,
    email,
    phoneNumber,
    message: roofType,
  });
  return response({ sentEmail });
};

export const sendTextMessage = async ({ body }) => {
  const { name, phoneNumber, message } = JSON.parse(body);
  const sentMessage = await sendText({ name, phoneNumber, message });
  return response({ sentMessage });
};
