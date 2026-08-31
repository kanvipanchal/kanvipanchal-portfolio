import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'

export default function BlogDetail() {
  const { id } = useParams()
  return (
    <Section className="pt-16">
      <Link to="/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]">
        <ArrowLeft size={14} /> Back to Blog
      </Link>
      <Heading as="h1" size="display">Post: {id}</Heading>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
        Full markdown-rendered article content, categories, tags, and related posts render here once the CMS/backend is connected.
      </p>
    </Section>
  )
}
