import { Router } from 'express'
import {
  getInstallmentsProjection,
  getLoanSimulation,
  postLoan,
} from '../controllers'

const router = Router()

router.get('/simulation', getLoanSimulation)

router.get('/installments/projection', getInstallmentsProjection)

router.post('/', postLoan)

export { router as loansRoutes }
