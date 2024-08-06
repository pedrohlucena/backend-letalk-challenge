import { BusinessError } from '../exceptions'
import { Response } from 'express'

export function errorMiddleware(
  err: BusinessError,
  _: Request,
  res: Response,
  _2: NextFunction,
) {
  const { code, message, statusCode } = err
  const response = { code, message }
  res.status(statusCode).json(response)
}
