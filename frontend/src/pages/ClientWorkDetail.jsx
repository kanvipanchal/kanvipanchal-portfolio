import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import Button from '@components/ui/Button.jsx'
import Badge from '@components/ui/Badge.jsx'
import Card from '@components/ui/Card.jsx'
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

      <Heading eyebrow={site.industry} as="h1" size="display" className="max-w-2xl">{site.name}</Heading>
      <Badge className="mt-4" tone={site.status === 'in-progress' ? 'accent' : 'neutral'}>
        {site.status === 'in-progress' ? 'In Progress' : 'Completed'}
      </Badge>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{site.summary}</p>

      {site.overview && (
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">About the Business</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--text-secondary)]">{site.overview}</p>
            {site.highlights?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Website Highlights</h2>
                <ul className="mt-4 space-y-4">
                  {site.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Card className="bg-[var(--bg-surface-2)]">
            <h2 className="text-lg font-semibold">At a Glance</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div><dt className="text-[var(--text-muted)]">Industry</dt><dd className="mt-1 font-medium">{site.industry}</dd></div>
              <div><dt className="text-[var(--text-muted)]">Website</dt><dd className="mt-1 break-all"><a href={site.url} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">{new URL(site.url).hostname}</a></dd></div>
            </dl>
            <p className="mt-6 border-t pt-5 text-xs leading-6 text-[var(--text-secondary)]">
              Business information from{' '}
              <a href={site.sourceUrl} target="_blank" rel="noreferrer" className="text-[var(--accent)] underline underline-offset-4">{site.sourceLabel}</a>.
            </p>
          </Card>
        </div>
      )}

      {site.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {site.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
        </div>
      )}

      {site.url && (
        <Button as="a" href={site.url} target="_blank" rel="noreferrer" className="mt-8" icon={ExternalLink}>
          {site.status === 'in-progress' ? 'View Project Preview' : 'Visit Website'}
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
