import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import { loansRoutes } from './routes'
import cors from 'cors'
import { setupDB } from './config'
import { BusinessError } from './exceptions'
const app = express()

setupDB()

console.log('DB OK!')

app.use(cors())

app.use(json())

app.use('/loans', loansRoutes)

app.use((err: BusinessError, _: Request, res: Response, _2: NextFunction) => {
  const { code, message, statusCode } = err
  const response = { code, message }
  res.status(statusCode).json(response)
})

export { app }
