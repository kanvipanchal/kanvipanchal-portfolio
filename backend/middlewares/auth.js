import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export function requireAuth(req, res, next) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' })
  }
  try {
    const token = header.split(' ')[1]
    req.admin = jwt.verify(token, env.jwtSecret)
    next()
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}
