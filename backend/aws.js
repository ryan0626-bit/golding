import { SESV2, SNS } from 'aws-sdk'

const ses = new SESV2()
const sns = new SNS()

export const sendEmail = async ({ name = '', email = '', phoneNumber = '', message = '' }) => {
  const params = {
    Destination: {
      ToAddresses: ['ryan.weaver718@gmail.com', 'ryan062692@gmail.com'],
      Message: {
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
        Source: 'ryan.weaver718@gmail.com',
      },
    },
  }

  const { MessageId } = await ses.sendEmail(params).promise()
  return { messageId: MessageId, name, email, phoneNumber, message }
}

export const sendText = async ({ name = '', email = '', phoneNumber = '', message = '' }) => {
  const params = {
    Message: `${name} requested contact their email: ${email}, phone: ${phoneNumber}, message: ${message}`,
    PhoneNumber: '3011111111',
  }
  const response = await sns.publish(params).promise()

  return { response, name, email, phoneNumber, message }
}
