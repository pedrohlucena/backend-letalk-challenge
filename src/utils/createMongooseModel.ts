import mongoose from 'mongoose'
import { COLLECTION_NAMES } from '../constants'
import { env } from '../config'

export function createMongooseModel<T extends mongoose.Schema>(
  name: string,
  schema: T,
  collection: COLLECTION_NAMES,
) {
  return mongoose.model(name, schema, `${env.NODE_ENV}_${collection}`)
}
