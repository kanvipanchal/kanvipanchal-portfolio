import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'
import Card from '@components/ui/Card.jsx'

export default function Github() {
  return (
    <Section className="pt-16">
      <Heading eyebrow="Open Source" size="display" as="h1" className="mb-12 max-w-xl">GitHub Activity</Heading>
      <Card>
        <p className="text-sm text-[var(--text-secondary)]">
          Repositories, contribution graph, languages, stars, and recent activity render here via the GitHub API
          (see services/githubService.js in the full build).
        </p>
      </Card>
    </Section>
  )
}
