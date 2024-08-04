import { Router } from 'express'
import { getInstallmentsProjection, getLoanSimulation } from '../controllers'

const router = Router()

router.get('/simulation', getLoanSimulation)

router.get('/installments/projection', getInstallmentsProjection)

export { router as loansRoutes }
