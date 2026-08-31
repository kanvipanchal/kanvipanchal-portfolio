import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import { personalInfo, coreValues } from '@data/personalInfo.js'
import { education, achievements } from '@data/experience.js'

export default function About() {
  return (
    <>
      <Section className="pt-16">
        <Heading eyebrow="About" size="display" as="h1" className="max-w-2xl">
          The story behind the code.
        </Heading>
        <p className="mt-6 max-w-2xl text-[var(--text-secondary)]">{personalInfo.summary}</p>
        <p className="mt-4 max-w-2xl text-sm font-medium text-[var(--accent)] sm:text-base">
          Over 10 live websites shipped for real businesses, with a focus on speed, clarity, and scalable builds.
        </p>
      </Section>

      <Section tone="surface">
        <Heading size="h2" className="mb-8">Core Values</Heading>
        <div className="grid gap-6 sm:grid-cols-3">
          {coreValues.map((v) => (
            <Card key={v.title}>
              <h3 className="font-medium text-[var(--text-primary)]">{v.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Heading size="h2" className="mb-8">Education</Heading>
        <div className="space-y-4">
          {education.map((e) => (
            <Card key={e.id} className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-medium text-[var(--text-primary)]">{e.degree}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{e.institution}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-[var(--accent)]">{e.period}</p>
                <p className="text-sm text-[var(--text-muted)]">{e.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Heading size="h2" className="mb-8">Achievements</Heading>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              {a}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
