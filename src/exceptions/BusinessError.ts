import { HTTP_STATUS_CODE } from '../constants'
import { CodeMessage } from '../models'

export class BusinessError extends Error {
  statusCode: number
  name: string
  message: string
  code: string

  constructor({ message, code }: CodeMessage) {
    super(`BusinessError: ${message}`)
    this.name = `BusinessError: ${message}`
    this.code = code
    this.message = message
    this.statusCode = HTTP_STATUS_CODE.BAD_REQUEST
  }
}
