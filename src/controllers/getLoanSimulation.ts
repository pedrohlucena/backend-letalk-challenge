import { RequestHandler } from 'express'
import { GetLoanSimulation } from '../business'
import {
  GetLoanSimulationParameters,
  GetLoanSimulationQuery,
  ParamsDictionary,
} from '../models'
import { HTTP_STATUS_CODE } from '../constants'
import { errorResponse, schemaValidator } from '../utils'
import { getLoanSimulationSchema } from '../schemas'

export const getLoanSimulation: RequestHandler<
  ParamsDictionary,
  any,
  any,
  GetLoanSimulationParameters
> = (request, res, next) => {
  try {
    const schema = getLoanSimulationSchema(request.query.loan_value)

    const query = schemaValidator<
      GetLoanSimulationParameters,
      GetLoanSimulationQuery
    >(request.query, schema)

    const {
      uf,
      loan_value: loanValue,
      installment_value: installmentValue,
    } = query

    const business = new GetLoanSimulation()

    const response = business.getLoanSimulation(uf, loanValue, installmentValue)

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    next(errorResponse(error))
  }
}
