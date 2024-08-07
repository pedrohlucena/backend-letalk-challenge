import { z } from 'zod'
import { VALID_UFS } from '../constants'
import { cpfRegex } from '../regex'

const minLoanValue = 50000

const ERROR_MESSAGES = (minInstallmentValue?: number) => ({
  MIN_LOAN_VALUE: `loan_value must be greater than or equal to ${minLoanValue}`,
  MIN_INSTALLMENT_VALUE: `installment_value must be greater than or equal to ${minInstallmentValue}`,
  INVALID_CPF: `client_cpf must be in the 000.000.000-00 format`,
})

export const postLoanSchema = (loanValue?: number) => {
  const minInstallmentValue = loanValue ? loanValue * (1 / 100) : 1

  const errorMessages = ERROR_MESSAGES(minInstallmentValue)

  return z.object({
    client_cpf: z
      .string()
      .regex(cpfRegex, errorMessages.INVALID_CPF)
      .length(14),
    uf: z.enum(VALID_UFS),
    loan_value: z
      .number()
      .positive()
      .min(minLoanValue, errorMessages.MIN_LOAN_VALUE),
    installment_value: z
      .number()
      .positive()
      .min(minInstallmentValue, errorMessages.MIN_INSTALLMENT_VALUE),
  })
}
