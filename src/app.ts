import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import { loansRoutes } from './routes'
import { HTTP_STATUS_CODE } from './constants'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(json())

app.use('/loans', loansRoutes)

app.use((err: Error, _: Request, res: Response, _2: NextFunction) => {
  res
    .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
    .json({ message: err.message })
})

app.listen(3000)
