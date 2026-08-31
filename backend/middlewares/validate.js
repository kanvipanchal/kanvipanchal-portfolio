import { validationResult } from 'express-validator'

/** Runs after express-validator rule chains; short-circuits with 422 on failure. */
export function validate(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Validation failed', errors: errors.array() })
  }
  next()
}
