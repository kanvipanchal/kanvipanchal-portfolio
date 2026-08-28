import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@components/ui/icons/BrandIcons.jsx'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import { projects } from '@data/projects.js'

export default function Projects() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Personal Projects" size="display" as="h1" className="mb-12 max-w-xl">
        Things I've Built
      </Heading>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.id} hoverable as="a" href={`/projects/${p.id}`}>
            <p className="font-mono text-xs text-[var(--accent)]">{p.subtitle}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
            </div>
            <div className="mt-4 flex gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><GithubIcon size={14} /> Code</span>
              <span className="flex items-center gap-1"><ExternalLink size={14} /> Live</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
