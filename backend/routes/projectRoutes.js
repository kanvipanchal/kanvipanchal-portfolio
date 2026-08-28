import { Router } from 'express'
import {
  listProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'
import { requireAuth } from '../middlewares/auth.js'

const router = Router()

router.get('/', listProjects)
router.get('/:slug', getProjectBySlug)
router.post('/', requireAuth, createProject)
router.put('/:id', requireAuth, updateProject)
router.delete('/:id', requireAuth, deleteProject)

export default router
