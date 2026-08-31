import { Download } from 'lucide-react'
import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Button from '@components/ui/Button.jsx'

export default function Resume() {
  return (
    <Section className="pt-16 text-center">
      <Heading eyebrow="CV" size="display" as="h1" className="mx-auto max-w-xl">Resume</Heading>
      <p className="mx-auto mt-4 max-w-md text-[var(--text-secondary)]">
        Download the latest PDF resume covering 10+ live website launches, hands-on MERN experience, and client-facing delivery work.
      </p>
      <Button as="a" href="/resume.pdf" download className="mt-8" icon={Download}>
        Download Resume
      </Button>
    </Section>
  )
}
