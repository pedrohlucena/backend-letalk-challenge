import { RequestHandler } from 'express'
import { GetLoans } from '../business'
import { HTTP_STATUS_CODE } from '../constants'
import { errorResponse } from '../utils'

export const getLoans: RequestHandler = async (_, res, next) => {
  try {
    const business = new GetLoans()

    const response = await business.getLoans()

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    next(errorResponse(error))
  }
}
