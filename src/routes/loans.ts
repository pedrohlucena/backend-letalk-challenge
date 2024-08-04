import { Router } from 'express'
import {
  getInstallmentsProjection,
  getLoans,
  getLoanSimulation,
  postLoan,
} from '../controllers'

const router = Router()

router.get('/simulation', getLoanSimulation)

router.get('/installments/projection', getInstallmentsProjection)

router.post('/', postLoan)

router.get('/', getLoans)

export { router as loansRoutes }
