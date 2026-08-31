import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: env.emailUser, pass: env.emailPass },
})

/** Notifies the admin whenever a new contact inquiry is submitted. */
export async function sendInquiryNotification(inquiry) {
  if (!env.emailUser || !env.adminNotifyEmail) return // not configured; skip silently in dev

  await transporter.sendMail({
    from: env.emailUser,
    to: env.adminNotifyEmail,
    subject: `New Inquiry: ${inquiry.projectType || 'General'} — ${inquiry.name}`,
    html: `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Company:</strong> ${inquiry.company || '—'}</p>
      <p><strong>Budget:</strong> ${inquiry.budget || '—'}</p>
      <p><strong>Timeline:</strong> ${inquiry.timeline || '—'}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message}</p>
    `,
  })
}
