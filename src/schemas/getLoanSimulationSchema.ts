import { z } from 'zod'
import { VALID_UFS } from '../constants'

const minLoanValue = 50000

const ERROR_MESSAGES = (minInstallmentValue?: number) => ({
  MIN_LOAN_VALUE: `loan_value must be greater than or equal to ${minLoanValue}`,
  MIN_INSTALLMENT_VALUE: `installment_value must be greater than or equal to ${minInstallmentValue}`,
})

export const getLoanSimulationSchema = (loanValue?: string) => {
  const minInstallmentValue = loanValue ? +loanValue * (1 / 100) : 1

  return z.object({
    uf: z.enum(VALID_UFS),
    loan_value: z.coerce
      .number()
      .positive()
      .min(minLoanValue, ERROR_MESSAGES().MIN_LOAN_VALUE),
    installment_value: z.coerce
      .number()
      .positive()
      .min(
        minInstallmentValue,
        ERROR_MESSAGES(minInstallmentValue).MIN_INSTALLMENT_VALUE,
      ),
  })
}
