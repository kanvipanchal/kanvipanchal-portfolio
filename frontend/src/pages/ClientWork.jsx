import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import Badge from '@components/ui/Badge.jsx'
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clientWork.map((site) => (
          <Card key={site.id} hoverable as="a" href={`/client-work/${site.id}`}>
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-[var(--text-primary)]">{site.name}</h3>
              {site.confirmed && <Badge tone="success">Live</Badge>}
            </div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{site.summary}</p>
            {site.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {site.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
