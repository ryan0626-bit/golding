import { model, Schema } from 'dynamoose'
import { v4 as uuid } from 'uuid'

const RequestSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
      default: () => uuid(),
    },
    email: String,
    message: String,
    roofType: String,
  },
  {
    saveUnknown: true,
  }
)

const RequestModel = model('golding-requests', RequestSchema)

export default RequestModel
