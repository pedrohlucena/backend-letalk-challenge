import { RequestHandler } from 'express'
import { GetInstallmentsProjection } from '../business'
import {
  GetInstallmentsProjectionParameters,
  ParamsDictionary,
  UF,
} from '../models'
import { CODE_MESSAGES, HTTP_STATUS_CODE, VALID_UFS } from '../constants'

export const getInstallmentsProjection: RequestHandler<
  ParamsDictionary,
  any,
  any,
  GetInstallmentsProjectionParameters
> = (request, res, _2) => {
  try {
    const {
      uf,
      loan_value: loanValue,
      installment_value: installmentValue,
    } = request.query

    if (!uf || !loanValue || !installmentValue) {
      return res
        .status(HTTP_STATUS_CODE.BAD_REQUEST)
        .json(CODE_MESSAGES.MISSING_PARAMETERS)
    }

    if (!VALID_UFS.includes(uf)) {
      return res
        .status(HTTP_STATUS_CODE.BAD_REQUEST)
        .json(CODE_MESSAGES.INVALID_UF)
    }

    const business = new GetInstallmentsProjection()

    const response = business.getInstallmentsProjection(
      uf as UF,
      +loanValue,
      +installmentValue,
    )

    return res.status(HTTP_STATUS_CODE.OK).json(response)
  } catch (error) {
    console.log(error)
  }
}
