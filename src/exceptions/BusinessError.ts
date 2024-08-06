import { HTTP_STATUS_CODE } from '../constants'

export class BusinessError extends Error {
  name: string
  code: string
  message: string
  statusCode: HTTP_STATUS_CODE

  constructor(code: string, message: string, statusCode?: HTTP_STATUS_CODE) {
    super(`BusinessError: ${message}`)
    this.name = `BusinessError: ${message}`
    this.code = code
    this.message = message
    this.statusCode = statusCode || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR
  }
}
