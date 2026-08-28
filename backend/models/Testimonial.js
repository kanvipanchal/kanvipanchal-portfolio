import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    clientRole: String,
    company: String,
    quote: { type: String, required: true },
    avatar: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export default mongoose.model('Testimonial', testimonialSchema)
