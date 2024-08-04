import { MongoDbRepo } from '../repository'
import { ILoan, Loan } from '../models'

export class LoanRepo extends MongoDbRepo<ILoan> {
  constructor() {
    super(Loan)
  }
}
