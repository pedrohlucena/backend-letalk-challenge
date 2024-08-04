import { Model } from 'mongoose'

export class MongoDbRepo<T> {
  private model: Model<T>

  constructor(model: Model<T>) {
    this.model = model
  }

  async get(params?: Partial<T>) {
    const cursor = await this.model.find<T>(params || {})
    return cursor
  }

  async create(params: T) {
    const cursor = await this.model.create<T>(params)
    return cursor
  }
}
