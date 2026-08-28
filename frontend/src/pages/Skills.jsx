import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import TechTag from '@components/ui/TechTag.jsx'
import { skillCategories } from '@data/skills.js'

export default function Skills() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Tech Stack" size="display" as="h1" className="mb-12 max-w-xl">
        Skills & Tools
      </Heading>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <Card key={cat.id}>
            <h3 className="font-medium text-[var(--text-primary)]">{cat.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((s) => <TechTag key={s}>{s}</TechTag>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
