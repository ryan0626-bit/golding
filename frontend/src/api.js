import axios from 'axios';
console.log('process', process.env);
const baseUrl = process.env.REACT_APP_IS_LOCAL
  ? 'http://127.0.0.1:5001'
  : 'https://paxbjn2oj7.execute-api.us-east-1.amazonaws.com';
const url = `${baseUrl}/${process.env.REACT_APP_STAGE}`;
console.log({ url });

export const sendText = async payload => {
  const resp = await axios.post(`${url}/text`, payload);
  return resp.data;
};

export const sendRequest = async payload => {
  const resp = await axios.post(`${url}/request`, payload);
  return resp.data;
};
