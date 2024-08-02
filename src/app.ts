import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'

const app = express()

app.use(json())

app.use((err: Error, _: Request, res: Response, _2: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000)
