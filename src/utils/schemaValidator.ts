import { CODE_MESSAGES } from '../constants'
import { CodeMessage } from '../models'
import { BusinessError } from '../exceptions'

export function schemaValidator(body: unknown, schema: Zod.Schema) {
  const result = schema.safeParse(body)

  if (!result.success) {
    const errorMessage = result.error.issues[0].message

    const codeMessage: CodeMessage = {
      code: CODE_MESSAGES.INVALID_INPUTS.code,
      message: errorMessage,
    }

    throw new BusinessError(codeMessage)
  }

  return result.data
}
