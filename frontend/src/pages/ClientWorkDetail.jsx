import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import Button from '@components/ui/Button.jsx'
import { clientWork } from '@data/clientWork.js'

export default function ClientWorkDetail() {
  const { id } = useParams()
  const site = clientWork.find((s) => s.id === id)

  if (!site) return <Navigate to="/404" replace />

  return (
    <Section className="pt-16">
      <Link to="/client-work" className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]">
        <ArrowLeft size={14} /> Back to Client Work
      </Link>

      <Heading as="h1" size="display" className="max-w-2xl">{site.name}</Heading>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{site.summary}</p>

      {site.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {site.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
        </div>
      )}

      {site.url && (
        <Button as="a" href={site.url} target="_blank" rel="noreferrer" className="mt-8" icon={ExternalLink}>
          Visit Live Website
        </Button>
      )}

      {!site.confirmed && (
        <p className="mt-8 rounded-[var(--radius-sm)] border border-dashed border-[var(--border-subtle)] p-4 text-sm text-[var(--text-muted)]">
          Full case study — overview, contribution, and gallery — pending content from the admin CMS.
        </p>
      )}
    </Section>
  )
}
