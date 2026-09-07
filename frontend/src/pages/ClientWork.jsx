import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import { ExternalLink } from 'lucide-react'
import { clientWork } from '@data/clientWork.js'

export default function ClientWork() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Production Websites" size="display" as="h1" className="mb-12 max-w-xl">
        Client Work
      </Heading>
      <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
        A snapshot of the client work behind 10+ live website launches across business, brand, and e-commerce projects.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {clientWork.map((site) => (
          <Card key={site.id} hoverable as="a" href={`/client-work/${site.id}`}>
            <p className="font-mono text-xs text-[var(--accent)]">{site.industry}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{site.name}</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{site.summary}</p>
            {site.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {site.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
              </div>
            )}
            <div className="mt-4 flex gap-4 text-xs text-[var(--text-muted)]">
              <span>Case Study</span>
              <span className="flex items-center gap-1"><ExternalLink size={14} /> Live</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
