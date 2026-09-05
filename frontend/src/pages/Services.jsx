import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'
import CTASection from '@components/sections/CTASection.jsx'
import { SERVICES } from '@constants/services.js'

export default function Services() {
  return (
    <>
      <Section className="pt-16">
        <Heading eyebrow="What I Offer" size="display" as="h1" className="mb-12 max-w-xl">
          Services
        </Heading>
        <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
          These services are shaped by hands-on experience launching 10+ live websites for business and e-commerce clients.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, index) => (
            <Card key={s.title}>
              <p className="mb-6 text-sm font-medium text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-medium text-[var(--text-primary)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{s.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  )
}
