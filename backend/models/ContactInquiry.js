import mongoose from 'mongoose'

const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    phone: String,
    budget: String,
    timeline: String,
    projectType: String,
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
  },
  { timestamps: true },
)

export default mongoose.model('ContactInquiry', contactInquirySchema)
