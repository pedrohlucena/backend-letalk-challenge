import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import { loansRoutes } from './routes'
import { HTTP_STATUS_CODE } from './constants'
import cors from 'cors'
import { env, setupDB } from './config'
;(async () => {
  const app = express()

  await setupDB()

  console.log('DB OK!')

  app.use(cors())

  app.use(json())

  app.use('/loans', loansRoutes)

  app.use((err: Error, _: Request, res: Response, _2: NextFunction) => {
    res
      .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: err.message })
  })

  const port = env.PORT

  app.listen(port, () => console.log(`Server up and running on port ${port}`))
})()
