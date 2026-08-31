import { Router } from 'express'
import { createInquiry, listInquiries, updateInquiryStatus } from '../controllers/contactController.js'
import { contactValidationRules } from '../validators/contactValidator.js'
import { validate } from '../middlewares/validate.js'
import { requireAuth } from '../middlewares/auth.js'

const router = Router()

router.post('/', contactValidationRules, validate, createInquiry)
router.get('/', requireAuth, listInquiries)
router.patch('/:id/status', requireAuth, updateInquiryStatus)

export default router
