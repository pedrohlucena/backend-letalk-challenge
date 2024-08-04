import { UF } from '../models'

export type PostLoanBody = {
  client_cpf: string
  uf: UF
  loan_value: number
  installment_value: number
}
