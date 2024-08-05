import mongoose from 'mongoose'
import { env } from '../config'

export const setupDB = async () => {
  const connectionState = mongoose.connection.readyState

  if (connectionState.valueOf() !== 1) {
    await mongoose.connect(env.MONGODB_CONNECTION_STR, {
      dbName: env.DB_NAME,
      retryWrites: true,
      w: 'majority',
      appName: 'letalk-challenge',
    })
  }
}
