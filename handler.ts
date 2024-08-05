import { app } from './src/app'
import serverless from 'serverless-http'

export const run = serverless(app)
