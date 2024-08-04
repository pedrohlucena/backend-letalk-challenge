import mongoose from 'mongoose'
import { COLLECTION_NAMES } from '../constants'

export function createMongooseModel<T extends mongoose.Schema>(
  name: string,
  schema: T,
  collection: COLLECTION_NAMES,
) {
  return mongoose.model(name, schema, `dev_${collection}`)
}
