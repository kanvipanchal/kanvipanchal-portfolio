import ContactInquiry from '../models/ContactInquiry.js'
import { sendInquiryNotification } from '../services/emailService.js'

export async function createInquiry(req, res, next) {
  try {
    const inquiry = await ContactInquiry.create(req.body)
    sendInquiryNotification(inquiry).catch((err) => console.error('Email notify failed:', err.message))
    res.status(201).json({ message: 'Inquiry received', inquiry })
  } catch (err) {
    next(err)
  }
}

export async function listInquiries(req, res, next) {
  try {
    const inquiries = await ContactInquiry.find().sort('-createdAt')
    res.json(inquiries)
  } catch (err) {
    next(err)
  }
}

export async function updateInquiryStatus(req, res, next) {
  try {
    const inquiry = await ContactInquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    )
    if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' })
    res.json(inquiry)
  } catch (err) {
    next(err)
  }
}
