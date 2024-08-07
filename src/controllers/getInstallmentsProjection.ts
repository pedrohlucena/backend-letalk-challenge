import { RequestHandler } from 'express'
import { GetInstallmentsProjection } from '../business'
import {
  GetInstallmentsProjectionParameters,
  GetInstallmentsProjectionQuery,
  ParamsDictionary,
} from '../models'
import { HTTP_STATUS_CODE } from '../constants'
import { errorResponse, schemaValidator } from '../utils'
import { getInstallmentsProjectionSchema } from '../schemas'

export const getInstallmentsProjection: RequestHandler<
  ParamsDictionary,
  any,
  any,
  GetInstallmentsProjectionParameters
> = (request, res, next) => {
  try {
    const schema = getInstallmentsProjectionSchema(request.query.loan_value)

    const query = schemaValidator<
      GetInstallmentsProjectionParameters,
      GetInstallmentsProjectionQuery
    >(request.query, schema)

    const {
      uf,
      loan_value: loanValue,
      installment_value: installmentValue,
    } = query

    const business = new GetInstallmentsProjection()

    const response = business.getInstallmentsProjection(
      uf,
      loanValue,
      installmentValue,
    )

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    next(errorResponse(error))
  }
}
