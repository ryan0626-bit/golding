import { SESV2, SNS } from 'aws-sdk';

const ses = new SESV2();
const sns = new SNS();

export const sendEmail = async ({ name = '', email = '', phoneNumber = '', message = '' }) => {
  const params = {
    Destination: {
      ToAddresses: ['goldingcompanies@gmail.com', 'info@goldingcompanies.com'],
    },
    Content: {
      Simple: {
        Body: {
          Html: {
            Data: `<div style="display:flex; flex-direction=column">
                    <div>Name: ${name}</div>
                    <div>Email: ${email}</div>
                    <div>Phone: ${phoneNumber}</div>
                    <div>Message: ${message}</div>
                  </div>`,
          },
        },
        Subject: {
          Data: 'New Estimate Request',
        },
      },
    },

    FromEmailAddress: 'info@goldingcompanies.com',
  };

  const { MessageId } = await ses.sendEmail(params).promise();
  return { messageId: MessageId, name, email, phoneNumber, message };
};

export const sendText = async ({ name = '', email = '', phoneNumber = '', message = '' }) => {
  const PhoneNumber = '+13017889827';
  // const PhoneNumber = '+12024300948';
  const params = {
    Message: `${name} requested contact their email: ${email}, phone: ${phoneNumber}, message: ${message}`,
    PhoneNumber,
  };
  const { MessageId } = await sns.publish(params).promise();

  return { messageId: MessageId, name, email, phoneNumber, message };
};
