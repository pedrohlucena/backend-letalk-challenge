import { UF_INTEREST_RATE_RELATION } from '../constants'
import { UF } from '../models'
import { calculateCompoundInterest } from '../utils'

export class GetLoanSimulation {
  getLoanSimulation(uf: UF, loanValue: number, installmentValue: number) {
    const interestRate = UF_INTEREST_RATE_RELATION[uf]

    const { accumulatedAmount: totalToPay, monthsToPayOff } =
      calculateCompoundInterest(loanValue, interestRate, installmentValue)

    const totalInterest = totalToPay - loanValue

    return {
      loan_value: loanValue,
      interest_rate: interestRate,
      installment_value: installmentValue,
      total_interest: totalInterest,
      total_to_pay: totalToPay,
      months_to_pay_off: monthsToPayOff,
    }
  }
}
