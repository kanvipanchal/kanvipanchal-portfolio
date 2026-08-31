import mongoose from 'mongoose'

const siteSettingsSchema = new mongoose.Schema(
  {
    heroHeadline: String,
    heroSubheadline: String,
    stats: [{ label: String, value: String }],
    availability: {
      freelance: { type: Boolean, default: true },
      contract: { type: Boolean, default: true },
      fullTime: { type: Boolean, default: true },
      responseTime: String,
    },
    socialLinks: { github: String, linkedin: String, twitter: String },
    seo: {
      defaultTitle: String,
      defaultDescription: String,
      ogImage: String,
    },
  },
  { timestamps: true },
)

export default mongoose.model('SiteSettings', siteSettingsSchema)
