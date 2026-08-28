import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: String,
    description: { type: String, required: true },
    problem: String,
    solution: String,
    architecture: String,
    features: [String],
    tech: [String],
    screenshots: [String],
    challenges: String,
    result: String,
    github: String,
    live: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export default mongoose.model('Project', projectSchema)
