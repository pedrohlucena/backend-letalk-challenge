import { UF } from '../models'

export type PostLoanBody = Partial<{
  client_cpf: string
  uf: string
  loan_value: number
  installment_value: number
}>

export type OutputedPostLoanBody = {
  client_cpf: string
  uf: UF
  loan_value: number
  installment_value: number
}
