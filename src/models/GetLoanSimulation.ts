import { UF } from '../models'

export type GetLoanSimulationParameters = Partial<{
  uf: string
  loan_value: string
  installment_value: string
}>

export type GetLoanSimulationQuery = {
  uf: UF
  loan_value: number
  installment_value: number
}
