import mongoose from 'mongoose'

const clientWorkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    url: String,
    companyOverview: String,
    projectOverview: String,
    businessGoal: String,
    myContribution: String,
    tech: [String],
    features: [String],
    challenges: String,
    solutions: String,
    gallery: [String],
    performanceNotes: String,
    seoImprovements: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
)

export default mongoose.model('ClientWork', clientWorkSchema)
