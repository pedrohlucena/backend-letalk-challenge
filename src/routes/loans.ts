import { Router } from 'express'
import { getLoanSimulation } from '../controllers'

const router = Router()

router.get('/simulation', getLoanSimulation)

export { router as loansRoutes }
