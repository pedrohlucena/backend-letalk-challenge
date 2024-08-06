import { CODE_MESSAGES, HTTP_STATUS_CODE } from '../constants'
import { BusinessError } from '../exceptions'

export function errorResponse(error: unknown) {
  if (error instanceof BusinessError) {
    throw error
  }

  const { code, message } = CODE_MESSAGES.INTERNAL_SERVER_ERROR

  throw new BusinessError(code, message, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
}
