import { UF_INTEREST_RATE_RELATION } from '../constants'
import { UF } from '../models'
import { calculateCompoundInterest } from '../utils'
import { v4 as uuid } from 'uuid'

export class GetInstallmentsProjection {
  getInstallmentsProjection(
    uf: UF,
    loanValue: number,
    installmentValue: number,
  ) {
    const interestRate = UF_INTEREST_RATE_RELATION[uf]

    const { installmentsProjection } = calculateCompoundInterest(
      loanValue,
      interestRate,
      installmentValue,
    )

    const items = installmentsProjection.map((installment) => ({
      id: uuid(),
      ...installment,
    }))

    return {
      items,
    }
  }
}
