import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'
import { env } from '../config/env.js'

export async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email }).select('+password')
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = jwt.sign({ id: admin._id, email: admin.email }, env.jwtSecret, {
      expiresIn: env.jwtExpiresIn,
    })
    res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } })
  } catch (err) {
    next(err)
  }
}
