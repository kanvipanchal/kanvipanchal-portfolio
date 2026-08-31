import Section from '@components/ui/Section.jsx'
import Heading from '@components/ui/Heading.jsx'

export default function DataPolicyPage() {
  return (
    <Section className="pt-16">
      <Heading size="display" as="h1" className="mb-6 max-w-xl">Privacy Policy</Heading>
      <div className="max-w-2xl space-y-4 text-sm text-[var(--text-secondary)]">
        <p>This site collects contact form submissions (name, email, and message) solely to respond to project inquiries. No data is sold or shared with third parties.</p>
        <p>Analytics cookies may be used to understand site usage. You can disable cookies in your browser settings at any time.</p>
      </div>
    </Section>
  )
}
