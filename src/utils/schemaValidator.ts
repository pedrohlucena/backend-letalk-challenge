import { CODE_MESSAGES, HTTP_STATUS_CODE } from '../constants'
import { BusinessError } from '../exceptions'

export function schemaValidator<I, O>(body: I, schema: Zod.Schema<O>) {
  const result = schema.safeParse(body)

  if (!result.success) {
    const errorMessage = result.error.issues[0].message

    throw new BusinessError(
      CODE_MESSAGES.INVALID_INPUTS.code,
      errorMessage,
      HTTP_STATUS_CODE.BAD_REQUEST,
    )
  }

  return result.data
}
