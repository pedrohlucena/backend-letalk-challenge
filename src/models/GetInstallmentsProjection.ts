import { UF } from '../models'

export type GetInstallmentsProjectionParameters = Partial<{
  uf: string
  loan_value: string
  installment_value: string
}>

export type GetInstallmentsProjectionQuery = {
  uf: UF
  loan_value: number
  installment_value: number
}
