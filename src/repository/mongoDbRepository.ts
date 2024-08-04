import { Model } from 'mongoose'

export class MongoDbRepo<T> {
  private model: Model<T>

  constructor(model: Model<T>) {
    this.model = model
  }

  async create(params: T) {
    const cursor = await this.model.create<T>(params)
    return cursor
  }
}
