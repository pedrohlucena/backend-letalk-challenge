import { UF_INTEREST_RATE_RELATION } from '../constants'
import { PostLoanBody } from '../models'
import { LoanRepo } from '../repository'

export class PostLoan {
  repository: LoanRepo

  constructor() {
    this.repository = new LoanRepo()
  }

  async postLoan(loan: PostLoanBody) {
    const interestRate = UF_INTEREST_RATE_RELATION[loan.uf]
    const now = new Date()

    await this.repository.create({
      ...loan,
      interest_rate: interestRate,
      creation_date: now,
    })
  }
}
