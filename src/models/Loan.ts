import mongoose from 'mongoose'
import { createMongooseModel } from '../utils'
import { COLLECTION_NAMES } from '../constants'

const LoanSchema = new mongoose.Schema({
  client_cpf: { type: String, required: true },
  uf: { type: String, required: true },
  interest_rate: { type: Number, required: true },
  loan_value: { type: Number, required: true },
  installment_value: { type: Number, required: true },
  creation_date: {
    type: Date,
    default: Date.now,
  },
})

export const Loan = createMongooseModel<typeof LoanSchema>(
  'Loan',
  LoanSchema,
  COLLECTION_NAMES.LOANS,
)
