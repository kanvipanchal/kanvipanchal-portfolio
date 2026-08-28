import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'

export default function Testimonials() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Client Feedback" size="display" as="h1" className="mb-12 max-w-xl">Testimonials</Heading>
      <Card>
        <p className="text-sm text-[var(--text-secondary)]">
          Client testimonials will appear here once collected — this section is fully admin-editable in the CMS build.
        </p>
      </Card>
    </Section>
  )
}
