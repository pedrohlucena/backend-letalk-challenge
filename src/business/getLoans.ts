import { LoanRepo } from '../repository'

export class GetLoans {
  repository: LoanRepo

  constructor() {
    this.repository = new LoanRepo()
  }

  async getLoans() {
    const items = await this.repository.get()

    return {
      items,
    }
  }
}
