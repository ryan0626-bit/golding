import axios from 'axios';

const baseUrl = process.env.REACT_APP_IS_OFFLINE
  ? 'http://127.0.0.1:5001'
  : 'https://paxbjn2oj7.execute-api.us-east-1.amazonaws.com';
const url = `${baseUrl}/${process.env.REACT_APP_STAGE}`;

export const sendText = async payload => {
  const resp = await axios.post(`${url}/text`, payload);
  return resp.data;
};

export const sendRequest = async payload => {
  const resp = await axios.post(`${url}/request`, payload);
  return resp.data;
};
