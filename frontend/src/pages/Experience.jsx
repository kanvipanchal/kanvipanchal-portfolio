import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import Badge from '@components/ui/Badge.jsx'
import { experience } from '@data/experience.js'

export default function Experience() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Career" size="display" as="h1" className="mb-12 max-w-xl">
        Professional Experience
      </Heading>

      <div className="relative space-y-8 border-l border-[var(--border-subtle)] pl-8">
        {experience.map((job) => (
          <div key={job.id} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">{job.role}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  {job.current && <Badge tone="success" dot>Current</Badge>}
                  <span className="font-mono text-xs text-[var(--text-muted)]">{job.period}</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => <TechTag key={t}>{t}</TechTag>)}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}
