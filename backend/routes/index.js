import { Router } from 'express'
import contactRoutes from './contactRoutes.js'
import authRoutes from './authRoutes.js'
import projectRoutes from './projectRoutes.js'
// clientWorkRoutes, blogRoutes, testimonialRoutes, settingsRoutes follow the
// same pattern as projectRoutes.js — add them here as each is built out.

const router = Router()

router.use('/contact', contactRoutes)
router.use('/auth', authRoutes)
router.use('/projects', projectRoutes)

export default router
