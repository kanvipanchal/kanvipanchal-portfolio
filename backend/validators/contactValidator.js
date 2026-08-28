import { body } from 'express-validator'

export const contactValidationRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('A valid email is required'),
  body('message').trim().isLength({ min: 20 }).withMessage('Message must be at least 20 characters'),
  body('phone').optional({ checkFalsy: true }).isMobilePhone().withMessage('Invalid phone number'),
]
