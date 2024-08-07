import { RequestHandler } from 'express'
import { PostLoan } from '../business'
import { HTTP_STATUS_CODE } from '../constants'
import { OutputedPostLoanBody, ParamsDictionary, PostLoanBody } from '../models'
import { errorResponse, schemaValidator } from '../utils'
import { postLoanSchema } from '../schemas/postLoanSchema'

export const postLoan: RequestHandler<
  ParamsDictionary,
  any,
  PostLoanBody
> = async (request, res, next) => {
  try {
    const schema = postLoanSchema(request.body.loan_value)

    const loan = schemaValidator<PostLoanBody, OutputedPostLoanBody>(
      request.body,
      schema,
    )

    const business = new PostLoan()

    await business.postLoan(loan)

    return res.sendStatus(HTTP_STATUS_CODE.CREATED)
  } catch (error) {
    next(errorResponse(error))
  }
}
