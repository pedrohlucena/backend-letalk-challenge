import { RequestHandler } from 'express'
import { PostLoan } from '../business'
import { HTTP_STATUS_CODE } from '../constants'
import { ParamsDictionary, PostLoanBody } from '../models'

export const postLoan: RequestHandler<
  ParamsDictionary,
  any,
  PostLoanBody
> = async (request, res, _2) => {
  try {
    const loan = request.body

    const business = new PostLoan()

    await business.postLoan(loan)

    return res.sendStatus(HTTP_STATUS_CODE.CREATED)
  } catch (error) {
    console.log(error)
  }
}
