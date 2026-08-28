import mongoose from 'mongoose'

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: String,
    contentMarkdown: { type: String, required: true },
    coverImage: String,
    categories: [String],
    tags: [String],
    published: { type: Boolean, default: false },
    publishedAt: Date,
  },
  { timestamps: true },
)

export default mongoose.model('BlogPost', blogPostSchema)
